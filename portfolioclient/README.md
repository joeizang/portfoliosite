This is a [Next.js](https://nextjs.org/) with typescript client project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) backed by an [Apollo-Express-Server](https://github.com/apollographql/apollo-server) working with [Type-graphql](https://github.com/MichalLytek/type-graphql), [TypeORM](https://github.com/typeorm/typeorm) and [PostgreSQL](https://github.com/postgres/postgres).

## Getting Started

First, run the backend development server with this command. You must ensure that you have a local instance of postgres running with a blank database already created called portfolio. Also ensure that your node version is version 12.13 or higher.

```bash
npm start
# or
yarn start
```

Next you will want to run the client project located in a sub folder inside the main project site called portfolioclient

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
