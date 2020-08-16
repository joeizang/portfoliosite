import { Resolver, Mutation, Arg } from 'type-graphql';
import { User } from '../../entities/User';
@Resolver(() => User)
export class UserMutationResolver {
    @Mutation(() => User)
    register(@Arg('email') email: string): User {
        const user = User.create({ email });
        return user;
    }
}
