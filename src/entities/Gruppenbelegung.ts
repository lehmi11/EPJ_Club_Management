import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import {Anlass} from "./Anlass";
import { Gruppe } from "./Gruppe";
import { Mitglied } from "./Mitglied";

@Entity("gruppenbelegung", { schema: "public" })
export class Gruppenbelegung {

    @ManyToOne((type) => Gruppe, (gruppe) => gruppe.id, { nullable: false, primary: true})
    @JoinColumn({ name: "gruppenid", referencedColumnName: "id" })
    public gruppenid: Gruppe;

    @ManyToOne((type) => Mitglied, (mitglied) => mitglied.id, { nullable: false , primary: true})
    @JoinColumn({ name: "mitgliedid", referencedColumnName: "id" })
    public mitgliedid: Mitglied;
}
