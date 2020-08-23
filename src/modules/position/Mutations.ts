import { Resolver, Mutation, Args, Arg } from 'type-graphql';
import { Position } from '../../entities/Position';
import { PositionArgs } from './PositionArgs';
@Resolver(Position)
export class CreatePositionResolver {
    @Mutation(() => Position)
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async create(
        @Args() { title, company, startDate, endDate, employmentType, location, userId }: PositionArgs,
    ): Promise<Position> {
        const position = await Position.create({
            title,
            company,
            startDate,
            endDate,
            employmentType,
            location,
            userId,
        }).save();
        return position;
    }

    async update(
        @Args() { title, company, startDate, endDate, employmentType, location, userId }: PositionArgs,
    ): Promise<boolean> {
        try {
            await Position.update({ userId }, { title, company, startDate, endDate, employmentType, location, userId });
        } catch (error) {
            return false;
        }
        return true;
    }

    async delete(@Arg('id') positionId: number): Promise<boolean> {
        try {
            await Position.delete(positionId);
            return true;
        } catch (error) {
            return false;
        }
    }
}
