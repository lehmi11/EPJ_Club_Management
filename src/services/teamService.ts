import * as db from "../config/dbConfig";

import { getConnection } from "typeorm";
import { getRepository } from "typeorm";

import { Gruppe } from "../entities/Gruppe";

export class TeamService {
    public async getTeams() {
        const connection = getConnection();
        const result = await connection.createQueryBuilder().select(["gr.name", "gr.berechtigung", "gr.verantwortlicher"]).from(Gruppe, "gr").getMany();
        return result;
    }

    public async getTeamById(groupId: number) {
        return await getConnection()
            .getRepository(Gruppe)
            .createQueryBuilder()
            .where("id = :id", { id: groupId })
            .getOne();
    }

    public async getGroupsWithCount() {
        const { rows } = await db.client.query(`
            SELECT gruppe.name AS "Name",
            gruppe.verantwortlicher AS "Verantwortlicher",
            COUNT(*) AS "Anzahl"
            FROM gruppe INNER JOIN gruppenbelegung
                ON gruppe.id = gruppenbelegung.gruppenid INNER JOIN
                mitglied ON gruppenbelegung.mitgliedid = mitglied.id
                GROUP BY gruppe.name, gruppe.verantwortlicher;`);
        return rows;
    }

    public async getGroupWithMembers() {
        const { rows } = await db.client.query(`
            SELECT gruppe.name AS "Gruppenname",
            gruppe.verantwortlicher AS "Verantwortlicher",
            mitglied.name AS "Name",
            mitglied.vorname AS "Vorname",
            mitglied.strasse AS "Adresse",
            mitglied.plz AS "PLZ",
            mitglied.ort AS "Ort"
            FROM gruppe INNER JOIN
            Gruppenbelegung ON gruppe.id = gruppenbelegung.gruppenid
            INNER JOIN mitglied ON gruppenbelegung.mitgliedid = mitglied.id;`);
        return rows;
    }

    public async createTeam(data: JSON) {
        const connection = getConnection();
        const teamRepo = getRepository(Gruppe);
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
