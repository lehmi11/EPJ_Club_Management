$(function() {

    let $appDashboardFinance = $("#app_dashboard_finance");

    // check if we found the dashboard element
    if ($appDashboardFinance.length > 0) {

        $.getJSON( "/api/dashboard", function( data ) {
            $appDashboardFinance.find(".app_total").html(data.totalMembershipPaid + " CHF");
            $appDashboardFinance.find(".app_notpaid").html(data.totalMembershipNotPaid + " CHF");
            $appDashboardFinance.find(".app_warning").html(data.totalMembershipWarning + " CHF");
        });
    }

    let $appMembersNotPaid = $("#app_members_not_paid");

    // check if we found the members not paid element
    if ($appMembersNotPaid.length > 0) {

        $.getJSON( "/api/members/FeeNotPaid", function( members ) {

            let memberTable = Handlebars.templates.member_table({
                members: members,
            });

            $appMembersNotPaid.html(memberTable);

            initDatatable("memberTable");
        });
    }

    let $paymentChart = $("#paymentChart");

    // check if we found the char element
    if ($paymentChart.length > 0) {

        // get payment count
        $.getJSON( "/api/members/paymentStatus", function(data) {
            initChart( $paymentChart, ["Bezahlt", "Ausstehend", "Mahnung"], data.paymentStatus);
        });
        // Set new default font family and font color to mimic Bootstrap's default styling
        Chart.defaults.global.defaultFontFamily = "Nunito", '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = "#858796";

        function initChart(target, labels, data) {
            let myPieChart = new Chart(target, {
                type: "doughnut",
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: ["#1cc88a", "#f6c23e", "#e74a3b"],
                        hoverBackgroundColor: ["#0fcb87", "#f2b927", "#ea3b2f"],
                        hoverBorderColor: "rgba(234, 236, 244, 1)",
                    }],
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        borderColor: "#dddfeb",
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        caretPadding: 10,
                    },
                    legend: {
                        display: true,
                        position: "bottom",
                    },
                    cutoutPercentage: 80,
                },
            });
        }
    }
});
