import { getConnection } from "typeorm";
import { Gruppe } from "../entities/Gruppe";
import { Gruppenbelegung } from "../entities/Gruppenbelegung";

export class TeamService {

    public async getTeams() {
        const connection = getConnection();
        const repository = connection.getRepository(Gruppe);
        const groups = repository.find();
        return groups;
    }

    public async getTeamById(groupId: number) {
        return await getConnection()
            .getRepository(Gruppe)
            .createQueryBuilder()
            .where("id = :id", { id: groupId })
            .getOne();
    }

    public async getSpecificGroupWithMembers(groupID: number) {
        const connection = getConnection();
        const repository = connection.getRepository(Gruppenbelegung);
        const groups = repository.find({ where: { gruppenid: groupID } });
        return groups;
    }

    public async getGroupsWithMembers() {
        const connection = getConnection();
        const repository = connection.getRepository(Gruppenbelegung);
        const groups = repository.find();
        return groups;
    }

    public async createTeam(data: JSON) {
        const connection = getConnection();
        const teamRepo = connection.getRepository(Gruppe);
        const newTeam = teamRepo.create({
            ...data,
            berechtigung: null,
        });
        await teamRepo.save(newTeam);
    }

    public async deleteTeam(idToDelete: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Gruppe)
            .where("id = :id", { id: idToDelete })
            .execute();
    }
}
export const teamService = new TeamService();

