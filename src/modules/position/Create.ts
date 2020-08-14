import { Resolver, FieldResolver, Root } from 'type-graphql';
import { Position } from '../../entities/Position';

@Resolver(Position)
export class CreatePositionResolver {
    @FieldResolver(() => [String])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async employmentTypes(@Root() _parent: Position): Promise<string[]> {
        return ['Full Time', 'Part Time', 'Contract', 'Internship'];
    }
}
