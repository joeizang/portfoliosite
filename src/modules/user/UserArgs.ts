import { ArgsType, Field, Int, InputType } from 'type-graphql';
import { Max, Min, IsEmail } from 'class-validator';

@ArgsType()
export class GetAllUsersArgs {
    @Field(() => Int, { defaultValue: 0 })
    @Min(0)
    skip: number;

    @Field(() => Int)
    @Min(1)
    @Max(50)
    take = 25;
}
@ArgsType()
export class FromGoogleOAuth2 {}

@ArgsType()
export class GetUserArgs {
    @Field({ nullable: false })
    @IsEmail()
    email: string;
}

@InputType()
export class CreateUserInputType {
    @Field({ nullable: false })
    @IsEmail()
    emailAddress!: string;
}
