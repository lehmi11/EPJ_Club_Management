import { Request, Response } from "express";

export let index = (req: Request, res: Response) => {
    res.render("login", { title: "login", hideSidebar: "true" });
};

export let forgotPassword = (req: Request, res: Response) => {
    res.render("forgot-password", { title: "Passwort vergessen", hideSidebar: "true" });
};

export let membersView = (req: Request, res: Response) => {
    res.render("members", { title: "Mitglieder" });
};

export let teamsView = (req: Request, res: Response) => {
    res.render("teams", { title: "Teams" });
};

export let eventsView = (req: Request, res: Response) => {
    res.render("events", { title: "Terminübersicht" });
};

export let dashboard = (req: Request, res: Response) => {
    res.render("dashboard_finance", { title: "Dashboard" });
};

export let profile = (req: Request, res: Response) => {
    res.render("profile", { title: "Profil" });
};
