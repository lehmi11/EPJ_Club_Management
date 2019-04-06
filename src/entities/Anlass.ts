import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Verein} from "./Verein";
import {Mitglied} from "./Mitglied";


@Entity("anlass",{schema:"public" } )
export class Anlass {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("date",{ 
        nullable:false,
        name:"datum"
        })
    datum:string;
        

    @Column("time without time zone",{ 
        nullable:false,
        name:"von"
        })
    von:string;
        

    @Column("time without time zone",{ 
        nullable:false,
        name:"bis"
        })
    bis:string;
        

    @Column("text",{ 
        nullable:false,
        name:"ort"
        })
    ort:string;
        

    @Column("text",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("text",{ 
        nullable:true,
        name:"beschreibung"
        })
    beschreibung:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"protokoll"
        })
    protokoll:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"traktadenliste"
        })
    traktadenliste:string | null;
        

   
    @ManyToOne(type=>Verein, verein=>verein.anlasss,{  nullable:false, })
    @JoinColumn({ name:'vereinid'})
    verein:Verein | null;


   
    @ManyToMany(type=>Mitglied, mitglied=>mitglied.anlasss)
    mitglieds:Mitglied[];
    
}
