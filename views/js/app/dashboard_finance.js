$(document).ready(function() {

    let $appDashboardFinance = $("#app_dashboard_finance");

    // check if we found the dashboard element
    if ($appDashboardFinance.length > 0) {

        // load dashboard values
        $.getJSON( "/api/dashboard", function( data ) {
            $appDashboardFinance.find(".app_total").html(data.totalMembershipPaid + " CHF");
            $appDashboardFinance.find(".app_notpaid").html(data.totalMembershipNotPaid + " CHF");
            $appDashboardFinance.find(".app_warning").html(data.totalMembershipWarning + " CHF");
        });
    }

    let $appMembersNotPaid = $("#app_members_not_paid");

    // check if we found the members not paid element
    if ($appMembersNotPaid.length > 0) {

        // load dashboard members not paid
        $.getJSON( "/api/members/notpaid", function( members ) {

            let memberTable = Handlebars.templates.member_table({
                members: members,
            });

            $appMembersNotPaid.html(memberTable);

            $('#memberTable').DataTable( window.globalDataTableConf );
        });
    }
});