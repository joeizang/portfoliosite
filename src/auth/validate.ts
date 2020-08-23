import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-f8ejm6vn.us.auth0.com/.well-known/jwks.json',
    }),
    audience: 'http://localhost:4050/graphql',
    issuer: 'https://dev-f8ejm6vn.us.auth0.com/',
    algorithms: ['RS256'],
});
