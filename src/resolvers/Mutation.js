import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const createAccount = async function(_, args, context) {
  const password = await bcrypt.hash(args.password, 10)
  const account = await context.prisma.createAccount({ ...args, password })
  const token = await jwt.sign({ id: account.id, type: 'acc' }, process.env.APP_SECRET)

  return {
    account,
    token
  }
}

// const createApp = async function(_, args, context) {}

const createUser = async function(_, args, context) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = await jwt.sign({ id: user.id, type: 'usr' }, process.env.APP_SECRET)

  return {
    user,
    token
  }
}

const loginAccount = async function(_, args, context) {
  const account = await context.prisma.account({ email: args.email })

  if (!account) {
    throw new Error('Please check email or password')
  }

  const valid = await bcrypt.compare(args.password, account.password)

  if (!valid) {
    throw new Error('Please check email or password')
  }

  const token = await jwt.sign({ id: account.id, type: 'acc' }, process.env.APP_SECRET)

  return {
    account,
    token
  }
}

const loginUser = async function(_, args, context) {
  const user = await context.prisma.user({ email: args.email })

  if (!user) {
    throw new Error('Please check email or password')
  }

  const valid = await bcrypt.compare(args.password, user.password)

  if (!valid) {
    throw new Error('Please check email or password')
  }

  const token = await jwt.sign({ id: user.id, type: 'acc' }, process.env.APP_SECRET)

  return {
    user,
    token
  }
}

export default {
  createAccount,
  createUser,
  loginAccount,
  loginUser
}
