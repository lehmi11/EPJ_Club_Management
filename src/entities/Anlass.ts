import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from "typeorm";
import { Verein } from "./Verein";

@Entity("anlass", { schema: "public" })
export class Anlass {

    @Column("integer", {
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;


    @Column("date", {
        nullable: false,
        name: "datum",
    })
    public datum: string;


    @Column("time without time zone", {
        nullable: false,
        name: "von",
    })
    public von: string;


    @Column("time without time zone", {
        nullable: false,
        name: "bis",
    })
    public bis: string;


    @Column("text", {
        nullable: false,
        name: "ort",
    })
    public ort: string;


    @Column("text", {
        nullable: false,
        name: "name",
    })
    public name: string;


    @Column("text", {
        nullable: true,
        name: "beschreibung",
    })
    public beschreibung: string | null;


    @Column("text", {
        nullable: true,
        name: "protokoll",
    })
    public protokoll: string | null;


    @Column("text", {
        nullable: true,
        name: "traktadenliste",
    })
    public traktadenliste: string | null;

    @Column("text", {
        nullable: true,
        name: "verantwortlicher",
    })
    public verantwortlicher: string | null;

    @ManyToOne((type) => Verein, (verein) => verein.id, { nullable: false })
    @JoinColumn({ name: "vereinid" })
    public verein: Verein | null;
}
