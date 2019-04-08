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

            // Datatable settings
            $("#memberTable").DataTable( {
                "lengthChange": false,
                language: {
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
                    "oPaginate": {
                        "sFirst":       "Erste",
                        "sPrevious":    "Zurück",
                        "sNext":        "Nächste",
                        "sLast":        "Letzte"
                    },
                    "oAria": {
                        "sSortAscending":  ": aktivieren, um Spalte aufsteigend zu sortieren",
                        "sSortDescending": ": aktivieren, um Spalte absteigend zu sortieren"
                    },
                    "select": {
                        "rows": {
                            "_": "%d Zeilen ausgewählt",
                            "0": "",
                            "1": "1 Zeile ausgewählt"
                        }
                    },
                    "buttons": {
                        "print":    "Drucken",
                        "colvis":   "Spalten",
                        "copy":     "Kopieren",
                        "copyTitle":    "In Zwischenablage kopieren",
                        "copyKeys": "Taste <i>ctrl</i> oder <i>\u2318</i> + <i>C</i> um Tabelle<br>in Zwischenspeicher zu kopieren.<br><br>Um abzubrechen die Nachricht anklicken oder Escape drücken.",
                        "copySuccess": {
                            "_": "%d Spalten kopiert",
                            "1": "1 Spalte kopiert"
                        }
                    }
                }
            });

            // Custom search field
            $("#memberTable_filter").hide();
            $("#dataTableSearch").keyup(function() {
                $("#memberTable").DataTable().search($(this).val()).draw() ;
            });
        });
    }
});
