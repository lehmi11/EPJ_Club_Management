$(function() {

    let $appMembersWithAdress = $("#app_membersWithAdress");

    if ($appMembersWithAdress.length > 0) {

        $.getJSON("/api/membersWithAdress", function( members ) {

            let membersWithAdressTable = Handlebars.templates.membersWithAddress_table({
                members: members,
            });

            $appMembersWithAdress.html(membersWithAdressTable);

            initDatatable("membersWithAdressTable");
        });
    }
});
