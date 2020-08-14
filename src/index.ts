import 'reflect-metadata';
import express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { RegisterResolver } from './modules/user/Register';
import { CreatePositionResolver } from './modules/position/Create';

const main = async () => {
    console.log('creating typeorm connection now...');
    await createConnection();
    const schema = await buildSchema({
        resolvers: [RegisterResolver, CreatePositionResolver],
    });
    const gqlServer = new ApolloServer({ schema });

    const app = express();

    gqlServer.applyMiddleware({ app });

    app.listen({ port: 4050 }, () =>
        console.log(`Graphql Server and express running at http://localhost:4050${gqlServer.graphqlPath}`),
    );
};

main();
