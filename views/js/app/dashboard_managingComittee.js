$(function() {

    let $appEvents = $("#app_vorstand");

    if ($appEvents.length > 0) {

        $.getJSON("/api/managingComittee", function( managingComittee ) {

            let managingComitteTable = Handlebars.templates.managingComittee_table({
                managingComittee: managingComittee,
            });

            $appEvents.html(managingComitteTable);

            initDatatable("managingComitteeTable");
        });

    }

    let $appClubMeeting = $("#app_vereinsversammlung");

    if ($appClubMeeting.length > 0) {
        $.getJSON("/api/clubMeeting", function (clubMeeting) {

            let clubMeetingTable = Handlebars.templates.clubMeeting_table({
                clubMeeting: clubMeeting,
            });

            $appClubMeeting.html(clubMeetingTable);

            initDatatable("clubMeetingTable", 5);
        });

    }
});
