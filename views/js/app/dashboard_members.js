$(function() {

    let $appMembersWithAddress = $("#app_membersWithAddress");

    if ($appMembersWithAddress.length > 0) {

        $.getJSON("/api/membersWithAddress", function( members ) {

            let membersWithAddressTable = Handlebars.templates.membersWithAddress_table({
                members: members,
            });

            $appMembersWithAddress.html(membersWithAddressTable);

            initDatatable("membersWithAddressTable");
        });
    }
});
