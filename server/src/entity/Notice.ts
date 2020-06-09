import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Notice extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, user => user.notices)
    @JoinColumn({ name: "userId" })
    userId!: string;

    @Column()
    title!: string;

    @Column()
    content!: string;
}