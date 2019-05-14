$(function () {

    let $appGroups = $("#app_groups");

    if ($appGroups.length > 0) {

<<<<<<< HEAD
        $.getJSON("/api/groupsAll", function (groups) {
=======
        $.getJSON("/api/groups", function ( group ) {
>>>>>>> d4e0e1d984c347076c756de4b5bb9473e97bbf0f

            let groupsTable = Handlebars.templates.group_table({
                group: group,
            });

            $appGroups.html(groupsTable);

            initDatatable("groupsTable");

        });

    }
});
