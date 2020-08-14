import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Bio } from './Bio';
import { PortfolioBaseEntity } from '../abstractions/PortfolioBaseEntity';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class WebLink extends PortfolioBaseEntity {
    @Field(() => ID, { nullable: false })
    @PrimaryGeneratedColumn()
    id!: number;

    @Field({ nullable: false })
    @Column({
        length: 20,
        nullable: false,
    })
    webName!: string;

    @Field({ nullable: false })
    @Column({
        length: 50,
        nullable: false,
    })
    webAddress!: string;

    @Field(() => Bio, { nullable: false })
    @ManyToOne(() => Bio, (bio) => bio.webLinks, { nullable: false })
    @JoinColumn({ name: 'bioId', referencedColumnName: 'userId' })
    bio!: Bio;
}
