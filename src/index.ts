import 'reflect-metadata';
import express from 'express';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { UserMutationResolver, UserQueryResolver } from './modules/user';
import { CreatePositionResolver } from './modules/position/Mutations';
import { redis } from './redis';
import cors from 'cors';
// import jwt from 'express-jwt';
// import jwks from 'jwks-rsa';

const main = async () => {
    console.log('creating typeorm connection now...');
    await createConnection();
    const schema = await buildSchema({
        resolvers: [UserMutationResolver, UserQueryResolver, CreatePositionResolver],
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gqlServer = new ApolloServer({ schema, context: ({ req }: any) => ({ req }) });
    const app = express();
    app.use(
        cors({
            credentials: true,
            origin: 'http://localhost:3000',
        }),
    );

    // const jwtCheck = jwt({
    //     secret: jwks.expressJwtSecret({
    //         cache: true,
    //         rateLimit: true,
    //         jwksRequestsPerMinute: 5,
    //         jwksUri: 'https://dev-f8ejm6vn.us.auth0.com/.well-known/jwks.json',
    //     }),
    //     audience: 'http://localhost:4050/graphql',
    //     issuer: 'https://dev-f8ejm6vn.us.auth0.com/',
    //     algorithms: ['RS256'],
    // });

    // app.use(jwtCheck);

    const RedisStore = connectRedis(session);
    app.use(
        session({
            store: new RedisStore({
                client: redis,
            }),
            name: 'qid',
            secret: 'kjkljsdlkfjsdflksdkfj2323',
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any),
    );

    gqlServer.applyMiddleware({ app });

    app.listen({ port: 4050 }, () =>
        console.log(`Graphql Server and express running at http://localhost:4050${gqlServer.graphqlPath}`),
    );
};

main();
