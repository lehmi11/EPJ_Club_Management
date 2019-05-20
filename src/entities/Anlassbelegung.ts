import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import {Anlass} from "./Anlass";
import { Mitglied } from "./Mitglied";

@Entity("anlassbelegung", { schema: "public" })
export class Anlassbelegung {

    @ManyToOne(() => Mitglied, (mitglied) => mitglied.id, { nullable: false , primary: true, eager: true})
    @JoinColumn({ name: "mitgliedid", referencedColumnName: "id" })
    public mitgliedid: Mitglied;

    @ManyToOne(() => Anlass, (anlass) => anlass.id, { nullable: false, primary: true, eager: false})
    @JoinColumn({ name: "anlassid", referencedColumnName: "id" })
    public anlassid: Anlass;

}
