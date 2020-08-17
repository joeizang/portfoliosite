import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinColumn } from 'typeorm';
import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { Position } from './Position';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Achievement extends PortfolioBaseEntity {
    @Field(() => ID, { nullable: false })
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ nullable: false })
    @Column({
        length: 150,
        nullable: false,
    })
    description!: string;

    @Field()
    @Column()
    positionId: number;

    @Field(() => Position, { nullable: false })
    @ManyToOne(() => Position, (position) => position)
    @JoinColumn({ name: 'positionId' })
    position: Position;
}
