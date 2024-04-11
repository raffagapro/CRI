import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity({
    name:"appointments" //explicitamente indicando el nombre de la tabla
})
export class AppointmentEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column("date")
    date:Date;

    @Column("date")
    time:Date;

    @ManyToOne(() => UserEntity, (user) => user.appointments) //<--indica en que columna guarda la FK
    user: UserEntity

    @Column()
    status:StatusEnum;
}

export enum StatusEnum{
    ACTIVO='active',
    CANCELADO='cancel'
}