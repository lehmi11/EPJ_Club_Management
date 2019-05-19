import {
    BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany,
    ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId,
} from "typeorm";
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

    @Column("boolean", {
        nullable: true,
        name: "istVorstand",
    })
    public istVorstand: boolean | null;

    @ManyToOne((type) => Verein, (verein) => verein.id, { nullable: false })
    @JoinColumn({ name: "vereinid" })
    public verein: Verein | null;

}
