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

/**
 * Event registrieren zum Editieren von Mitgliedern
 */
members.editMember = function() {
    $(document).on('click', ".editMember", function () {
        // Mitgliedsdaten für die Anzeige im Modal laden
        $.getJSON("/api/members/" + $(this).data('memberid'), function( member ) {

            $("#editMemberModal .inputId").val(member.id);
            $("#editMemberModal .selectGender").val(member.geschlecht);
            $("#editMemberModal .inputFirstName").val(member.vorname);
            $("#editMemberModal .inputLastName").val(member.name);
            $("#editMemberModal .inputBirthday").val(member.geburtsdatum);
            $("#editMemberModal .inputEmail").val(member.email);
            $("#editMemberModal .inputStreet").val(member.strasse);
            $("#editMemberModal .inputZip").val(member.plz);
            $("#editMemberModal .inputCity").val(member.ort);

        });
    });
}

$(function() {
    let $appMembersWithAddress = $("#app_membersWithAddress");

    if ($appMembersWithAddress.length > 0) {
        $.getJSON("/api/members", function( members ) {

            let membersWithAddressTable = Handlebars.templates.membersWithAddress_table({
                members: members,
            });

            $appMembersWithAddress.html(membersWithAddressTable);
            initDatatable("membersWithAddressTable");
        });
    }

    members.deleteMember();

    members.editMember();

});

