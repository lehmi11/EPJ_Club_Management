import express = require("express");
const router = express.Router();
import {clubController} from "../controllers/clubController";

router.get("/", clubController.showFinanceDashboard.bind(clubController));

export const clubRoutes = router;
