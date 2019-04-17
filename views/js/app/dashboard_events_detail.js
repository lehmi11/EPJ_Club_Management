$(document).ready(function() {


    let $app_verantwortlicher = $("#eventVerantwortlicher");
    let $app_datum = $("#eventDatum");
    let $app_name = $("#eventName");
    let $app_ort = $("#eventOrt");
    let $app_zeit = $("#eventZeit");

    if($app_verantwortlicher.length > 0){

        $.getJSON( "/api/events/specific", function( data ) {
            $app_verantwortlicher.html(data[0].Verantwortlicher);
            $app_datum.html(data[0].Datum);
            $app_ort.html(data[0].Ort);
            $app_zeit.html(data[0].Start+" - "+data[0].Ende);
            $app_name.html(data[0].Name);
        });

    }

    let $appGroupDetail = $("#app_event_detail");

    if ($appGroupDetail.length > 0) {

        $.getJSON("/api/groupWithMembers", function ( groups ) {

            let groupsTable = Handlebars.templates.event_detail_table({
                event: event,
            });

            $appGroupDetail.html(groupsTable);

            $("#dataTable").DataTable( {
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

        });

    }
});

