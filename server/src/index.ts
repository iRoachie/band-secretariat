require('dotenv').config()

import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import { Context } from './utils'

const resolvers = {
  Query: {
    applications: (_, args, context: Context, info) => {
      return context.db.query.applications(
        {
          where: {
            OR: [
              { firstName_contains: args.searchString },
              { surName_contains: args.searchString },
            ],
          },
        },
        info
      )
    },
    application: (_, args, context: Context, info) => {
      return context.db.query.application(
        {
          where: {
            id: args.id,
          },
        },
        info
      )
    },
  },
  Mutation: {
    createApplication: (_, args, context: Context, info) => {
      return context.db.mutation.createApplication({
        data: {
          ...args.data,
        },
      }, info)
    },
    updateApplication: (_, args, context: Context) => {
      return context.db.mutation.updateApplication({
        where: { id: args.id },
        data: args.data,
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_DATABASE_URL,
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
    }),
  }),
})

server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
)
