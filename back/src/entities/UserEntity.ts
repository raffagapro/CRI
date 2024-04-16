import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany, BeforeUpdate } from "typeorm"
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

    @Column({ unique: true }) // Make email column unique
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

    @BeforeUpdate()
    validateEmailFormat() {
        if (!this.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            throw new Error("Invalid email format");
        }
    }
}