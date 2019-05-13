import {getConnection} from "typeorm";
import { Anlass } from "../entities/Anlass";
import {Anlassbelegung} from "../entities/Anlassbelegung";

export class EventService {

    public async getEvents() {
        const connection = getConnection();
        const result = await connection.createQueryBuilder().select(["anl.id", "anl.name", "anl.datum", "anl.von", "anl.bis", "anl.ort"]).from(Anlass, "anl").getMany();
        return result;
    }

    public async createEvent(data: JSON) {
        const connection = getConnection();
        const eventRepo = connection.getRepository(Anlass);
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

    public async getClubMeetings() {
        return await getConnection()
            .getRepository(Anlass)
            .createQueryBuilder()
            .where("traktadenliste IS NOT NULL")
            .getMany();
    }


    public async getSpecificEventWithMembers(eventId: number) {
        const connection = getConnection();
        const repository = connection.getRepository(Anlassbelegung);
        const events = repository.find({ relations: ["mitglied", "anlass"],
            where: {anlassid: eventId}});
        return events;
    }
}

export const eventService = new EventService();
