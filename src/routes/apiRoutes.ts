import express = require("express");
const router = express.Router();
import { eventController } from "../controllers/eventController";
import { memberController } from "../controllers/memberController";
import { teamController } from "../controllers/teamController";

router.get("/dashboard", memberController.getFinanceDashboard.bind(memberController));

router.get("/members/notpaid", memberController.getMembersNotPaid.bind(memberController));
router.get("/members/paymentStatus", memberController.getMembersPaymentStatus.bind(memberController));

router.get("/members", memberController.getMembers.bind(memberController));
// router.post("/members", memberController.createMember.bind(apiController));
// router.delete("/member/:memberId", memberController.deleteMember.bind(apiController));
router.get("/members/:memberId", memberController.getMemberById.bind(memberController));

router.get("/events", eventController.getEvents.bind(eventController));
router.post("/events", eventController.createEvent.bind(eventController));
router.delete("/events/:eventId", eventController.deleteEvent.bind(eventController));
router.get("/events/:eventId", eventController.getEventById.bind(eventController));

router.get("/groups", teamController.getGroupsWithCount.bind(teamController));
router.get("/groupsAll", teamController.getTeams.bind(teamController));
router.post("/groups", teamController.createTeam.bind(teamController));
// router.delete("/groups/:groupId", teamController.deleteTeam.bind(teamController));
router.get("/groupWithMembers", teamController.getGroupWithMembers.bind(teamController));

// TODO
router.get("/membersWithAddress", memberController.getMembersWithAddress.bind(memberController));

export const apiRoutes = router;