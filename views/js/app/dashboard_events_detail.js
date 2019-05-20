$(function() {

    let $app_verantwortlicher = $("#eventVerantwortlicher");
    let $app_datum = $("#eventDatum");
    let $app_name = $("#eventName");
    let $app_ort = $("#eventOrt");
    let $app_zeit = $("#eventZeit");

    if ($app_verantwortlicher.length > 0){

        $.getJSON( "/api/events/specific", function( data ) {
            $app_verantwortlicher.html(data[0].Verantwortlicher);
            $app_datum.html(data[0].Datum);
            $app_ort.html("Ort: "+data[0].Ort);
            $app_zeit.html(data[0].Start+" - "+data[0].Ende);
            $app_name.html(data[0].Name);
        });

    }

    let $appEventDetail = $("#app_event_detail");

    if ($appEventDetail.length > 0) {

        $.getJSON("/api/events/specific", function ( event ) {

            let eventTable = Handlebars.templates.event_detail_table({
                event: event,
            });

            $appEventDetail.html(eventTable);

            initDatatable("eventTable", 3);
        });

    }
});
