const account = (_, args, context) => context.prsima.account({ id: args.id })

const app = (_, args, context) => context.prsima.app({ id: args.id })
const apps = (_, __, context) => context.prsima.apps()

const user = (_, args, context) => context.prsima.user({ id: args.id })
const users = (_, __, context) => context.prsima.users()

export default {
  account,
  app,
  apps,
  user,
  users
}
