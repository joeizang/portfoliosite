import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';
import { MaxLength } from 'class-validator';
import { User } from './User';

@Entity()
@ObjectType()
export class Project extends PortfolioBaseEntity {
    @Field(() => ID, { nullable: false })
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ nullable: false })
    @MaxLength(100)
    @Column({ length: 100 })
    projectName: string;

    @Field({ nullable: false })
    @Column({
        type: 'text',
        nullable: false,
    })
    projectDescription: string;

    @Field(() => User)
    @ManyToOne(() => User, (proj) => proj, { nullable: false })
    @JoinColumn()
    user!: User;
}
