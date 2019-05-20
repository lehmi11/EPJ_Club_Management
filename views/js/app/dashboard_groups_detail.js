$(function () {

    let $app_verantwortlicher = $("#verantwortlicher");
    let $app_gruppenName = $("#Gruppenname");

    if ($app_verantwortlicher.length > 0) {
        $.getJSON("/api/WithMembers", function (data) {
            $app_verantwortlicher.html(data[0].gruppenid.verantwortlicher);
            $app_gruppenName.html(data[0].gruppenid.name);
        });

    }

    let $appGroupDetail = $("#app_group_detail");

    if ($appGroupDetail.length > 0) {
        $.getJSON("/api/WithMembers", function (groups) {
            let groupsTable = Handlebars.templates.group_detail_table({
                groups: groups,
            });

            $appGroupDetail.html(groupsTable);
            initDatatable("groupTable");
        });

    }
});
