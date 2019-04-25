import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Anlass } from "./Anlass";
import { Gruppe } from "./Gruppe";
import { Mitgliedschaft } from "./Mitgliedschaft";
import { Verein } from "./Verein";


@Entity("mitglied", { schema: "public" })
export class Mitglied {

    @Column("integer", {
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;


    @Column("text", {
        nullable: false,
        name: "name",
    })
    public name: string;


    @Column("text", {
        nullable: false,
        name: "vorname",
    })
    public vorname: string;


    @Column("date", {
        nullable: false,
        name: "geburtsdatum",
    })
    public geburtsdatum: string;


    @Column("character", {
        nullable: false,
        name: "geschlecht",
    })
    public geschlecht: string;


    @Column("text", {
        nullable: false,
        name: "strasse",
    })
    public strasse: string;


    @Column("integer", {
        nullable: false,
        name: "plz",
    })
    public plz: number;


    @Column("text", {
        nullable: false,
        name: "ort",
    })
    public ort: string;


    @Column("text", {
        nullable: true,
        name: "email",
    })
    public email: string | null;



    @ManyToOne((type) => Verein, (verein) => verein.mitglieds, { nullable: false })
    @JoinColumn({ name: "vereinid" })
    public verein2: Verein | null;


    @ManyToOne((type) => Gruppe, (gruppe) => gruppe.mitglieds)
    public gruppes: Gruppe[];

    @ManyToOne((type) => Verein, (verein) => verein.mitglieds)
    public vereins: Verein[];

    @OneToMany((type) => Mitgliedschaft, (mitgliedschaft) => mitgliedschaft.mitglied)
    public mitgliedschafts: Mitgliedschaft[];

    @ManyToMany((type) => Anlass, (anlass) => anlass.mitglieds, { nullable: false })
    @JoinTable({ name: "anlassbelegung" })
    public anlasss: Anlass[];

}
