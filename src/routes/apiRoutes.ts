import express = require("express");
const router = express.Router();
import { apiController } from "../controllers/apiController";
import { eventController } from "../controllers/eventController";
import { memberController } from "../controllers/memberController";
import { teamController } from "../controllers/teamController";

router.get("/dashboard", apiController.getFinanceDashboard.bind(apiController));

router.get("/members/notpaid", memberController.getMembersNotPaid.bind(apiController));
router.get("/members/paymentStatus", memberController.getMembersPaymentStatus.bind(apiController));

router.get("/members", memberController.getMembers.bind(apiController));
// router.post("/members", memberController.createMember.bind(apiController));
// router.delete("/member/:memberId", memberController.deleteMember.bind(apiController));
router.get("/members/:memberId", memberController.getMemberById.bind(apiController));

router.get("/events", eventController.getEvents.bind(apiController));
router.post("/events", eventController.createEvent.bind(apiController));
router.delete("/events/:eventId", eventController.deleteEvent.bind(apiController));
router.get("/events/:eventId", eventController.getEventById.bind(apiController));

router.get("/groups", teamController.getGroupsWithCount.bind(apiController));
router.post("/groups", teamController.createTeam.bind(apiController));
router.get("/groupWithMembers", teamController.getGroupWithMembers.bind(apiController));

// TODO
router.get("/membersWithAddress", memberController.getMembersWithAddress.bind(apiController));

export const apiRoutes = router;
