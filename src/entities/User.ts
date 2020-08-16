import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Position } from './Position';
import { Bio } from './Bio';
import { Skill } from './Skill';
import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { ObjectType, Field, ID } from 'type-graphql';
import { Project } from './Project';

@ObjectType()
@Entity()
export class User extends PortfolioBaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({
        length: 100,
    })
    authId: string;

    @Field({ nullable: false })
    @Column({
        length: 50,
        nullable: false,
        unique: true,
    })
    email!: string;

    @Field(() => [Position])
    @OneToMany(() => Position, (position) => position)
    positions?: Position[];

    @Field(() => [Project])
    @OneToMany(() => Project, (proj) => proj)
    projects?: Project[];

    @Field(() => [Skill])
    @OneToMany(() => Skill, (skill) => skill)
    skills?: Skill[];

    @Field(() => Bio)
    @OneToOne(() => Bio, (bio) => bio.user)
    bio?: Bio;
}
