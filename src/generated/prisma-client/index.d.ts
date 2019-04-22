// Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  account: (where?: AccountWhereInput) => Promise<boolean>;
  app: (where?: AppWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  account: (where: AccountWhereUniqueInput) => AccountPromise;
  accounts: (
    args?: {
      where?: AccountWhereInput;
      orderBy?: AccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Account>;
  accountsConnection: (
    args?: {
      where?: AccountWhereInput;
      orderBy?: AccountOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AccountConnectionPromise;
  app: (where: AppWhereUniqueInput) => AppPromise;
  apps: (
    args?: {
      where?: AppWhereInput;
      orderBy?: AppOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<App>;
  appsConnection: (
    args?: {
      where?: AppWhereInput;
      orderBy?: AppOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => AppConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAccount: (data: AccountCreateInput) => AccountPromise;
  updateAccount: (
    args: { data: AccountUpdateInput; where: AccountWhereUniqueInput }
  ) => AccountPromise;
  updateManyAccounts: (
    args: { data: AccountUpdateManyMutationInput; where?: AccountWhereInput }
  ) => BatchPayloadPromise;
  upsertAccount: (
    args: {
      where: AccountWhereUniqueInput;
      create: AccountCreateInput;
      update: AccountUpdateInput;
    }
  ) => AccountPromise;
  deleteAccount: (where: AccountWhereUniqueInput) => AccountPromise;
  deleteManyAccounts: (where?: AccountWhereInput) => BatchPayloadPromise;
  createApp: (data: AppCreateInput) => AppPromise;
  updateApp: (
    args: { data: AppUpdateInput; where: AppWhereUniqueInput }
  ) => AppPromise;
  updateManyApps: (
    args: { data: AppUpdateManyMutationInput; where?: AppWhereInput }
  ) => BatchPayloadPromise;
  upsertApp: (
    args: {
      where: AppWhereUniqueInput;
      create: AppCreateInput;
      update: AppUpdateInput;
    }
  ) => AppPromise;
  deleteApp: (where: AppWhereUniqueInput) => AppPromise;
  deleteManyApps: (where?: AppWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  account: (
    where?: AccountSubscriptionWhereInput
  ) => AccountSubscriptionPayloadSubscription;
  app: (
    where?: AppSubscriptionWhereInput
  ) => AppSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AppOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC"
  | "emailVerified_ASC"
  | "emailVerified_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type AccountOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC"
  | "emailVerified_ASC"
  | "emailVerified_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateWithWhereUniqueWithoutOwnerInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutOwnerDataInput;
}

export type AccountWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface UserScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  emailVerified?: Boolean;
  emailVerified_not?: Boolean;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: UserScalarWhereInput[] | UserScalarWhereInput;
  OR?: UserScalarWhereInput[] | UserScalarWhereInput;
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput;
}

export interface AccountWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  emailVerified?: Boolean;
  emailVerified_not?: Boolean;
  apps_every?: AppWhereInput;
  apps_some?: AppWhereInput;
  apps_none?: AppWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: AccountWhereInput[] | AccountWhereInput;
  OR?: AccountWhereInput[] | AccountWhereInput;
  NOT?: AccountWhereInput[] | AccountWhereInput;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  emailVerified?: Boolean;
  emailVerified_not?: Boolean;
  owner?: AppWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserCreateManyWithoutOwnerInput {
  create?: UserCreateWithoutOwnerInput[] | UserCreateWithoutOwnerInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}

export interface AppCreateInput {
  id?: ID_Input;
  name: String;
  owner?: AccountCreateOneWithoutAppsInput;
  users?: UserCreateManyWithoutOwnerInput;
}

export interface UserCreateWithoutOwnerInput {
  id?: ID_Input;
  email: String;
  name?: String;
  password: String;
  emailVerified?: Boolean;
}

export interface UserUpdateManyDataInput {
  email?: String;
  name?: String;
  password?: String;
  emailVerified?: Boolean;
}

export interface AccountUpdateInput {
  email?: String;
  name?: String;
  emailVerified?: Boolean;
  apps?: AppUpdateManyWithoutOwnerInput;
}

export interface AppSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AppWhereInput;
  AND?: AppSubscriptionWhereInput[] | AppSubscriptionWhereInput;
  OR?: AppSubscriptionWhereInput[] | AppSubscriptionWhereInput;
  NOT?: AppSubscriptionWhereInput[] | AppSubscriptionWhereInput;
}

export interface AppUpdateManyWithoutOwnerInput {
  create?: AppCreateWithoutOwnerInput[] | AppCreateWithoutOwnerInput;
  delete?: AppWhereUniqueInput[] | AppWhereUniqueInput;
  connect?: AppWhereUniqueInput[] | AppWhereUniqueInput;
  set?: AppWhereUniqueInput[] | AppWhereUniqueInput;
  disconnect?: AppWhereUniqueInput[] | AppWhereUniqueInput;
  update?:
    | AppUpdateWithWhereUniqueWithoutOwnerInput[]
    | AppUpdateWithWhereUniqueWithoutOwnerInput;
  upsert?:
    | AppUpsertWithWhereUniqueWithoutOwnerInput[]
    | AppUpsertWithWhereUniqueWithoutOwnerInput;
  deleteMany?: AppScalarWhereInput[] | AppScalarWhereInput;
  updateMany?:
    | AppUpdateManyWithWhereNestedInput[]
    | AppUpdateManyWithWhereNestedInput;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  name?: String;
  password?: String;
  emailVerified?: Boolean;
}

export interface AppUpdateWithWhereUniqueWithoutOwnerInput {
  where: AppWhereUniqueInput;
  data: AppUpdateWithoutOwnerDataInput;
}

export interface AppUpdateWithoutUsersDataInput {
  name?: String;
  owner?: AccountUpdateOneWithoutAppsInput;
}

export interface AppUpdateWithoutOwnerDataInput {
  name?: String;
  users?: UserUpdateManyWithoutOwnerInput;
}

export type AppWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateManyWithoutOwnerInput {
  create?: UserCreateWithoutOwnerInput[] | UserCreateWithoutOwnerInput;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  update?:
    | UserUpdateWithWhereUniqueWithoutOwnerInput[]
    | UserUpdateWithWhereUniqueWithoutOwnerInput;
  upsert?:
    | UserUpsertWithWhereUniqueWithoutOwnerInput[]
    | UserUpsertWithWhereUniqueWithoutOwnerInput;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
  updateMany?:
    | UserUpdateManyWithWhereNestedInput[]
    | UserUpdateManyWithWhereNestedInput;
}

export interface AppCreateWithoutUsersInput {
  id?: ID_Input;
  name: String;
  owner?: AccountCreateOneWithoutAppsInput;
}

export interface AccountUpdateWithoutAppsDataInput {
  email?: String;
  name?: String;
  emailVerified?: Boolean;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateWithoutOwnerDataInput {
  email?: String;
  name?: String;
  password?: String;
  emailVerified?: Boolean;
}

export interface AppUpdateManyMutationInput {
  name?: String;
}

export interface UserUpsertWithWhereUniqueWithoutOwnerInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutOwnerDataInput;
  create: UserCreateWithoutOwnerInput;
}

export interface AppCreateManyWithoutOwnerInput {
  create?: AppCreateWithoutOwnerInput[] | AppCreateWithoutOwnerInput;
  connect?: AppWhereUniqueInput[] | AppWhereUniqueInput;
}

export interface AccountUpdateOneWithoutAppsInput {
  create?: AccountCreateWithoutAppsInput;
  update?: AccountUpdateWithoutAppsDataInput;
  upsert?: AccountUpsertWithoutAppsInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: AccountWhereUniqueInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface AppWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  owner?: AccountWhereInput;
  users_every?: UserWhereInput;
  users_some?: UserWhereInput;
  users_none?: UserWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: AppWhereInput[] | AppWhereInput;
  OR?: AppWhereInput[] | AppWhereInput;
  NOT?: AppWhereInput[] | AppWhereInput;
}

export interface AppUpsertWithoutUsersInput {
  update: AppUpdateWithoutUsersDataInput;
  create: AppCreateWithoutUsersInput;
}

export interface AppUpdateInput {
  name?: String;
  owner?: AccountUpdateOneWithoutAppsInput;
  users?: UserUpdateManyWithoutOwnerInput;
}

export interface UserUpdateInput {
  email?: String;
  name?: String;
  password?: String;
  emailVerified?: Boolean;
  owner?: AppUpdateOneWithoutUsersInput;
}

export interface AppUpsertWithWhereUniqueWithoutOwnerInput {
  where: AppWhereUniqueInput;
  update: AppUpdateWithoutOwnerDataInput;
  create: AppCreateWithoutOwnerInput;
}

export interface UserCreateInput {
  id?: ID_Input;
  email: String;
  name?: String;
  password: String;
  emailVerified?: Boolean;
  owner?: AppCreateOneWithoutUsersInput;
}

export interface AppScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: AppScalarWhereInput[] | AppScalarWhereInput;
  OR?: AppScalarWhereInput[] | AppScalarWhereInput;
  NOT?: AppScalarWhereInput[] | AppScalarWhereInput;
}

export interface AccountCreateInput {
  id?: ID_Input;
  email: String;
  name: String;
  emailVerified?: Boolean;
  apps?: AppCreateManyWithoutOwnerInput;
}

export interface AppUpdateManyWithWhereNestedInput {
  where: AppScalarWhereInput;
  data: AppUpdateManyDataInput;
}

export interface AccountSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: AccountWhereInput;
  AND?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
  OR?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
  NOT?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
}

export interface AccountCreateOneWithoutAppsInput {
  create?: AccountCreateWithoutAppsInput;
  connect?: AccountWhereUniqueInput;
}

export interface AccountCreateWithoutAppsInput {
  id?: ID_Input;
  email: String;
  name: String;
  emailVerified?: Boolean;
}

export interface AccountUpdateManyMutationInput {
  email?: String;
  name?: String;
  emailVerified?: Boolean;
}

export interface AppUpdateManyDataInput {
  name?: String;
}

export interface AppUpdateOneWithoutUsersInput {
  create?: AppCreateWithoutUsersInput;
  update?: AppUpdateWithoutUsersDataInput;
  upsert?: AppUpsertWithoutUsersInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: AppWhereUniqueInput;
}

export interface AppCreateWithoutOwnerInput {
  id?: ID_Input;
  name: String;
  users?: UserCreateManyWithoutOwnerInput;
}

export interface AccountUpsertWithoutAppsInput {
  update: AccountUpdateWithoutAppsDataInput;
  create: AccountCreateWithoutAppsInput;
}

export interface AppCreateOneWithoutUsersInput {
  create?: AppCreateWithoutUsersInput;
  connect?: AppWhereUniqueInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  name?: String;
  password: String;
  emailVerified: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  emailVerified: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  emailVerified: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AppConnection {
  pageInfo: PageInfo;
  edges: AppEdge[];
}

export interface AppConnectionPromise
  extends Promise<AppConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AppEdge>>() => T;
  aggregate: <T = AggregateAppPromise>() => T;
}

export interface AppConnectionSubscription
  extends Promise<AsyncIterator<AppConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AppEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAppSubscription>() => T;
}

export interface User {
  id: ID_Output;
  email: String;
  name?: String;
  password: String;
  emailVerified: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  emailVerified: () => Promise<Boolean>;
  owner: <T = AppPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  emailVerified: () => Promise<AsyncIterator<Boolean>>;
  owner: <T = AppSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AggregateAccount {
  count: Int;
}

export interface AggregateAccountPromise
  extends Promise<AggregateAccount>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAccountSubscription
  extends Promise<AsyncIterator<AggregateAccount>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AccountEdge {
  node: Account;
  cursor: String;
}

export interface AccountEdgePromise extends Promise<AccountEdge>, Fragmentable {
  node: <T = AccountPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AccountEdgeSubscription
  extends Promise<AsyncIterator<AccountEdge>>,
    Fragmentable {
  node: <T = AccountSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AccountConnection {
  pageInfo: PageInfo;
  edges: AccountEdge[];
}

export interface AccountConnectionPromise
  extends Promise<AccountConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AccountEdge>>() => T;
  aggregate: <T = AggregateAccountPromise>() => T;
}

export interface AccountConnectionSubscription
  extends Promise<AsyncIterator<AccountConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AccountEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAccountSubscription>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AppEdge {
  node: App;
  cursor: String;
}

export interface AppEdgePromise extends Promise<AppEdge>, Fragmentable {
  node: <T = AppPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AppEdgeSubscription
  extends Promise<AsyncIterator<AppEdge>>,
    Fragmentable {
  node: <T = AppSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AccountPreviousValues {
  id: ID_Output;
  email: String;
  name: String;
  emailVerified: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface AccountPreviousValuesPromise
  extends Promise<AccountPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  emailVerified: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface AccountPreviousValuesSubscription
  extends Promise<AsyncIterator<AccountPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  emailVerified: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AccountSubscriptionPayload {
  mutation: MutationType;
  node: Account;
  updatedFields: String[];
  previousValues: AccountPreviousValues;
}

export interface AccountSubscriptionPayloadPromise
  extends Promise<AccountSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AccountPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AccountPreviousValuesPromise>() => T;
}

export interface AccountSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AccountSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AccountSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AccountPreviousValuesSubscription>() => T;
}

export interface AppSubscriptionPayload {
  mutation: MutationType;
  node: App;
  updatedFields: String[];
  previousValues: AppPreviousValues;
}

export interface AppSubscriptionPayloadPromise
  extends Promise<AppSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AppPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AppPreviousValuesPromise>() => T;
}

export interface AppSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AppSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AppSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AppPreviousValuesSubscription>() => T;
}

export interface Account {
  id: ID_Output;
  email: String;
  name: String;
  emailVerified: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface AccountPromise extends Promise<Account>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  emailVerified: () => Promise<Boolean>;
  apps: <T = FragmentableArray<App>>(
    args?: {
      where?: AppWhereInput;
      orderBy?: AppOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface AccountSubscription
  extends Promise<AsyncIterator<Account>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  emailVerified: () => Promise<AsyncIterator<Boolean>>;
  apps: <T = Promise<AsyncIterator<AppSubscription>>>(
    args?: {
      where?: AppWhereInput;
      orderBy?: AppOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface App {
  id: ID_Output;
  name: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface AppPromise extends Promise<App>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  owner: <T = AccountPromise>() => T;
  users: <T = FragmentableArray<User>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface AppSubscription
  extends Promise<AsyncIterator<App>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  owner: <T = AccountSubscription>() => T;
  users: <T = Promise<AsyncIterator<UserSubscription>>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AggregateApp {
  count: Int;
}

export interface AggregateAppPromise
  extends Promise<AggregateApp>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAppSubscription
  extends Promise<AsyncIterator<AggregateApp>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AppPreviousValues {
  id: ID_Output;
  name: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface AppPreviousValuesPromise
  extends Promise<AppPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface AppPreviousValuesSubscription
  extends Promise<AsyncIterator<AppPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Account",
    embedded: false
  },
  {
    name: "App",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
