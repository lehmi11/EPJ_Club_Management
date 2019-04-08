import express = require("express");
const router = express.Router();
import {apiController} from "../controllers/apiController";

router.get("/dashboard", apiController.getFinanceDashboard.bind(apiController));
router.get("/members/notpaid", apiController.getMembersNotPaid.bind(apiController));

export const apiRoutes = router;
