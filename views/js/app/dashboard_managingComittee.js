$(function() {

    let $appEvents = $("#app_vorstand");

    if ($appEvents.length > 0) {

        $.getJSON("/api/members/ManagingComittee", function( managingComittee ) {

            let managingComitteTable = Handlebars.templates.managingComittee_table({
                managingComittee: managingComittee,
            });

            $appEvents.html(managingComitteTable);

            initDatatable("managingComitteeTable");
        });

    }
});
