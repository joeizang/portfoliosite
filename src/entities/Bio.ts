import { Entity, Column, OneToMany, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { WebLink } from './WebLink';
import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { User } from './User';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Bio extends PortfolioBaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field({ nullable: false })
    @Column({
        length: 50,
        nullable: false,
    })
    firstName!: string;

    @Field({ nullable: false })
    @Column({
        length: 50,
        nullable: false,
    })
    lastName!: string;

    @Field({ nullable: false })
    @Column({
        length: 25,
        nullable: false,
        unique: true,
    })
    email!: string;

    @Field({ nullable: true })
    @Column({
        length: 200,
    })
    avatarUrl?: string;

    @Field({ nullable: true })
    @Column({
        length: 160,
    })
    objective?: string;

    @Field(() => [WebLink])
    @OneToMany(() => WebLink, (wlinks) => wlinks, { nullable: true })
    webLinks?: WebLink[];

    @Column({ nullable: false })
    userId: number;

    @Field(() => User, { nullable: false })
    @OneToOne(() => User, (user) => user.bio, { nullable: false })
    @JoinColumn()
    user!: User;
}
