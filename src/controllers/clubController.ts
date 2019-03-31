import {Request, Response} from "express-serve-static-core";
import {clubStore} from "../services/clubStore";


export class ClubController {
    public async showMitglieder(req: Request, res: Response) {
        res.render("members", {mitglieder: await clubStore.getMitglieder()});
    }


}


export const clubController = new ClubController();
