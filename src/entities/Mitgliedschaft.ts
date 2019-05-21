import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Mitglied } from "./Mitglied";


@Entity("mitgliedschaft", { schema: "public" })
export class Mitgliedschaft {

    @Column("integer", {
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;


    @Column("integer", {
        nullable: false,
        name: "mitgliederbeitrag",
    })
    public mitgliederbeitrag: number;


    @Column("date", {
        nullable: false,
        name: "eintrittsdatum",
    })
    public eintrittsdatum: string;


    @Column("date", {
        nullable: true,
        name: "austrittsdatum",
    })
    public austrittsdatum: string | null;


    @Column("boolean", {
        nullable: false,
        name: "beitragbezahlt",
    })
    public beitragbezahlt: boolean;

    @Column("date", {
        nullable: true,
        name: "rechnungsdatum",
    })
    public rechnungsdatum: string | null;

    @ManyToOne(() => Mitglied, (mitglied) => mitglied.id, { nullable: false })
    @JoinColumn({ name: "mitgliedid" })
    public mitglied: Mitglied | null;
    constructor(id: number, mitgliederbeitrag: number, eintrittsdatum: string, austrittsdatum: string,
                beitragbezahlt: boolean, rechnungsdatum: string, mitglied: Mitglied) {
        this.id = id;
        this.mitgliederbeitrag = mitgliederbeitrag;
        this.eintrittsdatum = eintrittsdatum;
        this.austrittsdatum = austrittsdatum;
        this.beitragbezahlt = beitragbezahlt;
        this.rechnungsdatum = rechnungsdatum;
        this.mitglied = mitglied;
    }

}

