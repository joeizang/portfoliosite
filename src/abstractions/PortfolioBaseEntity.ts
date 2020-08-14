import { Column, BaseEntity } from 'typeorm';

export class PortfolioBaseEntity extends BaseEntity {
    @Column({
        type: 'timestamptz',
        nullable: false,
    })
    createdAt!: Date;

    @Column({
        type: 'timestamptz',
    })
    updatedAt!: Date;
}
