import {Request, Response} from "express-serve-static-core";
import {eventService} from "../services/eventService";

export class EventController {

    public async getEvents(req: Request, res: Response) {
        try {
            const events = await (eventService.getEvents());

            res.json(events);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async createEvent(req: Request, res: Response) {
        try {
            await eventService.createEvent(req.body);

            res.redirect("/events");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async deleteEvent(req: Request, res: Response) {
        try {
            await eventService.deleteEvent(req.params.eventId);

            res.send("OK");
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getEventById(req: Request, res: Response) {
        try {
            const event = await eventService.getEventById(req.params.eventId);

            res.json(event);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

    public async getClubMeetings(req: Request, res: Response) {
        try {
            const clubMeetings = await (eventService.getClubMeetings());

            res.json(clubMeetings);
        } catch (error) {
            console.log(`Controller Error-Message: ${error}`);
        }
    }

}

export const eventController = new EventController();
