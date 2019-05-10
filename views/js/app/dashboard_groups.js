$(function() {

    let $appGroups = $("#app_groups");

    if ($appGroups.length > 0) {

        $.getJSON("/api/groups/WithCount", function ( groups ) {

            let groupsTable = Handlebars.templates.group_table({
                groups: groups,
            });

            $appGroups.html(groupsTable);

            initDatatable("groupsTable");

        });

    }
});
