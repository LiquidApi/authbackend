import Query from './Query'
import Mutation from './Mutation'

const resolvers = {
  Query,
  Mutation,
  Account: {
    apps(root, _, context) {
      return context.prisma.account({ id: root.id }).apps()
    }
  },
  App: {
    owner(root, _, context) {
      return context.prisma.app({ id: root.id }).owner()
    },
    users(root, _, context) {
      return context.prisma.app({ id: root.id }).users()
    }
  },
  User: {
    owner(root, _, context) {
      return context.prisma.user({ id: root.id }).owner()
    }
  }
}

export default resolvers
