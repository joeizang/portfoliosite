import { Resolver, Mutation, Arg, Args } from 'type-graphql';
import { User } from '../../entities/User';
import { FromGoogleOAuth2 } from './UserArgs';
@Resolver(() => User)
export class UserMutationResolver {
    @Mutation(() => User)
    async register(@Arg('email') email: string): Promise<User | undefined> {
        try {
            const user = await User.create({ email }).save();

            return user;
        } catch (error) {
            return undefined;
        }
    }

    @Mutation(() => User)
    async login(@Args() _fromGoogle: FromGoogleOAuth2) {
        //get information from users social login and persist
        //relevant information to database.
    }
}
