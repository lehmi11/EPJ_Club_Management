import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Verein} from "./Verein";
import {Mitgliedschaft} from "./Mitgliedschaft";
import {Gruppe} from "./Gruppe";
import {Anlass} from "./Anlass";


@Entity("mitglied",{schema:"public" } )
export class Mitglied {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("text",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("text",{ 
        nullable:false,
        name:"vorname"
        })
    vorname:string;
        

    @Column("date",{ 
        nullable:false,
        name:"geburtsdatum"
        })
    geburtsdatum:string;
        

    @Column("character",{ 
        nullable:false,
        name:"geschlecht"
        })
    geschlecht:string;
        

    @Column("text",{ 
        nullable:false,
        name:"strasse"
        })
    strasse:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"plz"
        })
    plz:number;
        

    @Column("text",{ 
        nullable:false,
        name:"ort"
        })
    ort:string;
        

    @Column("text",{ 
        nullable:true,
        name:"email"
        })
    email:string | null;
        

   
    @ManyToOne(type=>Verein, verein=>verein.mitglieds,{  nullable:false, })
    @JoinColumn({ name:'vereinid'})
    verein2:Verein | null;


   
    @OneToMany(type=>Mitgliedschaft, mitgliedschaft=>mitgliedschaft.mitglied)
    mitgliedschafts:Mitgliedschaft[];
    

   
    @ManyToMany(type=>Verein, verein=>verein.mitglieds)
    vereins:Verein[];
    

   
    @ManyToMany(type=>Gruppe, gruppe=>gruppe.mitglieds)
    gruppes:Gruppe[];
    

   
    @ManyToMany(type=>Anlass, anlass=>anlass.mitglieds,{  nullable:false, })
    @JoinTable({ name:'anlassbelegung'})
    anlasss:Anlass[];
    
}
