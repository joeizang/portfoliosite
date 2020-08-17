import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class PortfolioBaseEntity extends BaseEntity {
    @CreateDateColumn({ nullable: false })
    createdAt!: Date;

    @UpdateDateColumn({ nullable: false })
    updatedAt!: Date;
}
