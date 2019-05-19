import {
    BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany,
    ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId,
} from "typeorm";

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
}
