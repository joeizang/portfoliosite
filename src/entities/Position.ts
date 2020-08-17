import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { EmploymentType } from './SkillLevel';
import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { Achievement } from './Achievement';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity()
export class Position extends PortfolioBaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ nullable: false })
    @Column({
        length: 30,
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
    endDate?: Date;

    @Field(() => EmploymentType, { nullable: false })
    @Column('enum', { name: 'employment_type', enum: EmploymentType })
    employmentType!: EmploymentType;

    @Field({ nullable: false })
    @Column({
        nullable: false,
    })
    location!: string;

    @Field(() => [Achievement])
    @OneToMany(() => Achievement, (achieve) => achieve.position)
    achievements?: Achievement[];

    @Field()
    @Column()
    userId: number;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user, { eager: true })
    @JoinColumn({ name: 'userId' })
    user: User;
}
