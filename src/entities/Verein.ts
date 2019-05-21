import { Column, Entity } from "typeorm";

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
    constructor(id: number, grundüngsjahr: string, name: string) {
        this.id = id;
        this.gründungsjahr = grundüngsjahr;
        this.name = name;
    }
}
