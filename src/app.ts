import * as bodyParser from "body-parser";
import express from "express";
import hbs from "express-handlebars";
import {clubRoutes} from "./routes/clubRoutes";
import * as db from "./config/dbConfig";

// Controllers
import { clubController } from "./controllers/clubController";
import * as demoController from "./controllers/demoController";

// Create express server
const app = express();

// DB connection
db.client.connect();

// Express configuration
app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use("/views", express.static("views"));

// Primary routes
app.get("/", demoController.index);
// app.get("/", clubController.showFinanceDashboard);
app.get("/forgot-password", demoController.forgotPassword);
app.get("/members", demoController.membersView);
app.get("/teams", demoController.teamsView);
app.get("/events", demoController.eventsView);
app.get("/dashboard", clubController.showFinanceDashboard);
app.get("/profile", demoController.profile);

export default app;
