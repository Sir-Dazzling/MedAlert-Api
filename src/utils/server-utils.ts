import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import auth from "../constants/auth";
import general from "../constants/general";
import resolvers from "../constants/resolvers";
import services from "../constants/services";
import { MyContext } from "../types/MyContext";

const createServer = () => {
  const app = express();
  const RedisStore = connectRedis(session);
  const redis = new Redis(auth.REDIS_URL);

  app.get("/", (_req, res) => {
    res.send("Medalert API Server V1");
  });

  app.set("trust proxy", 1);

  app.use(cookieParser());

  app.use(
    session({
      name: auth.COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: auth.JWT_MAX_AGE,
        httpOnly: true,
        secure: general.PRODUCTION ?? general.STAGING,
        domain: general.PRODUCTION ?? general.STAGING ? ".medalert.com" : undefined,
        sameSite: "lax",
      },
      saveUninitialized: false,
      secret: [auth.JWT_SECRET],
      resave: false,
    })
  );

  (async () => {
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: resolvers as any,
        validate: false,
      }),
      plugins: [
        !general.PRODUCTION
          ? ApolloServerPluginLandingPageGraphQLPlayground()
          : ApolloServerPluginLandingPageDisabled(),
      ],
      context: ({ req, res }: MyContext) => ({ req, res, ...services }),
      introspection: !general.PRODUCTION,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
  })();

  return app;
};

export default createServer;
