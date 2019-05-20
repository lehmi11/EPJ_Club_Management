import { Response } from "express-serve-static-core";

export class ClubController {

    public async showFinanceDashboard( res: Response) {
        res.render("dashboard_finance", { title: "dashboard_finance" });
    }

    public async showIndex( res: Response) {
        res.render("login", { title: "login", onlyShowMainContent: "true" });
    }

    public async showForgotPassword( res: Response) {
        res.render("forgot-password", { title: "Passwort vergessen", onlyShowMainContent: "true" });
    }

    public async showMembersView( res: Response) {
        res.render("members",   { title: "Mitglieder" });
    }

    public async showTeamsView( res: Response) {
        res.render("teams", { title: "Teams" });
    }

    public async showTeamsDetailView( res: Response) {
        res.render("teams_detail", { title: "Team Detail" });
    }

    public async showTeamsChangeView( res: Response) {
        res.render("teams_change", { title: "Team bearbeiten" });
    }

    public async showEventsView( res: Response) {
        res.render("events", { title: "Terminübersicht" });
    }

    public async showEventsDetailView( res: Response) {
        res.render("events_detail", { title: "Event Detail" });
    }

    public async showProfile(res: Response) {
        res.render("profile", { title: "Profil" });
    }

    public async showVorstand( res: Response) {
        res.render("vorstand", { title: "Vorstand" });
    }
}

export const clubController = new ClubController();
