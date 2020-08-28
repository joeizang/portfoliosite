import { Resolver, Mutation, Args } from 'type-graphql';
import { User } from '../../entities/User';
import { FromGoogleOAuth2, LoginInput } from './UserArgs';
@Resolver(() => User)
export class UserMutationResolver {
    @Mutation(() => User)
    async register(@Args() fromGoogle: FromGoogleOAuth2): Promise<User | undefined> {
        try {
            await User.createQueryBuilder()
                .insert()
                .into(User)
                .values([{ email: fromGoogle.email, bio: { firstName: fromGoogle.name, avatarUrl: fromGoogle.photo } }])
                .execute();
            const u = await User.findOne({ where: { email: fromGoogle.email } });

            if (u === undefined) return undefined;
            //create a JWT token with email and other details and send back
            return u;
        } catch (error) {
            return undefined;
        }
    }

    @Mutation(() => User)
    async checkLogin(@Args() { email, isValid }: LoginInput) {
        //get information from users social login and persist
        //relevant information to database.
    }
}
