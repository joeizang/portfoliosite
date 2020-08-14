import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { User } from '../../entities/User';

//const userRepo = getConnection().getRepository<User>(() => User);

@Resolver(() => User)
export class RegisterResolver {
    @Query(() => String)
    async hello(): Promise<string> {
        return 'Hello World!';
    }

    @Mutation(() => User)
    async register(
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('email') email: string,
    ): Promise<User> {
        const user = await User.create({ bio: { firstName, lastName, email } });
        return user;
    }

    @FieldResolver(() => [String])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async employmentTypes(@Root() _parent: User): Promise<string[]> {
        return ['Beginner', 'Advanced Beginner', 'Competent', 'Proficient', 'Expert'];
    }
}
