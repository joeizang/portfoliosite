import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Position } from './Position';
import { Bio } from './Bio';
import { Skill } from './Skill';
import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends PortfolioBaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ nullable: false })
    @Column({
        length: 100,
        nullable: false,
    })
    authId!: string;

    @Field(() => [Position])
    @OneToMany(() => Position, (position) => position)
    positions?: Position[];

    @Field(() => [Skill])
    @OneToMany(() => Skill, (skill) => skill)
    skills?: Skill[];

    @Field(() => Bio)
    @OneToOne(() => Bio, (bio) => bio.user)
    bio?: Bio;
}
