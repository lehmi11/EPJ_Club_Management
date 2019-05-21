var events = function() {};

events.deleteEventModal = function() {
    $(document).on("click", ".deleteEvent", function() {
        let eventId = $(this).attr('data-eventId');

        $(".deleteConfirmationEvent").attr("data-eventId", eventId);
    });
};

events.deleteEvent = function() {
    $(document).on("click", ".deleteConfirmationEvent", function() {

        let eventId = $(this).attr("data-eventId");
        $.ajax({
            url: "/api/events/" + eventId,
            type: 'DELETE',
            success: function() {
                window.location.href = "/events";
            }
        });
    });
};

events.editEvent = function() {
    $(document).on("click", ".editEvent", function() {
        $.getJSON("/api/events/" + $(this).data("eventid"), function(event) {

            $("#editEventModal .inputId").val(event.id);
            $("#editEventModal .inputEvent").val(event.name);
            $("#editEventModal .inputDate").val(event.datum);
            $("#editEventModal .inputDescription").val(event.beschreibung);
            $("#editEventModal .inputFrom").val(event.von);
            $("#editEventModal .inputTo").val(event.bis);
            $("#editEventModal .inputPlace").val(event.ort);
            $("#editEventModal .inputTranscript").val(event.protokoll);
            $("#editEventModal .inputAgenda").val(event.traktadenliste);
            $("#editEventModal .inputResponsible").val(event.verantwortlicher);
        });
    });
};

$(function() {

    let $appEvents = $("#app_events");

    if ($appEvents.length > 0) {

        $.getJSON("/api/events", function( events ) {

            let eventTable = Handlebars.templates.event_table({
                events: events,
            });

            $appEvents.html(eventTable);

            initDatatable("eventTable", 4);
        });

    }

    events.deleteEventModal();
    events.deleteEvent();
    events.editEvent();
});
