import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Mitglied} from "./Mitglied";


@Entity("mitgliedschaft",{schema:"public" } )
export class Mitgliedschaft {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"mitgliederbeitrag"
        })
    mitgliederbeitrag:number;
        

    @Column("date",{ 
        nullable:false,
        name:"eintrittsdatum"
        })
    eintrittsdatum:string;
        

    @Column("date",{ 
        nullable:true,
        name:"austrittsdatum"
        })
    austrittsdatum:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"beitragbezahlt"
        })
    beitragbezahlt:boolean;
        

   
    @ManyToOne(type=>Mitglied, mitglied=>mitglied.mitgliedschafts,{  nullable:false, })
    @JoinColumn({ name:'mitgliedid'})
    mitglied:Mitglied | null;


    @Column("date",{ 
        nullable:true,
        name:"rechnungsdatum"
        })
    rechnungsdatum:string | null;
        
}
