import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Gruppe } from "./Gruppe";
import { Mitglied } from "./Mitglied";

@Entity("gruppenbelegung", { schema: "public" })
export class Gruppenbelegung {

    @ManyToOne(() => Gruppe, (gruppe) => gruppe.id, { nullable: false, primary: true, eager: true })
    @JoinColumn({ name: "gruppenid" })
    public gruppenid: Gruppe | null;

    @ManyToOne(() => Mitglied, (mitglied) => mitglied.id, { nullable: false, primary: true, eager: true })
    @JoinColumn({ name: "mitgliedid" })
    public mitgliedid: Mitglied | null;
    constructor(gruppenid: Gruppe, mitgliedid: Mitglied) {
        this.gruppenid = gruppenid;
        this.mitgliedid = mitgliedid;
    }
}
