import express = require("express");
const router = express.Router();
import {eventController} from "../controllers/eventController";
import {memberController} from "../controllers/memberController";
import {teamController} from "../controllers/teamController";

router.get("/dashboard", memberController.getFinanceDashboard.bind(memberController));

// financeRoutes
router.get("/members/notpaid", memberController.getMembersNotPaid.bind(memberController));
router.get("/members/paymentStatus", memberController.getMembersPaymentStatus.bind(memberController));
router.get("/members/FeeNotPaid", memberController.getMembersFeeNotPaid.bind(memberController));

// memberRoutes
router.get("/members", memberController.getMembers.bind(memberController));
router.post("/members", memberController.createMember.bind(memberController));
router.post("/members/edit", memberController.editMember.bind(memberController));
router.delete("/members/:memberId", memberController.deleteMember.bind(memberController));
router.get("/members/:memberId", memberController.getMemberById.bind(memberController));
router.get("/managingComittee", memberController.getManagingComittee.bind(memberController));

// eventRoutes
router.get("/events", eventController.getEvents.bind(eventController));
router.post("/events", eventController.createEvent.bind(eventController));
router.post("/events/edit", eventController.editEvent.bind(eventController));
router.delete("/events/:eventId", eventController.deleteEvent.bind(eventController));
router.get("/events/:eventId", eventController.getEventById.bind(eventController));
router.get("/clubMeeting", eventController.getClubMeetings.bind(eventController));
router.get("/events/participants/:eventId", eventController.getParticipantsOfEvent.bind(eventController));


// groupRoutes
router.get("/groups", teamController.getGroups.bind(teamController));
router.get("/groups/WithMembers", teamController.getGroupsWithMembers.bind(teamController));

export const apiRoutes = router;
