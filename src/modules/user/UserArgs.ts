import { ArgsType, Field, Int, InputType } from 'type-graphql';
import { Max, Min, IsEmail, IsBoolean, Length } from 'class-validator';

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
export class FromGoogleOAuth2 {
    @Field({ nullable: false })
    @Length(2, 100)
    email: string;

    @Field({ nullable: false })
    @IsBoolean()
    isVerified: boolean;

    @Field({ nullable: false })
    @Length(2, 100)
    name: string;

    @Field()
    @Length(2, 1000)
    publicProfileUrl: string;

    @Field()
    @Length(2, 200)
    photo: string;

    @Field({ nullable: false })
    @Length(2, 100)
    country: string;

    @Field({ nullable: false })
    @Length(2, 30)
    language: string;
}

@InputType()
export class LoginInput {
    @Field({ nullable: false })
    email: string;

    @Field()
    isValid: boolean;
}

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
