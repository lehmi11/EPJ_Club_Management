import * as db from "../config/dbConfig";

import {getConnection} from "typeorm";
import {getRepository} from "typeorm";

import { Anlass } from "../entities/Anlass";

export class EventService {

    public async getEvents() {
        const connection = getConnection();
        const result = await connection.createQueryBuilder().select(["anl.id", "anl.name", "anl.datum", "anl.von", "anl.bis", "anl.ort"]).from(Anlass, "anl").getMany();
        return result;
    }

    public async createEvent(data: JSON) {
        const connection = getConnection();
        const eventRepo = getRepository(Anlass);
        const newEvent = eventRepo.create({
            ...data,
            verein: {id: 1},
        });
        await eventRepo.save(newEvent);
    }

    public async deleteEvent(idToDelete: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Anlass)
            .where("id = :id", { id: idToDelete})
            .execute();
    }

    public async getEventById(eventId: number) {
        return await getConnection()
            .getRepository(Anlass)
            .createQueryBuilder()
            .where("id = :id", { id: eventId })
            .getOne();
    }

    public async getSpecificEventWithMembers(eventId: number) {
        const {rows} = await db.client.query(`
            SELECT anlass.name AS "Name",
            anlass.ort AS "Ort",
            anlass.datum AS "Datum",
            anlass.von AS "Start",
            anlass.bis AS "Ende",
            anlass.verantwortlicher AS "Verantwortlicher",
            mitglied.name AS "Mitgliedname",
            mitglied.vorname AS "Mitgliedvorname",
            mitglied.strasse AS "Adresse",
            mitglied.plz AS "PLZ",
            mitglied.ort AS "Ort"
            FROM anlass INNER JOIN
            anlassbelegung ON anlass.id = anlassbelegung.anlassid INNER JOIN
            mitglied ON mitglied.id = anlassbelegung.mitgliedid
            WHERE anlass.id =` + eventId + `;`);
        return rows;
    }
}

export const eventService = new EventService();
