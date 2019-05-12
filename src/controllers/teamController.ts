import {Request, Response} from "express-serve-static-core";
import {teamService} from "../services/teamService";

export class TeamController {
    public async getGroupsWithCount(req: Request, res: Response) {
        try {
            const groups = await (teamService.getGroupsWithCount());

            res.json(groups);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getGroupWithMembers(req: Request, res: Response) {
        try {
            const members = await (teamService.getGroupWithMembers());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
}

export const teamController = new TeamController();

