import { Request, Response } from "express-serve-static-core";
import { eventService } from "../services/eventService";

export class EventController {

    public async getEvents(req: Request, res: Response) {
        try {
            const events = await (eventService.getEvents());

            res.json(events);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async createEvent(req: Request, res: Response) {
        try {
            await eventService.createEvent(req.body);

            res.redirect("/events");
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async editEvent(req: Request, res: Response) {
        try {
            await eventService.editEvent(req.body);

            res.redirect("/events");
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async deleteEvent(req: Request, res: Response) {
        try {
            await eventService.deleteEvent(req.params.eventId);

            res.send("OK");
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async getEventById(req: Request, res: Response) {
        try {
            const event = await eventService.getEventById(req.params.eventId);

            res.json(event);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async getClubMeetings( req: Request, res: Response) {
        try {
            const clubMeetings = await eventService.getClubMeetings();

            res.json(clubMeetings);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async getParticipantsOfEvent(req: Request, res: Response) {
        try {
            const participants = await (eventService.getParticipantsOfEvent(req.params.eventId));

            res.json(participants);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async addParticipantToEvent(req: Request, res: Response) {
        try {
            const eventId = req.params.eventId;
            const memberId = req.body.id;
            await eventService.addParticipantToEvent(eventId, memberId);

            res.redirect("/events/" + eventId);
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

    public async deleteParticipantFromEvent(req: Request, res: Response) {
        try {
            const eventId = req.params.eventId;
            const memberId = req.params.memberId;
            await eventService.deleteParticipantFromEvent(eventId, memberId);

            res.send("OK");
        } catch (error) {
            console.error(`Controller Error-Message: ${error}`);
        }
    }

}

export const eventController = new EventController();
