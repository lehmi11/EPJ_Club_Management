import express = require("express");
const router = express.Router();
import {eventController} from "../controllers/eventController";
import {memberController} from "../controllers/memberController";
import {teamController} from "../controllers/teamController";

router.get("/dashboard", memberController.getFinanceDashboard.bind(memberController));

// memberRoutes
router.get("/members/notpaid", memberController.getMembersNotPaid.bind(memberController));
router.get("/members/paymentStatus", memberController.getMembersPaymentStatus.bind(memberController));
router.get("/members/FeeNotPaid", memberController.getMembersFeeNotPaid.bind(memberController));
router.get("/members", memberController.getMembers.bind(memberController));
router.get("/members/ManagingComittee", memberController.getManagingComittee.bind(memberController));
router.post("/members", memberController.createMember.bind(memberController));
router.post("/members/edit", memberController.editMember.bind(memberController));
router.delete("/members/:memberId", memberController.deleteMember.bind(memberController));
router.get("/members/:memberId", memberController.getMemberById.bind(memberController));

// eventRoutes
router.get("/events", eventController.getEvents.bind(eventController));
router.post("/events", eventController.createEvent.bind(eventController));
router.get("/clubMeeting", eventController.getClubMeetings.bind(eventController));
router.delete("/events/:eventId", eventController.deleteEvent.bind(eventController));
router.get("/events/:eventId", eventController.getEventById.bind(eventController));

// GroupRoutes
router.get("/groups", teamController.getGroupsWithCount.bind(teamController));
router.get("/groupWithMembers", teamController.getGroupsWithMembers.bind(teamController));

export const apiRoutes = router;
