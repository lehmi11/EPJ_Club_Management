import {Request, Response} from "express-serve-static-core";
import {clubStore} from "../services/clubStore";
import * as db from "../config/dbConfig";
export class ClubController {

    public async showFinanceDashboard(req: Request, res: Response) {
        try {
            await db.client.connect();
            let totalMembershipNotPaid = await (clubStore.getTotalMembershipNotPaid());
            let totalMembershipPaid= await (clubStore.getTotalMembershipPaid());
            let totalMembershipWarning= await (clubStore.getTotalMembershipWarning());

            res.render("dashboard_finance", {
                totalMembershipNotPaid: totalMembershipNotPaid.notPaidMembership + " CHF",
                totalMembershipPaid: totalMembershipPaid.paidMembership + " CHF",
                totalMembershipWarning: totalMembershipWarning.warning + " CHF",
            });

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        } finally {
            await db.client.end();
        }
    }
}

export const clubController = new ClubController();
