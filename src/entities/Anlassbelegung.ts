import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import {Anlass} from "./Anlass";
import { Mitglied } from "./Mitglied";

@Entity("anlassbelegung", { schema: "public" })
export class Anlassbelegung {

    @Column("integer", {
        nullable: false,
        primary: true,
        name: "mitgliedid",
    })
    public mitgliedid: number;

    @Column("integer", {
        nullable: false,
        primary: true,
        name: "anlassid",
    })
    public anlassid: number;

    @ManyToOne((type) => Mitglied, (mitglied) => mitglied)
    public mitglied: Mitglied;

    @ManyToOne((type) => Anlass, (anlass) => anlass)
    public anlass: Anlass;
}
