var members = function() {};

/**
 * Event zum Durchreichen der MemberId durch Klick auf Mülleimer Icon an das Modal
 */
members.deleteMemberModal = function() {
    // Übertrage die ID
    $(document).on('click', ".deleteMember", function() {
        // Hole ID vom Button
        let memberId = $(this).attr('data-memberId');

        // Hänge die ID an den Button im Modal an
        $(".deleteConfirmationMember").attr('data-memberId', memberId);
    });
};

/**
 * Event registrieren zum Löschen durch Buttonklick im Modal
 */
members.deleteMember = function() {
    $(document).on('click', ".deleteConfirmationMember", function() {

        let memberId = $(this).attr('data-memberId');
        $.ajax({
            url: '/api/members/' + memberId,
            type: 'DELETE',
            success: function() {
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

    // Registriere Event zum Öffnen des Löschenmodals
    members.deleteMemberModal();

    // Registriere Event zum Löschen des Mitglieds (Click zum Löschen im Modal)
    members.deleteMember();

    // Registriere Event zum Editieren des Mitglieds
    members.editMember();

});
