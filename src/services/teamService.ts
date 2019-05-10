import * as db from "../config/dbConfig";

import {getConnection} from "typeorm";
import {getRepository} from "typeorm";
import {Gruppe} from "../entities/Gruppe";
import {Gruppenbelegung} from "../entities/Gruppenbelegung";


export class TeamService {
    public async getGroups() {
        const connection = getConnection();
        const repository = getRepository(Gruppe);
        const groups = repository.find();
        return groups;
    }

    public async getGroupsWithMembers() {
        const connection = getConnection();
        const repository = getRepository(Gruppenbelegung);
        const gruppe = repository.find();
        return gruppe;
    }

    public async getGroupsWithCount() {
        const {rows} = await db.client.query(`
            SELECT gruppe.name AS "Name",
            gruppe.verantwortlicher AS "Verantwortlicher",
            COUNT(*) AS "Anzahl"
            FROM gruppe INNER JOIN gruppenbelegung
                ON gruppe.id = gruppenbelegung.gruppenid INNER JOIN
                mitglied ON gruppenbelegung.mitgliedid = mitglied.id
                GROUP BY gruppe.name, gruppe.verantwortlicher;`);
        return rows;
    }
}

export const teamService = new TeamService();
