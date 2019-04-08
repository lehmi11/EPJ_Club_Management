$(document).ready(function() {

    let $appDashboardFinance = $("#app_dashboard_finance");

    // check if we found the dashboard element
    if ($appDashboardFinance.length > 0) {

        // load dashboard values
        $.getJSON( "/api/dashboard", function( data ) {
            $appDashboardFinance.find(".app_total").html(data.totalMembershipPaid + " CHF");
            $appDashboardFinance.find(".app_notpaid").html(data.totalMembershipNotPaid + " CHF");
            $appDashboardFinance.find(".app_warning").html(data.totalMembershipWarning + " CHF");
        });
    }

    let $appMembersNotPaid = $("#app_members_not_paid");

    // check if we found the members not paid element
    if ($appMembersNotPaid.length > 0) {

        // load dashboard members not paid
        $.getJSON( "/api/members/notpaid", function( members ) {

            let memberTable = Handlebars.templates.member_table({
                members: members,
            });

            $appMembersNotPaid.html(memberTable);

            window.globalDataTableConf = {
                language: {
                    "buttons": {
                        "colvis":   "Spalten",
                        "copy":     "Kopieren",
                        "copyKeys": "Taste <i>ctrl</i> oder <i>\u2318</i> + <i>C</i> um Tabelle" +
                            "<br>in Zwischenspeicher zu kopieren.<br><br>" +
                            "Um abzubrechen die Nachricht anklicken oder Escape drücken.",
                        "copySuccess": {
                            "1": "1 Spalte kopiert",
                            "_": "%d Spalten kopiert",
                        },
                        "copyTitle":    "In Zwischenablage kopieren",
                        "print": "Drucken",
                    },
                    "oAria": {
                        "sSortAscending":  ": aktivieren, um Spalte aufsteigend zu sortieren",
                        "sSortDescending": ": aktivieren, um Spalte absteigend zu sortieren",
                    },
                    "oPaginate": {
                        "sFirst":       "Erste",
                        "sLast":        "Letzte",
                        "sNext":        "Nächste",
                        "sPrevious":    "Zurück",
                    },
                    "sEmptyTable":      "Keine Daten in der Tabelle vorhanden",
                    "sInfo":            "_START_ bis _END_ von _TOTAL_ Einträgen",
                    "sInfoEmpty":       "Keine Daten vorhanden",
                    "sInfoFiltered":    "(gefiltert von _MAX_ Einträgen)",
                    "sInfoPostFix":     "",
                    "sInfoThousands":   ".",
                    "sLengthMenu":      "_MENU_ Einträge",
                    "sLoadingRecords":  "Wird geladen ..",
                    "sProcessing":      "Bitte warten ..",
                    "sSearch":          "Suchen",
                    "sZeroRecords":     "Keine Einträge vorhanden",
                    "select": {
                        "rows": {
                            "0": "",
                            "1": "1 Zeile ausgewählt",
                            "_": "%d Zeilen ausgewählt",
                        },
                    },
                },
                "lengthChange": false,
            };

            // Datatable settings
            $("#memberTable").DataTable( window.globalDataTableConf );

            // Disable Datatable search field
            $("#memberTable_filter").hide();

            // Custom search field
            $("#dataTableSearch").keyup(function() {
                $("#memberTable").DataTable().search($(this).val()).draw() ;
            });
        });
    }
});
