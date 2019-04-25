$(function() {

    let $appMembersWithAdress = $("#app_membersWithAdress");

    if ($appMembersWithAdress.length > 0) {

        $.getJSON("/api/membersWithAdress", function( members ) {

            let membersWithAdressTable = Handlebars.templates.membersWithAdress_table({
                members: members,
            });

            $appMembersWithAdress.html(membersWithAdressTable);

            initDatatable("membersWithAdressTable");
        });
    }
});
