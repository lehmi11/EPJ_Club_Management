import { Request, Response } from "express-serve-static-core";
import { teamService } from "../services/teamService";

export class TeamController {
    public async getTeams( res: Response) {
        try {
            const groups = await (teamService.getTeams());
            res.json(groups);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async getTeamById(req: Request, res: Response) {
        try {
            const group = await teamService.getTeamById(req.params.groupId);
            res.json(group);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async getGroupsWithMembers( res: Response) {
        try {
            const groups = await (teamService.getGroupsWithMembers());
            res.json(groups);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }
    public async getSpecificGroupWithMembers(req: Request, res: Response) {
        try {
            const groups = await (teamService.getSpecificGroupWithMembers(req.params.groupId));
            res.json(groups);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async createTeam(req: Request, res: Response) {
        try {
            await teamService.createTeam(req.body);
            res.redirect("/teams");
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async deleteTeam(req: Request, res: Response) {
        try {
            await teamService.deleteTeam(req.body);
            res.redirect("/groups");
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }
}
export const teamController = new TeamController();

