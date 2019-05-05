import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import {Anlass} from "./Anlass";
import { Mitglied } from "./Mitglied";
import {Verein} from "./Verein";

@Entity("anlassbelegung", { schema: "public" })
export class Anlassbelegung {

    @ManyToOne((type) => Mitglied, (mitglied) => mitglied.id, { nullable: false , primary: true})
    @JoinColumn({ name: "mitgliedid", referencedColumnName: "id" })
    public mitgliedid: Mitglied;

    @ManyToOne((type) => Anlass, (anlass) => anlass.id, { nullable: false, primary: true})
    @JoinColumn({ name: "anlassid", referencedColumnName: "id" })
    public anlassid: Anlass;

}
