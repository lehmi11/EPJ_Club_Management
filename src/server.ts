import express from "express";
import hbs from "express-handlebars";
import {Request, Response} from "express-serve-static-core";



const app = express();
app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("login", { title: "Login", hideSidebar: "true"});
});

app.get("/forgot-password", (req, res) => {
  res.render("forgot-password", { title: "Password vergessen", hideSidebar: "true"});
});

app.get("/members", (req, res) => {
  res.render("members", { title: "Mitglieder"});
});

app.get("/teams", (req, res) => {
  res.render("teams", { title: "Teams"});
});

app.get("/events", (req, res) => {
  res.render("events", { title: "Teamübersicht"});
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard_finance", { title: "Dashboard"});
});

app.get("/profile", (req, res) => {
  res.render("profile", { title: "mein Profil"});
});

const hostname = "127.0.0.1";
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
