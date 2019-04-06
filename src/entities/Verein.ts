import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Anlass} from "./Anlass";
import {Mitglied} from "./Mitglied";


@Entity("verein",{schema:"public" } )
export class Verein {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("date",{ 
        nullable:false,
        name:"gründungsjahr"
        })
    gründungsjahr:string;
        

    @Column("text",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

   
    @OneToMany(type=>Anlass, anlass=>anlass.verein)
    anlasss:Anlass[];
    

   
    @OneToMany(type=>Mitglied, mitglied=>mitglied.verein2)
    mitglieds:Mitglied[];
    

   
    @ManyToMany(type=>Mitglied, mitglied=>mitglied.vereins,{  nullable:false, })
    @JoinTable({ name:'vereinsvorstand'})
    mitgliedsVerein:Mitglied[];
    
}
