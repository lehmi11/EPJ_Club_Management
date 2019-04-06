import {Request, Response} from "express-serve-static-core";
import {clubStore} from "../services/clubStore";

export class ClubController {

    public async showFinanceDashboard(req: Request, res: Response) {
        try {
            const totalMembershipNotPaid = await (clubStore.getTotalMembershipNotPaid());
            const totalMembershipPaid = await (clubStore.getTotalMembershipPaid());
            const totalMembershipWarning = await (clubStore.getTotalMembershipWarning());

            res.render("dashboard_finance", {
                totalMembershipNotPaid: totalMembershipNotPaid.notPaidMembership + " CHF",
                totalMembershipPaid: totalMembershipPaid.paidMembership + " CHF",
                totalMembershipWarning: totalMembershipWarning.warning + " CHF",
            });

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
}

export const clubController = new ClubController();
