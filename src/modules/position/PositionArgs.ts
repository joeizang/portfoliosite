import { ArgsType, Field } from 'type-graphql';
import { Length, IsDate, IsEnum } from 'class-validator';
import { EmploymentType } from '../../entities/SkillLevel';

@ArgsType()
export class PositionArgs {
    @Field({ nullable: false })
    @Length(3, 30)
    title!: string;

    @Field({ nullable: false })
    @Length(2, 50)
    company!: string;

    @Field({ nullable: false })
    @IsDate()
    startDate!: Date;

    @Field({ nullable: true })
    @IsDate()
    endDate?: Date;

    @Field({ nullable: false })
    @Length(3, 30)
    location!: string;

    @Field({ nullable: false })
    @IsEnum(EmploymentType)
    employmentType: EmploymentType;
}
