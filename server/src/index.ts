import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import { Context } from './utils';

const resolvers = {
  Query: {
    applications: (_, args, context: Context, info) => {
      return context.db.query.applications(
        {
          where: {
            OR: [
              { firstName_contains: args.searchString },
              { surName_contains: args.searchString }
            ]
          }
        },
        info
      );
    }
  }
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'http://localhost:4466',
      debug: true // log all GraphQL queries & mutations sent to the Prisma API
    })
  })
});
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);
