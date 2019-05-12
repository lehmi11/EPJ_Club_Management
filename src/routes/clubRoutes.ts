import express = require("express");
const router = express.Router();
import { clubController } from "../controllers/clubController";

router.get("/", clubController.showIndex);
router.get("/forgot-password", clubController.showForgotPassword);
router.get("/members", clubController.showMembersView);
router.get("/teams", clubController.showTeamsView);
router.get("/teams_detail", clubController.showTeamsDetailView);
router.get("/teams_change", clubController.showTeamsChangeView);
router.get("/events", clubController.showEventsView);
router.get("/events_detail", clubController.showEventsDetailView);
router.get("/dashboard", clubController.showFinanceDashboard);
router.get("/profile", clubController.showProfile);
router.get("/vorstand", clubController.showVorstand);

export const clubRoutes = router;
