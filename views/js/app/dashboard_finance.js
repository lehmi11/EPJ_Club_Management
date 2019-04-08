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

    let $paymentChart = $("#paymentChart");

    // check if we found the char element
    if ($paymentChart.length > 0) {

        // get payment count
        $.getJSON( "/api/members/paymentStatus", function(data) {
            initChart(data.paymentStatus);
        });
        // Set new default font family and font color to mimic Bootstrap's default styling
        Chart.defaults.global.defaultFontFamily = "Nunito", '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = "#858796";

        function initChart(data) {
            let myPieChart = new Chart($paymentChart, {
                type: "doughnut",
                data: {
                    labels: ["Bezahlt", "Ausstehend", "Mahnung"],
                    datasets: [{
                        data: data,
                        backgroundColor: ["#1cc88a", "#f6c23e", "#e74a3b"],
                        hoverBackgroundColor: ["#0fcb87", "#f2b927", "#ea3b2f"],
                        hoverBorderColor: "rgba(234, 236, 244, 1)",
                    }],
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        borderColor: "#dddfeb",
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        caretPadding: 10,
                    },
                    legend: {
                        display: false,
                    },
                    cutoutPercentage: 80,
                },
            });
        }
    }
});
