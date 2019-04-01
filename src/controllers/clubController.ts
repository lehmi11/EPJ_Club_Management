import {Request, Response} from "express-serve-static-core";
import {clubStore} from "../services/clubStore";

export class ClubController {
    public async showFinanceDashboard (req: Request, res: Response) {
        // let result = await clubStore.getTotalMembershipWarning();
        res.render("test", {
            totalMembershipNotPaid: (await clubStore.getTotalMembershipNotPaid()).notPaidMembership,
            totalMembershipPaid: (await clubStore.getTotalMembershipPaid()).paidMembership,
            totalMembershipWarning: (await clubStore.getTotalMembershipWarning()).warning
        });
    }
}

export const clubController = new ClubController();
