import { Column, Entity, OneToOne, OneToMany, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { CredentialEntity } from "./CredentialEntity";
import { AppointmentEntity } from "./AppointmentEntity";

@Entity({
    name:"users" //explicitamente indicando el nombre de la tabla
})

export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column("date")
    birthdate:Date;

    @Column()
    nDni:string;

    @OneToOne(() => CredentialEntity, cred => cred.user)
    @JoinColumn()
    credential: CredentialEntity;

    @OneToMany(() => AppointmentEntity, app => app.user) // corresponde con la columna creada en appointmentEntity
    appointments: AppointmentEntity[]
}