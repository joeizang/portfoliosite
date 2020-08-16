import { Resolver, FieldResolver, Root, Mutation, Args } from 'type-graphql';
import { Position } from '../../entities/Position';
import { PositionArgs } from './PositionArgs';
@Resolver(Position)
export class CreatePositionResolver {
    @FieldResolver(() => [String])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    employmentTypes(@Root() _parent: Position): string[] {
        return ['Full Time', 'Part Time', 'Contract', 'Internship'];
    }

    @Mutation(() => Position)
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async create(
        @Args() { title, company, startDate, endDate, employmentType, location }: PositionArgs,
    ): Promise<Position> {
        const position = await Position.create({
            title,
            company,
            startDate,
            endDate,
            employmentType,
            location,
        }).save();
        return position;
    }
}
