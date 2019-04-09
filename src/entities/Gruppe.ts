import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Mitglied } from "./Mitglied";


@Entity("gruppe", { schema: "public" })
export class Gruppe {

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
        nullable: true,
        name: "berechtigung",
    })
    public berechtigung: string | null;



    @ManyToMany((type) => Mitglied, (mitglied) => mitglied.gruppes, { nullable: false })
    @JoinTable({ name: "gruppenbelegung" })
    public mitglieds: Mitglied[];

}
