import express from "express";
// tslint:disable-next-line: ordered-imports
import bodyParser from "body-parser";
// var hbs = require("express-hbs");
import hbs from "express-handlebars";
import {Request, Response} from "express-serve-static-core";
import {clubRoutes} from "./routes/clubRoutes";


const app = express();
<<<<<<< HEAD
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(clubRoutes);
app.use(bodyParser.urlencoded({extended: false}));
=======
app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("login", { title: "Login", hideSidebar: "true"});
});

app.get("/members", (req, res) => {
  res.render("members", { title: "Mitglieder"});
});

app.get("/teams", (req, res) => {
  res.render("teams", { title: "Teams"});
});
>>>>>>> c98efe1b7ad9274b1a32bb13c93892578a4b8052

app.get("/events", (req, res) => {
  res.render("events", { title: "Teamübersicht"});
});

<<<<<<< HEAD
=======
app.get("/dashboard", (req, res) => {
  res.render("dashboard_finance", { title: "Dashboard"});
});

app.get("/profile", (req, res) => {
  res.render("profile", { title: "mein Profil"});
});

>>>>>>> c98efe1b7ad9274b1a32bb13c93892578a4b8052
const hostname = "127.0.0.1";
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
