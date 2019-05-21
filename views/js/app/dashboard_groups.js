$(function () {

    let $appGroups = $("#app_groups");

    if ($appGroups.length > 0) {
        $.getJSON("/api/groups", function (group) {
            let groupsTable = Handlebars.templates.group_table({
                group: group,
            });

            $appGroups.html(groupsTable);
            initDatatable("groupsTable", 2);
        });

    }
});
