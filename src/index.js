import { GraphQLServer } from 'graphql-yoga'

import { prisma } from './generated/prisma-client'
import resolvers from './resolvers'

require('dotenv').config()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({ ...request, prisma })
})

server.start({ port: 3001 }, () => console.log('Server is running on localhost:3001'))
