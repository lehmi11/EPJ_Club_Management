import { Request, Response } from "express-serve-static-core";

export class ClubController {

    public async showFinanceDashboard(req: Request, res: Response) {
        res.render("dashboard_finance", { title: "dashboard_finance" });
    }

    public async showIndex(req: Request, res: Response) {
        res.render("login", { title: "login", onlyShowMainContent: "true" });
    }

    public async showForgotPassword(req: Request, res: Response) {
        res.render("forgot-password", { title: "Passwort vergessen", onlyShowMainContent: "true" });
    }

    public async showMembersView(req: Request, res: Response) {
        res.render("members", { title: "Mitglieder" });
    }

    public async showTeamsView(req: Request, res: Response) {
        res.render("teams", { title: "Teams" });
    }

    public async showTeamsDetailView(req: Request, res: Response) {
        res.render("teams_detail", { title: "Team Detail" });
    }

    public async showTeamsChangeView(req: Request, res: Response) {
        res.render("teams_change", { title: "Team bearbeiten" });
    }

    public async showEventsView(req: Request, res: Response) {
        res.render("events", { title: "Terminübersicht" });
    }

    public async showEventsDetailView(req: Request, res: Response) {
        res.render("events_detail", { title: "Event Detail" });
    }

    public async showProfile(req: Request, res: Response) {
        res.render("profile", { title: "Profil" });
    }

    public async showVorstand(req: Request, res: Response) {
        res.render("vorstand", { title: "Vorstand" });
    }
}

export const clubController = new ClubController();
