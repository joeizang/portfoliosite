import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SkillLevel } from './SkillLevel';
import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { User } from './User';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Skill extends PortfolioBaseEntity {
    @Field(() => ID, { nullable: false })
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ nullable: false })
    @Column({
        length: 30,
        nullable: false,
    })
    name!: string;

    @Field(() => SkillLevel)
    @Column('enum', { name: 'skill_level', enum: SkillLevel })
    skillLevel!: SkillLevel;

    @Field(() => User, { nullable: false })
    @ManyToOne(() => User, (user) => user, { nullable: false })
    @JoinColumn({ referencedColumnName: 'id' })
    user!: User;
}
