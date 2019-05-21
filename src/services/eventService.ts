import { getConnection, getRepository } from "typeorm";
import { Anlass } from "../entities/Anlass";
import { Anlassbelegung } from "../entities/Anlassbelegung";
import { Mitglied } from "../entities/Mitglied";

export class EventService {

    public async getEvents() {
        const connection = getConnection();
        const repository = connection.getRepository(Anlass);
        const events = repository.find();
        return events;
    }

    public async createEvent(data: JSON) {
        const connection = getConnection();
        const eventRepo = connection.getRepository(Anlass);
        const newEvent = eventRepo.create({
            ...data,
            verein: { id: 1 },
        });
        await eventRepo.save(newEvent);
    }

    public async editEvent(data) {
        await getConnection()
            .createQueryBuilder()
            .update(Anlass)
            .set({
                name: data.name,
                beschreibung: data.beschreibung,
                datum: data.datum,
                von: data.von,
                bis: data.bis,
                ort: data.ort,
            })
            .where("id = :id", { id: data.id })
            .execute();
    }

    public async deleteEvent(idToDelete: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Anlass)
            .where("id = :id", { id: idToDelete })
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
        const events = repository.find({
            relations: ["mitglied", "anlass"],
            where: { anlassid: eventId },
        });
        return events;
    }

    public async getParticipantsOfEvent(eventId: number) {
        const connection = getConnection();
        const repository = connection.getRepository(Anlassbelegung);
        const events = await repository.find({ where: { anlassid: eventId } });
        return events;
    }

    public async addParticipantToEvent(eventId: number, memberId: number) {
        const repository = getConnection().getRepository(Anlassbelegung);
        const participant = repository.create({
            anlassid: { id: eventId },
            mitgliedid: { id: memberId },
        });
        await repository.save(participant);
    }

    public async deleteParticipantFromEvent(eventId: number, memberId: number) {
        const repository = getConnection().getRepository(Anlassbelegung);
        await repository.delete({
            anlassid: { id: eventId },
            mitgliedid: { id: memberId },
        });
    }
}

export const eventService = new EventService();
