import { Resolver, Arg, Args } from 'type-graphql';
import { User } from '../../entities/User';
import { Query } from 'type-graphql';
//import { GetAllUsersArgs } from './UserArgs';
import { Connection } from 'typeorm';
import { GetAllUsersArgs } from './UserArgs';

@Resolver(() => User)
export class UserQueryResolver {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Query((_returns) => [User])
    async users(@Args() { skip, take }: GetAllUsersArgs): Promise<User[] | undefined> {
        return await User.getRepository().find({
            skip,
            take,
            relations: ['bio', 'bio.webLinks', 'skills', 'projects', 'positions', 'positions.achievements'],
        });
    }

    async buildRelationalQueryAndReturnOne<T>(
        entity: string,
        relatedEntityName: string,
        connection: () => Connection,
    ): Promise<T | undefined> {
        return await connection().createQueryBuilder().relation(entity, relatedEntityName).of(entity).loadOne();
    }

    @Query(() => User, { nullable: true })
    async user(@Arg('email') email: string): Promise<User | undefined> {
        const user = await User.findOne({ where: { email } });
        if (!user) return undefined;
        return user;
    }
}
