import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { UserEntity } from "./UserEntity";

@Entity({
    name:'appointment'
})
export class AppointmentEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column("date")
    date:Date;

    @Column("date")
    time:Date;

    @Column()
    status:StatusEnum

    @ManyToOne(() => UserEntity, (user) => user.appointments) //<--indica en que columna guarda la FK
    user: UserEntity
}

export enum StatusEnum{
    ACTIVO='active',
    CANCELADO='cancel'
}