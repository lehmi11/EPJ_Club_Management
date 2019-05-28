var teams = function() {};

/**
 * Event zum Durchreichen der TeamId durch Klick auf Mülleimer Icon an das Modal
 */

teams.deleteTeamModal = function() {
    $(document).on("click", ".deleteTeam", function() {
        let teamId = $(this).attr('data-teamId');

        $(".deleteConfirmationTeam").attr('data-teamId', teamId);
    });
};

/**
 * Event registrieren zum Löschen durch Buttonklick im Modal
 */

teams.deleteTeam = function() {
    $(document).on('click', ".deleteConfirmationTeam", function() {

        let teamId = $(this).attr('data-teamId');
        $.ajax({
            url: '/api/groups/' + teamId,
            type: 'DELETE',
            success: function() {
                window.location.href = '/teams';
            }
        });
    });
};


/**
 * Event registrieren zum Editieren von Gruppen
 */
teams.editTeam = function() {
    $(document).on('click', ".editTeam", function () {
        // Teamdaten für die Anzeige im Modal laden
        $.getJSON("/api/groups/" + $(this).data('teamid'), function( team ) {
            $("#editTeamModal .inputId").val(team.id);
            $("#editTeamModal .inputTeam").val(team.name);
            $("#editTeamModal .inputVerantwortlicher").val(team.verantwortlicher);
        });
    });
};


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

        // Registriere Event zum Öffnen des Löschenmodals
        teams.deleteTeamModal();

        // Registriere Event zum Löschen des Teams (Click zum Löschen im Modal)
        teams.deleteTeam();
    
        // Registriere Event zum Editieren des Teams
        teams.editTeam();
});
