import express = require("express");
const router = express.Router();
import {apiController} from "../controllers/apiController";

router.get("/dashboard", apiController.getFinanceDashboard.bind(apiController));

router.get("/members/notpaid", apiController.getMembersNotPaid.bind(apiController));
router.get("/members/paymentStatus", apiController.getMembersPaymentStatus.bind(apiController));

router.get("/members", apiController.getMembers.bind(apiController));
router.get("/members/:memberId", apiController.getMemberById.bind(apiController));

router.get("/events", apiController.getEvents.bind(apiController));
router.post("/events", apiController.createEvent.bind(apiController));
router.delete("/events/:eventId", apiController.deleteEvent.bind(apiController));
router.get("/events/:eventId", apiController.getEventById.bind(apiController));

router.get("/groups", apiController.getGroupsWithCount.bind(apiController));
router.get("/groupWithMembers", apiController.getGroupWithMembers.bind(apiController));
router.get("/membersWithAdress", apiController.getMembersWithAdress.bind(apiController));

export const apiRoutes = router;
