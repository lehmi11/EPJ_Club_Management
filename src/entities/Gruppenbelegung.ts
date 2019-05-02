import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Gruppe } from "./Gruppe";
import { Mitglied } from "./Mitglied";

@Entity("gruppenbelegung", { schema: "public" })
export class Gruppenbelegung {

    @Column("integer", {
        nullable: false,
        primary: true,
        name: "gruppenid",
    })
    public gruppenid: number;


    @Column("integer", {
        nullable: false,
        primary: true,
        name: "mitgliedid",
    })
    public mitgliedid: number;

    @ManyToOne((type) => Gruppe, (gruppe) => gruppe)
    public gruppe: Gruppe;

    @ManyToOne((type) => Mitglied, (mitglied) => mitglied)
    public mitglied: Mitglied;

}
