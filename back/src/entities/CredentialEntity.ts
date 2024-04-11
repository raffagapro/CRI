import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity({
    name:"credentials" //explicitamente indicando el nombre de la tabla
})
export class CredentialEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    password:string;

    @OneToOne(() => UserEntity, user=>user.credential)
    @JoinColumn()
    user: UserEntity;
}