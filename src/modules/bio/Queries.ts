import { Resolver, Query, Arg } from 'type-graphql';
import { Bio } from '../../entities/Bio';

@Resolver(() => Bio)
export class BioQueryResolver {
    @Query(() => Bio, { nullable: true })
    async bio(@Arg('id') userId: number): Promise<Bio | undefined> {
        const bio = await Bio.findOne({
            relations: ['user'],
            where: {
                id: userId,
            },
        });
        if (bio === undefined) return undefined;
        return bio;
    }
}
