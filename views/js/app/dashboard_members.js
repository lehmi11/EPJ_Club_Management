var members = function() {};

members.deleteMember = function() {
    $(document).on('click', ".deleteMember", function() {
        let memberId = $(this).attr('data-memberId');

        $.ajax({
            url: '/api/members/' + memberId,
            type: 'DELETE',
            success: function(result) {
                window.location.href = '/members';
            }
        });
    });
};

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

    // Registriere Event zum Löschen des Mitglieds
    members.deleteMember();


});

