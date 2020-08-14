import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EmploymentType } from './SkillLevel';
import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { Achievement } from './Achievement';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Position extends PortfolioBaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ nullable: false })
    @Column({
        length: 25,
        nullable: false,
    })
    title!: string;

    @Field({ nullable: false })
    @Column({
        length: 50,
        nullable: false,
    })
    company: string;

    @Field({ nullable: false })
    @Column({
        type: 'date',
        nullable: false,
    })
    startDate!: Date;

    @Field()
    @Column({
        type: 'date',
        nullable: true,
    })
    endDate!: Date;

    @Column({
        type: 'enum',
        enum: ['Full Time', 'Part Time', 'Contract', 'Internship'],
        nullable: false,
    })
    employmentType!: EmploymentType;

    @Field(() => [String], { nullable: false })
    employmentTypes: string[];

    @Field({ nullable: false })
    @Column({
        nullable: false,
    })
    location!: string;

    @Field(() => [Achievement])
    @OneToMany(() => Achievement, (achieve) => achieve.position)
    achievements?: Achievement[];
}
