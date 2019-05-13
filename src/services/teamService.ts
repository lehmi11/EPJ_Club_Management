import {getConnection} from "typeorm";
import {Gruppe} from "../entities/Gruppe";
import {Gruppenbelegung} from "../entities/Gruppenbelegung";

export class TeamService {
    public async getGroups() {
        const connection = getConnection();
        const repository = connection.getRepository(Gruppe);
        const groups = repository.find();
        return groups;
    }
    public async getGroupsWithMembers() {
        const connection = getConnection();
        const repository = connection.getRepository(Gruppenbelegung);
        const groups = repository.find();
        return groups;
    }
    public async getSpecificGroupWithMembers(groupID: number) {

        const connection = getConnection();
        const repository = connection.getRepository(Gruppenbelegung);
        const groups = repository.find({where: {gruppenid: groupID}});
        return groups;
    }
}

export const teamService = new TeamService();
