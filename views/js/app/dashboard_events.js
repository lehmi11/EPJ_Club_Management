$(function() {

    let $appEvents = $("#app_events");

    if ($appEvents.length > 0) {

        $.getJSON("/api/events", function( events ) {

            let eventTable = Handlebars.templates.event_table({
                events: events,
            });

            $appEvents.html(eventTable);

            initDatatable("eventTable");
        });

    }
});
