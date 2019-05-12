import {Request, Response} from "express-serve-static-core";
import {teamService} from "../services/teamService";

export class TeamController {
    public async getGroups(req: Request, res: Response) {
        try {
            const members = await (teamService.getGroups());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
    public async getGroupsWithMembers(req: Request, res: Response) {
        try {
            const members = await (teamService.getGroupsWithMembers());

            res.json(members);

        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
}

export const teamController = new TeamController();

