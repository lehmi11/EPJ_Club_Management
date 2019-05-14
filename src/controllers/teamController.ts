import { Request, Response } from "express-serve-static-core";
import { teamService } from "../services/teamService";

export class TeamController {
<<<<<<< HEAD
    public async getTeams(req: Request, res: Response) {
        try {
            const groups = await (teamService.getTeams());
            res.json(groups);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
=======
    public async getGroups(req: Request, res: Response) {
        try {
            const members = await (teamService.getGroups());

            res.json(members);
>>>>>>> d4e0e1d984c347076c756de4b5bb9473e97bbf0f

    public async getTeamById(req: Request, res: Response) {
        try {
            const group = await teamService.getTeamById(req.params.groupId);
            res.json(group);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }
<<<<<<< HEAD

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
=======
    public async getGroupsWithMembers(req: Request, res: Response) {
        try {
            const members = await (teamService.getGroupsWithMembers());

>>>>>>> d4e0e1d984c347076c756de4b5bb9473e97bbf0f
            res.json(members);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async createTeam(req: Request, res: Response) {
        try {
            await teamService.createTeam(req.body);
            res.redirect("/teams");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async deleteTeam(req: Request, res: Response) {
        try {
            await teamService.deleteTeam(req.body);
            res.redirect("/groups");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

}

export const teamController = new TeamController();

