import { Response } from "express";

export let index = ( res: Response) => {
    res.render("login", { title: "login", onlyShowMainContent: "true" });
};

export let forgotPassword = ( res: Response) => {
    res.render("forgot-password", { title: "Passwort vergessen", onlyShowMainContent: "true" });
};

export let membersView = ( res: Response) => {
    res.render("members", { title: "Mitglieder" });
};

export let teamsView = ( res: Response) => {
    res.render("teams", { title: "Teams" });
};

export let teamsDetailView = ( res: Response) => {
    res.render("teams_detail", { title: "Team Detail"});
};

export let teamsChangeView = ( res: Response) => {
    res.render("teams_change", { title: "Team bearbeiten"});
};

export let eventsView = ( res: Response) => {
    res.render("events", { title: "Terminübersicht" });
};

export let eventsDetailView = ( res: Response) => {
    res.render("events_detail", { title: "Event Detail"});
};

export let dashboard = ( res: Response) => {
    res.render("dashboard_finance", { title: "Dashboard" });
};

export let profile = ( res: Response) => {
    res.render("profile", { title: "Profil" });
};
