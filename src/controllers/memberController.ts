import {Request, Response} from "express-serve-static-core";
import {memberService} from "../services/memberService";

export class MemberController {

    public async getMembers(req: Request, res: Response) {
        try {
            const members = await (memberService.getMembers());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMembersFeeNotPaid(req: Request, res: Response) {
        try {
            const members = await (memberService.getMembersFeeNotPaid());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getManagingComittee(req: Request, res: Response) {
        try {
            const ManagingComittee = await (memberService.getManagingComittee());

            res.json(ManagingComittee);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }



    public async getMembersWithAddress(req: Request, res: Response) {
        try {
            const members = await (memberService.getNameOfMembersWithAddress());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async createMember(req: Request, res: Response) {
        try {
            await memberService.createMember(req.body);

            res.redirect("/members");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async editMember(req: Request, res: Response) {
        try {
            await memberService.editMember(req.body);

            res.redirect("/members");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async deleteMember(req: Request, res: Response) {
        try {
            await memberService.deleteMember(req.params.memberId);

            res.send("OK");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMemberById(req: Request, res: Response) {
        try {
            const member = await memberService.getMemberById(req.params.memberId);

            res.json(member);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMembersPaymentStatus(req: Request, res: Response) {
        try {
            const membersPaidCount = await (memberService.getTotalMembershipPaidCount());
            const membersNotPaidCount = await (memberService.getTotalMembershipNotPaidCount());
            const membersWarningCount = await (memberService.getTotalMembershipWarningCount());

            res.json( {
                paymentStatus: [
                    membersPaidCount,
                    membersNotPaidCount,
                    membersWarningCount,
                ],
            });
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getFinanceDashboard(req: Request, res: Response) {
        try {
            const totalMembershipNotPaid = await (memberService.getTotalMembershipNotPaid());
            const totalMembershipPaid = await (memberService.getTotalMembershipPaid());
            const totalMembershipWarning = await (memberService.getTotalMembershipWarning());

            res.json({
                totalMembershipNotPaid,
                totalMembershipPaid,
                totalMembershipWarning,
            });

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getMembersNotPaid(req: Request, res: Response) {
        try {
            const totalMembershipNotPaid = await (memberService.getTotalMembershipNotPaid());
            const totalMembershipPaid = await (memberService.getTotalMembershipPaid());
            const totalMembershipWarning = await (memberService.getTotalMembershipWarning());

            res.json({
                totalMembershipNotPaid,
                totalMembershipPaid,
                totalMembershipWarning,
            });

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
}

export const memberController = new MemberController();
