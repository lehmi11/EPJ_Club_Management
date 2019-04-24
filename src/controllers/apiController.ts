import {Request, Response} from "express-serve-static-core";
import {clubStore} from "../services/clubStore";

export class ApiController {

    public async getMembers(req: Request, res: Response) {
        try {
            const members = await (clubStore.getMembers());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMembersPaymentStatus(req: Request, res: Response) {
        try {
            const membersPaidCount = await (clubStore.getTotalMembershipPaidCount());
            const membersNotPaidCount = await (clubStore.getTotalMembershipNotPaidCount());
            const membersWarningCount = await (clubStore.getTotalMembershipWarningCount());

            res.json( {
                paymentStatus: [
                    membersPaidCount.paidMembershipCount,
                    membersNotPaidCount.notPaidMembershipCount,
                    membersWarningCount.warningCount,
                ],
            });
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMembersNotPaid(req: Request, res: Response) {
        try {
            const members = await (clubStore.getMembersFeeNotPaid());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getFinanceDashboard(req: Request, res: Response) {
        try {
            const totalMembershipNotPaid = await (clubStore.getTotalMembershipNotPaid());
            const totalMembershipPaid = await (clubStore.getTotalMembershipPaid());
            const totalMembershipWarning = await (clubStore.getTotalMembershipWarning());

            res.json({
                totalMembershipNotPaid: totalMembershipNotPaid.notPaidMembership,
                totalMembershipPaid: totalMembershipPaid.paidMembership,
                totalMembershipWarning: totalMembershipWarning.warning,
            });

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getEvents(req: Request, res: Response) {
        try {
            const events = await (clubStore.getEvents());

            res.json(events);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async createEvent(req: Request, res: Response) {
        try {
            await clubStore.createEvent(req.body);
            res.redirect("/events");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async deleteEvent(req: Request, res: Response) {
        try {
            clubStore.deleteEvent(req.params.eventId);
            res.send("OK");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getEventById(req: Request, res: Response) {
        try {
            const event = await clubStore.getEventById(req.params.eventId);
            
            res.json(event);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getGroupsWithCount(req: Request, res: Response) {
        try {
            const groups = await (clubStore.getGroupsWithCount());

            res.json(groups);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getGroupWithMembers(req: Request, res: Response) {
        try {
            const members = await (clubStore.getGroupWithMembers());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMembersWithAdress(req: Request, res: Response) {
        try {
            const members = await (clubStore.getNameOfMembersWithAdress());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMemberById(req: Request, res: Response) {
        try {
            const member = await clubStore.getMemberById(req.params.memberId);
            
            res.json(member);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
}

export const apiController = new ApiController();
