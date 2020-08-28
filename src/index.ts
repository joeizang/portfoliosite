import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { UserMutationResolver, UserQueryResolver } from './modules/user';
import { CreatePositionResolver } from './modules/position/Mutations';
import cors from 'cors';
import { BioQueryResolver } from './modules/bio/Queries';
// import { checkJwt } from './auth/validate';
// import jwt from 'express-jwt';
// import jwks from 'jwks-rsa';

const main = async () => {
    console.log('creating typeorm connection now...');
    await createConnection();
    const schema = await buildSchema({
        resolvers: [UserMutationResolver, UserQueryResolver, CreatePositionResolver, BioQueryResolver],
    });

    const app = express();
    app.use(
        cors({
            credentials: true,
            origin: 'http://localhost:3000',
        }),
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gqlServer = new ApolloServer({ schema, context: ({ req, res }: any) => ({ req, res }) });

    // app.use(checkJwt);

    gqlServer.applyMiddleware({ app });

    app.listen({ port: 4050 }, () =>
        console.log(`Graphql Server and express running at http://localhost:4050${gqlServer.graphqlPath}`),
    );
};

main();
