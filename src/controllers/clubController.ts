import { Request, Response } from "express-serve-static-core";
// import * as db from "../config/dbConfig";
import { clubStore } from "../services/clubStore";

export class ClubController {

    public async showFinanceDashboard(req: Request, res: Response) {
        try {
            const totalMembershipNotPaid = await (clubStore.getTotalMembershipNotPaid());
            const totalMembershipPaid = await (clubStore.getTotalMembershipPaid());
            const totalMembershipWarning = await (clubStore.getTotalMembershipWarning());

            res.render("dashboard_finance", {
                title: "Finanz Dashboard",
                totalMembershipNotPaid: totalMembershipNotPaid.notPaidMembership + " CHF",
                totalMembershipPaid: totalMembershipPaid.paidMembership + " CHF",
                totalMembershipWarning: totalMembershipWarning.warning + " CHF",
            });

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        } finally {
            // await db.client.end();
        }
    }

    public async showIndex(req: Request, res: Response) {
        res.render("login", { title: "login", hideSidebar: "true" });
    }

    public async showForgotPassword(req: Request, res: Response) {
        res.render("forgot-password", { title: "Passwort vergessen", hideSidebar: "true" });
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
}

export const clubController = new ClubController();
