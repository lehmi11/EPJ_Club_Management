import * as bodyParser from "body-parser";
import express from "express";
import hbs from "express-handlebars";
import * as db from "./config/dbConfig";
import {apiRoutes} from "./routes/apiRoutes";
import {clubRoutes} from "./routes/clubRoutes";

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

app.use("/api", apiRoutes);

// Primary routes
app.get("/", demoController.index);
app.get("/forgot-password", demoController.forgotPassword);
app.get("/members", demoController.membersView);
app.get("/teams", demoController.teamsView);
app.get("/teams_detail", demoController.teamsDetailView);
app.get("/teams_change", demoController.teamsChangeView);
app.get("/events", demoController.eventsView);
app.get("/events_detail", demoController.eventsDetailView);
app.get("/dashboard", demoController.dashboard);
app.get("/profile", demoController.profile);


export default app;
