import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Anlass } from "./Anlass";
import { Mitglied } from "./Mitglied";


@Entity("verein", { schema: "public" })
export class Verein {

    @Column("integer", {
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;


    @Column("date", {
        nullable: false,
        name: "gründungsjahr",
    })
    public gründungsjahr: string;


    @Column("text", {
        nullable: false,
        name: "name",
    })
    public name: string;



    @OneToMany((type) => Anlass, (anlass) => anlass.verein)
    public anlasss: Anlass[];



    @OneToMany((type) => Mitglied, (mitglied) => mitglied.verein2)
    public mitglieds: Mitglied[];


    @JoinTable({ name: "vereinsvorstand" })
    public mitgliedsVerein: Mitglied[];

}
