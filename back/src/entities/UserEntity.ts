import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { CrendentialEntity } from "./CredentialEntity";
import { AppointmentEntity } from "./AppointmentEntity";

@Entity({
    name:'user'
})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column("date")
    birthdate:Date;

    @Column()
    nDni:string;

    @OneToOne(()=> CrendentialEntity, (cred)=>cred.user)
    @JoinColumn()
    credential:CrendentialEntity;

    @OneToMany(() => AppointmentEntity, app => app.user)
    appointments: AppointmentEntity[]
}