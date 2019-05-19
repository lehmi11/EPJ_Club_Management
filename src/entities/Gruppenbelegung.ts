import {
    BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany,
    ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId,
} from "typeorm";
import { Gruppe } from "./Gruppe";
import { Mitglied } from "./Mitglied";

@Entity("gruppenbelegung", { schema: "public" })
export class Gruppenbelegung {

    @ManyToOne((type) => Gruppe, (gruppe) => gruppe.id, { nullable: false, primary: true, eager: true })
    @JoinColumn({ name: "gruppenid" })
    public gruppenid: Gruppe | null;

    @ManyToOne((type) => Mitglied, (mitglied) => mitglied.id, { nullable: false, primary: true, eager: true })
    @JoinColumn({ name: "mitgliedid" })
    public mitgliedid: Mitglied | null;
}
