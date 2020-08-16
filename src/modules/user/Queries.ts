import { Resolver, Arg } from 'type-graphql';
import { User } from '../../entities/User';
import { Query, Args } from 'type-graphql';
import { GetAllUsersArgs } from './UserArgs';

@Resolver(() => User)
export class UserQueryResolver {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query((_returns) => [User])
    async users(@Args() { skip, take }: GetAllUsersArgs): Promise<User[] | undefined> {
        return await User.find({ skip, take });
    }

    @Query(() => User, { nullable: true })
    async user(@Arg('email') email: string): Promise<User | undefined> {
        const user = await User.findOne({ where: { email } });
        if (!user) return undefined;
        return user;
    }
}
