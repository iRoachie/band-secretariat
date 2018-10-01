import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    applications: <T = Application[]>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    phoneNumbers: <T = PhoneNumber[]>(args: { where?: PhoneNumberWhereInput, orderBy?: PhoneNumberOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    application: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    phoneNumber: <T = PhoneNumber | null>(args: { where: PhoneNumberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationsConnection: <T = ApplicationConnection>(args: { where?: ApplicationWhereInput, orderBy?: ApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    phoneNumbersConnection: <T = PhoneNumberConnection>(args: { where?: PhoneNumberWhereInput, orderBy?: PhoneNumberOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createApplication: <T = Application>(args: { data: ApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPhoneNumber: <T = PhoneNumber>(args: { data: PhoneNumberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplication: <T = Application | null>(args: { data: ApplicationUpdateInput, where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePhoneNumber: <T = PhoneNumber | null>(args: { data: PhoneNumberUpdateInput, where: PhoneNumberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplication: <T = Application | null>(args: { where: ApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePhoneNumber: <T = PhoneNumber | null>(args: { where: PhoneNumberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApplication: <T = Application>(args: { where: ApplicationWhereUniqueInput, create: ApplicationCreateInput, update: ApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPhoneNumber: <T = PhoneNumber>(args: { where: PhoneNumberWhereUniqueInput, create: PhoneNumberCreateInput, update: PhoneNumberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApplications: <T = BatchPayload>(args: { data: ApplicationUpdateInput, where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPhoneNumbers: <T = BatchPayload>(args: { data: PhoneNumberUpdateInput, where?: PhoneNumberWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApplications: <T = BatchPayload>(args: { where?: ApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPhoneNumbers: <T = BatchPayload>(args: { where?: PhoneNumberWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    application: <T = ApplicationSubscriptionPayload | null>(args: { where?: ApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    phoneNumber: <T = PhoneNumberSubscriptionPayload | null>(args: { where?: PhoneNumberSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Application: (where?: ApplicationWhereInput) => Promise<boolean>
  PhoneNumber: (where?: PhoneNumberWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateApplication {
  count: Int!
}

type AggregatePhoneNumber {
  count: Int!
}

type Application implements Node {
  id: ID!
  band: Band!
  applicationDate: DateTime!
  firstName: String!
  surName: String!
  otherNames: String
  country: String
  nationality: String
  address: String
  dateOfBirth: DateTime!
  phones(where: PhoneNumberWhereInput, orderBy: PhoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PhoneNumber!]
  photoURL: String
  email: String
  sex: Sex!
  parent_guardian: String
  occupation: String
  employer_school: String
  grade: String
  accessedInstrument: String
  bandExperience: String
  pathfinder_adventurerClass: String
  club: String
  church: String
  churchPosition: String
  ministryAreas: [MinistryArea!]!
  interestedInstruments: [String!]!
  reason: String
  status: ApplicationStatus!
  hobbies: String
}

"""A connection to a list of items."""
type ApplicationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ApplicationEdge]!
  aggregate: AggregateApplication!
}

input ApplicationCreateInput {
  band: Band!
  applicationDate: DateTime!
  firstName: String!
  surName: String!
  otherNames: String
  country: String
  nationality: String
  address: String
  dateOfBirth: DateTime!
  photoURL: String
  email: String
  sex: Sex!
  parent_guardian: String
  occupation: String
  employer_school: String
  grade: String
  accessedInstrument: String
  bandExperience: String
  pathfinder_adventurerClass: String
  club: String
  church: String
  churchPosition: String
  reason: String
  status: ApplicationStatus
  hobbies: String
  ministryAreas: ApplicationCreateministryAreasInput
  interestedInstruments: ApplicationCreateinterestedInstrumentsInput
  phones: PhoneNumberCreateManyInput
}

input ApplicationCreateinterestedInstrumentsInput {
  set: [String!]
}

input ApplicationCreateministryAreasInput {
  set: [MinistryArea!]
}

"""An edge in a connection."""
type ApplicationEdge {
  """The item at the end of the edge."""
  node: Application!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ApplicationOrderByInput {
  id_ASC
  id_DESC
  band_ASC
  band_DESC
  applicationDate_ASC
  applicationDate_DESC
  firstName_ASC
  firstName_DESC
  surName_ASC
  surName_DESC
  otherNames_ASC
  otherNames_DESC
  country_ASC
  country_DESC
  nationality_ASC
  nationality_DESC
  address_ASC
  address_DESC
  dateOfBirth_ASC
  dateOfBirth_DESC
  photoURL_ASC
  photoURL_DESC
  email_ASC
  email_DESC
  sex_ASC
  sex_DESC
  parent_guardian_ASC
  parent_guardian_DESC
  occupation_ASC
  occupation_DESC
  employer_school_ASC
  employer_school_DESC
  grade_ASC
  grade_DESC
  accessedInstrument_ASC
  accessedInstrument_DESC
  bandExperience_ASC
  bandExperience_DESC
  pathfinder_adventurerClass_ASC
  pathfinder_adventurerClass_DESC
  club_ASC
  club_DESC
  church_ASC
  church_DESC
  churchPosition_ASC
  churchPosition_DESC
  reason_ASC
  reason_DESC
  status_ASC
  status_DESC
  hobbies_ASC
  hobbies_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ApplicationPreviousValues {
  id: ID!
  band: Band!
  applicationDate: DateTime!
  firstName: String!
  surName: String!
  otherNames: String
  country: String
  nationality: String
  address: String
  dateOfBirth: DateTime!
  photoURL: String
  email: String
  sex: Sex!
  parent_guardian: String
  occupation: String
  employer_school: String
  grade: String
  accessedInstrument: String
  bandExperience: String
  pathfinder_adventurerClass: String
  club: String
  church: String
  churchPosition: String
  ministryAreas: [MinistryArea!]!
  interestedInstruments: [String!]!
  reason: String
  status: ApplicationStatus!
  hobbies: String
}

enum ApplicationStatus {
  APPLIED
  ASSIGNED
  PASSED_OUT
  INCOMPLETE
}

type ApplicationSubscriptionPayload {
  mutation: MutationType!
  node: Application
  updatedFields: [String!]
  previousValues: ApplicationPreviousValues
}

input ApplicationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ApplicationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ApplicationWhereInput
}

input ApplicationUpdateInput {
  band: Band
  applicationDate: DateTime
  firstName: String
  surName: String
  otherNames: String
  country: String
  nationality: String
  address: String
  dateOfBirth: DateTime
  photoURL: String
  email: String
  sex: Sex
  parent_guardian: String
  occupation: String
  employer_school: String
  grade: String
  accessedInstrument: String
  bandExperience: String
  pathfinder_adventurerClass: String
  club: String
  church: String
  churchPosition: String
  reason: String
  status: ApplicationStatus
  hobbies: String
  ministryAreas: ApplicationUpdateministryAreasInput
  interestedInstruments: ApplicationUpdateinterestedInstrumentsInput
  phones: PhoneNumberUpdateManyInput
}

input ApplicationUpdateinterestedInstrumentsInput {
  set: [String!]
}

input ApplicationUpdateministryAreasInput {
  set: [MinistryArea!]
}

input ApplicationWhereInput {
  """Logical AND on all given filters."""
  AND: [ApplicationWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  band: Band

  """All values that are not equal to given value."""
  band_not: Band

  """All values that are contained in given list."""
  band_in: [Band!]

  """All values that are not contained in given list."""
  band_not_in: [Band!]
  applicationDate: DateTime

  """All values that are not equal to given value."""
  applicationDate_not: DateTime

  """All values that are contained in given list."""
  applicationDate_in: [DateTime!]

  """All values that are not contained in given list."""
  applicationDate_not_in: [DateTime!]

  """All values less than the given value."""
  applicationDate_lt: DateTime

  """All values less than or equal the given value."""
  applicationDate_lte: DateTime

  """All values greater than the given value."""
  applicationDate_gt: DateTime

  """All values greater than or equal the given value."""
  applicationDate_gte: DateTime
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  surName: String

  """All values that are not equal to given value."""
  surName_not: String

  """All values that are contained in given list."""
  surName_in: [String!]

  """All values that are not contained in given list."""
  surName_not_in: [String!]

  """All values less than the given value."""
  surName_lt: String

  """All values less than or equal the given value."""
  surName_lte: String

  """All values greater than the given value."""
  surName_gt: String

  """All values greater than or equal the given value."""
  surName_gte: String

  """All values containing the given string."""
  surName_contains: String

  """All values not containing the given string."""
  surName_not_contains: String

  """All values starting with the given string."""
  surName_starts_with: String

  """All values not starting with the given string."""
  surName_not_starts_with: String

  """All values ending with the given string."""
  surName_ends_with: String

  """All values not ending with the given string."""
  surName_not_ends_with: String
  otherNames: String

  """All values that are not equal to given value."""
  otherNames_not: String

  """All values that are contained in given list."""
  otherNames_in: [String!]

  """All values that are not contained in given list."""
  otherNames_not_in: [String!]

  """All values less than the given value."""
  otherNames_lt: String

  """All values less than or equal the given value."""
  otherNames_lte: String

  """All values greater than the given value."""
  otherNames_gt: String

  """All values greater than or equal the given value."""
  otherNames_gte: String

  """All values containing the given string."""
  otherNames_contains: String

  """All values not containing the given string."""
  otherNames_not_contains: String

  """All values starting with the given string."""
  otherNames_starts_with: String

  """All values not starting with the given string."""
  otherNames_not_starts_with: String

  """All values ending with the given string."""
  otherNames_ends_with: String

  """All values not ending with the given string."""
  otherNames_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  nationality: String

  """All values that are not equal to given value."""
  nationality_not: String

  """All values that are contained in given list."""
  nationality_in: [String!]

  """All values that are not contained in given list."""
  nationality_not_in: [String!]

  """All values less than the given value."""
  nationality_lt: String

  """All values less than or equal the given value."""
  nationality_lte: String

  """All values greater than the given value."""
  nationality_gt: String

  """All values greater than or equal the given value."""
  nationality_gte: String

  """All values containing the given string."""
  nationality_contains: String

  """All values not containing the given string."""
  nationality_not_contains: String

  """All values starting with the given string."""
  nationality_starts_with: String

  """All values not starting with the given string."""
  nationality_not_starts_with: String

  """All values ending with the given string."""
  nationality_ends_with: String

  """All values not ending with the given string."""
  nationality_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  dateOfBirth: DateTime

  """All values that are not equal to given value."""
  dateOfBirth_not: DateTime

  """All values that are contained in given list."""
  dateOfBirth_in: [DateTime!]

  """All values that are not contained in given list."""
  dateOfBirth_not_in: [DateTime!]

  """All values less than the given value."""
  dateOfBirth_lt: DateTime

  """All values less than or equal the given value."""
  dateOfBirth_lte: DateTime

  """All values greater than the given value."""
  dateOfBirth_gt: DateTime

  """All values greater than or equal the given value."""
  dateOfBirth_gte: DateTime
  photoURL: String

  """All values that are not equal to given value."""
  photoURL_not: String

  """All values that are contained in given list."""
  photoURL_in: [String!]

  """All values that are not contained in given list."""
  photoURL_not_in: [String!]

  """All values less than the given value."""
  photoURL_lt: String

  """All values less than or equal the given value."""
  photoURL_lte: String

  """All values greater than the given value."""
  photoURL_gt: String

  """All values greater than or equal the given value."""
  photoURL_gte: String

  """All values containing the given string."""
  photoURL_contains: String

  """All values not containing the given string."""
  photoURL_not_contains: String

  """All values starting with the given string."""
  photoURL_starts_with: String

  """All values not starting with the given string."""
  photoURL_not_starts_with: String

  """All values ending with the given string."""
  photoURL_ends_with: String

  """All values not ending with the given string."""
  photoURL_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  sex: Sex

  """All values that are not equal to given value."""
  sex_not: Sex

  """All values that are contained in given list."""
  sex_in: [Sex!]

  """All values that are not contained in given list."""
  sex_not_in: [Sex!]
  parent_guardian: String

  """All values that are not equal to given value."""
  parent_guardian_not: String

  """All values that are contained in given list."""
  parent_guardian_in: [String!]

  """All values that are not contained in given list."""
  parent_guardian_not_in: [String!]

  """All values less than the given value."""
  parent_guardian_lt: String

  """All values less than or equal the given value."""
  parent_guardian_lte: String

  """All values greater than the given value."""
  parent_guardian_gt: String

  """All values greater than or equal the given value."""
  parent_guardian_gte: String

  """All values containing the given string."""
  parent_guardian_contains: String

  """All values not containing the given string."""
  parent_guardian_not_contains: String

  """All values starting with the given string."""
  parent_guardian_starts_with: String

  """All values not starting with the given string."""
  parent_guardian_not_starts_with: String

  """All values ending with the given string."""
  parent_guardian_ends_with: String

  """All values not ending with the given string."""
  parent_guardian_not_ends_with: String
  occupation: String

  """All values that are not equal to given value."""
  occupation_not: String

  """All values that are contained in given list."""
  occupation_in: [String!]

  """All values that are not contained in given list."""
  occupation_not_in: [String!]

  """All values less than the given value."""
  occupation_lt: String

  """All values less than or equal the given value."""
  occupation_lte: String

  """All values greater than the given value."""
  occupation_gt: String

  """All values greater than or equal the given value."""
  occupation_gte: String

  """All values containing the given string."""
  occupation_contains: String

  """All values not containing the given string."""
  occupation_not_contains: String

  """All values starting with the given string."""
  occupation_starts_with: String

  """All values not starting with the given string."""
  occupation_not_starts_with: String

  """All values ending with the given string."""
  occupation_ends_with: String

  """All values not ending with the given string."""
  occupation_not_ends_with: String
  employer_school: String

  """All values that are not equal to given value."""
  employer_school_not: String

  """All values that are contained in given list."""
  employer_school_in: [String!]

  """All values that are not contained in given list."""
  employer_school_not_in: [String!]

  """All values less than the given value."""
  employer_school_lt: String

  """All values less than or equal the given value."""
  employer_school_lte: String

  """All values greater than the given value."""
  employer_school_gt: String

  """All values greater than or equal the given value."""
  employer_school_gte: String

  """All values containing the given string."""
  employer_school_contains: String

  """All values not containing the given string."""
  employer_school_not_contains: String

  """All values starting with the given string."""
  employer_school_starts_with: String

  """All values not starting with the given string."""
  employer_school_not_starts_with: String

  """All values ending with the given string."""
  employer_school_ends_with: String

  """All values not ending with the given string."""
  employer_school_not_ends_with: String
  grade: String

  """All values that are not equal to given value."""
  grade_not: String

  """All values that are contained in given list."""
  grade_in: [String!]

  """All values that are not contained in given list."""
  grade_not_in: [String!]

  """All values less than the given value."""
  grade_lt: String

  """All values less than or equal the given value."""
  grade_lte: String

  """All values greater than the given value."""
  grade_gt: String

  """All values greater than or equal the given value."""
  grade_gte: String

  """All values containing the given string."""
  grade_contains: String

  """All values not containing the given string."""
  grade_not_contains: String

  """All values starting with the given string."""
  grade_starts_with: String

  """All values not starting with the given string."""
  grade_not_starts_with: String

  """All values ending with the given string."""
  grade_ends_with: String

  """All values not ending with the given string."""
  grade_not_ends_with: String
  accessedInstrument: String

  """All values that are not equal to given value."""
  accessedInstrument_not: String

  """All values that are contained in given list."""
  accessedInstrument_in: [String!]

  """All values that are not contained in given list."""
  accessedInstrument_not_in: [String!]

  """All values less than the given value."""
  accessedInstrument_lt: String

  """All values less than or equal the given value."""
  accessedInstrument_lte: String

  """All values greater than the given value."""
  accessedInstrument_gt: String

  """All values greater than or equal the given value."""
  accessedInstrument_gte: String

  """All values containing the given string."""
  accessedInstrument_contains: String

  """All values not containing the given string."""
  accessedInstrument_not_contains: String

  """All values starting with the given string."""
  accessedInstrument_starts_with: String

  """All values not starting with the given string."""
  accessedInstrument_not_starts_with: String

  """All values ending with the given string."""
  accessedInstrument_ends_with: String

  """All values not ending with the given string."""
  accessedInstrument_not_ends_with: String
  bandExperience: String

  """All values that are not equal to given value."""
  bandExperience_not: String

  """All values that are contained in given list."""
  bandExperience_in: [String!]

  """All values that are not contained in given list."""
  bandExperience_not_in: [String!]

  """All values less than the given value."""
  bandExperience_lt: String

  """All values less than or equal the given value."""
  bandExperience_lte: String

  """All values greater than the given value."""
  bandExperience_gt: String

  """All values greater than or equal the given value."""
  bandExperience_gte: String

  """All values containing the given string."""
  bandExperience_contains: String

  """All values not containing the given string."""
  bandExperience_not_contains: String

  """All values starting with the given string."""
  bandExperience_starts_with: String

  """All values not starting with the given string."""
  bandExperience_not_starts_with: String

  """All values ending with the given string."""
  bandExperience_ends_with: String

  """All values not ending with the given string."""
  bandExperience_not_ends_with: String
  pathfinder_adventurerClass: String

  """All values that are not equal to given value."""
  pathfinder_adventurerClass_not: String

  """All values that are contained in given list."""
  pathfinder_adventurerClass_in: [String!]

  """All values that are not contained in given list."""
  pathfinder_adventurerClass_not_in: [String!]

  """All values less than the given value."""
  pathfinder_adventurerClass_lt: String

  """All values less than or equal the given value."""
  pathfinder_adventurerClass_lte: String

  """All values greater than the given value."""
  pathfinder_adventurerClass_gt: String

  """All values greater than or equal the given value."""
  pathfinder_adventurerClass_gte: String

  """All values containing the given string."""
  pathfinder_adventurerClass_contains: String

  """All values not containing the given string."""
  pathfinder_adventurerClass_not_contains: String

  """All values starting with the given string."""
  pathfinder_adventurerClass_starts_with: String

  """All values not starting with the given string."""
  pathfinder_adventurerClass_not_starts_with: String

  """All values ending with the given string."""
  pathfinder_adventurerClass_ends_with: String

  """All values not ending with the given string."""
  pathfinder_adventurerClass_not_ends_with: String
  club: String

  """All values that are not equal to given value."""
  club_not: String

  """All values that are contained in given list."""
  club_in: [String!]

  """All values that are not contained in given list."""
  club_not_in: [String!]

  """All values less than the given value."""
  club_lt: String

  """All values less than or equal the given value."""
  club_lte: String

  """All values greater than the given value."""
  club_gt: String

  """All values greater than or equal the given value."""
  club_gte: String

  """All values containing the given string."""
  club_contains: String

  """All values not containing the given string."""
  club_not_contains: String

  """All values starting with the given string."""
  club_starts_with: String

  """All values not starting with the given string."""
  club_not_starts_with: String

  """All values ending with the given string."""
  club_ends_with: String

  """All values not ending with the given string."""
  club_not_ends_with: String
  church: String

  """All values that are not equal to given value."""
  church_not: String

  """All values that are contained in given list."""
  church_in: [String!]

  """All values that are not contained in given list."""
  church_not_in: [String!]

  """All values less than the given value."""
  church_lt: String

  """All values less than or equal the given value."""
  church_lte: String

  """All values greater than the given value."""
  church_gt: String

  """All values greater than or equal the given value."""
  church_gte: String

  """All values containing the given string."""
  church_contains: String

  """All values not containing the given string."""
  church_not_contains: String

  """All values starting with the given string."""
  church_starts_with: String

  """All values not starting with the given string."""
  church_not_starts_with: String

  """All values ending with the given string."""
  church_ends_with: String

  """All values not ending with the given string."""
  church_not_ends_with: String
  churchPosition: String

  """All values that are not equal to given value."""
  churchPosition_not: String

  """All values that are contained in given list."""
  churchPosition_in: [String!]

  """All values that are not contained in given list."""
  churchPosition_not_in: [String!]

  """All values less than the given value."""
  churchPosition_lt: String

  """All values less than or equal the given value."""
  churchPosition_lte: String

  """All values greater than the given value."""
  churchPosition_gt: String

  """All values greater than or equal the given value."""
  churchPosition_gte: String

  """All values containing the given string."""
  churchPosition_contains: String

  """All values not containing the given string."""
  churchPosition_not_contains: String

  """All values starting with the given string."""
  churchPosition_starts_with: String

  """All values not starting with the given string."""
  churchPosition_not_starts_with: String

  """All values ending with the given string."""
  churchPosition_ends_with: String

  """All values not ending with the given string."""
  churchPosition_not_ends_with: String
  reason: String

  """All values that are not equal to given value."""
  reason_not: String

  """All values that are contained in given list."""
  reason_in: [String!]

  """All values that are not contained in given list."""
  reason_not_in: [String!]

  """All values less than the given value."""
  reason_lt: String

  """All values less than or equal the given value."""
  reason_lte: String

  """All values greater than the given value."""
  reason_gt: String

  """All values greater than or equal the given value."""
  reason_gte: String

  """All values containing the given string."""
  reason_contains: String

  """All values not containing the given string."""
  reason_not_contains: String

  """All values starting with the given string."""
  reason_starts_with: String

  """All values not starting with the given string."""
  reason_not_starts_with: String

  """All values ending with the given string."""
  reason_ends_with: String

  """All values not ending with the given string."""
  reason_not_ends_with: String
  status: ApplicationStatus

  """All values that are not equal to given value."""
  status_not: ApplicationStatus

  """All values that are contained in given list."""
  status_in: [ApplicationStatus!]

  """All values that are not contained in given list."""
  status_not_in: [ApplicationStatus!]
  hobbies: String

  """All values that are not equal to given value."""
  hobbies_not: String

  """All values that are contained in given list."""
  hobbies_in: [String!]

  """All values that are not contained in given list."""
  hobbies_not_in: [String!]

  """All values less than the given value."""
  hobbies_lt: String

  """All values less than or equal the given value."""
  hobbies_lte: String

  """All values greater than the given value."""
  hobbies_gt: String

  """All values greater than or equal the given value."""
  hobbies_gte: String

  """All values containing the given string."""
  hobbies_contains: String

  """All values not containing the given string."""
  hobbies_not_contains: String

  """All values starting with the given string."""
  hobbies_starts_with: String

  """All values not starting with the given string."""
  hobbies_not_starts_with: String

  """All values ending with the given string."""
  hobbies_ends_with: String

  """All values not ending with the given string."""
  hobbies_not_ends_with: String
  phones_every: PhoneNumberWhereInput
  phones_some: PhoneNumberWhereInput
  phones_none: PhoneNumberWhereInput
}

input ApplicationWhereUniqueInput {
  id: ID
}

enum Band {
  Pathfinder
  Adventurer
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MinistryArea {
  AdventurerClubMember
  AdventurerClubOfficer
  PathfinderClubMember
  PathfinderClubOfficer
  AdventistYouthOfficer
  MasterGuideInTraining
  AYLeadershipTraining
  PLATraining
  APLATraining
  AmbassadorTraining
}

type Mutation {
  createApplication(data: ApplicationCreateInput!): Application!
  createPhoneNumber(data: PhoneNumberCreateInput!): PhoneNumber!
  updateApplication(data: ApplicationUpdateInput!, where: ApplicationWhereUniqueInput!): Application
  updatePhoneNumber(data: PhoneNumberUpdateInput!, where: PhoneNumberWhereUniqueInput!): PhoneNumber
  deleteApplication(where: ApplicationWhereUniqueInput!): Application
  deletePhoneNumber(where: PhoneNumberWhereUniqueInput!): PhoneNumber
  upsertApplication(where: ApplicationWhereUniqueInput!, create: ApplicationCreateInput!, update: ApplicationUpdateInput!): Application!
  upsertPhoneNumber(where: PhoneNumberWhereUniqueInput!, create: PhoneNumberCreateInput!, update: PhoneNumberUpdateInput!): PhoneNumber!
  updateManyApplications(data: ApplicationUpdateInput!, where: ApplicationWhereInput): BatchPayload!
  updateManyPhoneNumbers(data: PhoneNumberUpdateInput!, where: PhoneNumberWhereInput): BatchPayload!
  deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
  deleteManyPhoneNumbers(where: PhoneNumberWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type PhoneNumber implements Node {
  id: ID!
  label: String!
  number: String!
}

"""A connection to a list of items."""
type PhoneNumberConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PhoneNumberEdge]!
  aggregate: AggregatePhoneNumber!
}

input PhoneNumberCreateInput {
  label: String!
  number: String!
}

input PhoneNumberCreateManyInput {
  create: [PhoneNumberCreateInput!]
  connect: [PhoneNumberWhereUniqueInput!]
}

"""An edge in a connection."""
type PhoneNumberEdge {
  """The item at the end of the edge."""
  node: PhoneNumber!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PhoneNumberOrderByInput {
  id_ASC
  id_DESC
  label_ASC
  label_DESC
  number_ASC
  number_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PhoneNumberPreviousValues {
  id: ID!
  label: String!
  number: String!
}

type PhoneNumberSubscriptionPayload {
  mutation: MutationType!
  node: PhoneNumber
  updatedFields: [String!]
  previousValues: PhoneNumberPreviousValues
}

input PhoneNumberSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PhoneNumberSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PhoneNumberSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PhoneNumberSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PhoneNumberWhereInput
}

input PhoneNumberUpdateDataInput {
  label: String
  number: String
}

input PhoneNumberUpdateInput {
  label: String
  number: String
}

input PhoneNumberUpdateManyInput {
  create: [PhoneNumberCreateInput!]
  connect: [PhoneNumberWhereUniqueInput!]
  disconnect: [PhoneNumberWhereUniqueInput!]
  delete: [PhoneNumberWhereUniqueInput!]
  update: [PhoneNumberUpdateWithWhereUniqueNestedInput!]
  upsert: [PhoneNumberUpsertWithWhereUniqueNestedInput!]
}

input PhoneNumberUpdateWithWhereUniqueNestedInput {
  where: PhoneNumberWhereUniqueInput!
  data: PhoneNumberUpdateDataInput!
}

input PhoneNumberUpsertWithWhereUniqueNestedInput {
  where: PhoneNumberWhereUniqueInput!
  update: PhoneNumberUpdateDataInput!
  create: PhoneNumberCreateInput!
}

input PhoneNumberWhereInput {
  """Logical AND on all given filters."""
  AND: [PhoneNumberWhereInput!]

  """Logical OR on all given filters."""
  OR: [PhoneNumberWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PhoneNumberWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  label: String

  """All values that are not equal to given value."""
  label_not: String

  """All values that are contained in given list."""
  label_in: [String!]

  """All values that are not contained in given list."""
  label_not_in: [String!]

  """All values less than the given value."""
  label_lt: String

  """All values less than or equal the given value."""
  label_lte: String

  """All values greater than the given value."""
  label_gt: String

  """All values greater than or equal the given value."""
  label_gte: String

  """All values containing the given string."""
  label_contains: String

  """All values not containing the given string."""
  label_not_contains: String

  """All values starting with the given string."""
  label_starts_with: String

  """All values not starting with the given string."""
  label_not_starts_with: String

  """All values ending with the given string."""
  label_ends_with: String

  """All values not ending with the given string."""
  label_not_ends_with: String
  number: String

  """All values that are not equal to given value."""
  number_not: String

  """All values that are contained in given list."""
  number_in: [String!]

  """All values that are not contained in given list."""
  number_not_in: [String!]

  """All values less than the given value."""
  number_lt: String

  """All values less than or equal the given value."""
  number_lte: String

  """All values greater than the given value."""
  number_gt: String

  """All values greater than or equal the given value."""
  number_gte: String

  """All values containing the given string."""
  number_contains: String

  """All values not containing the given string."""
  number_not_contains: String

  """All values starting with the given string."""
  number_starts_with: String

  """All values not starting with the given string."""
  number_not_starts_with: String

  """All values ending with the given string."""
  number_ends_with: String

  """All values not ending with the given string."""
  number_not_ends_with: String
}

input PhoneNumberWhereUniqueInput {
  id: ID
}

type Query {
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
  phoneNumbers(where: PhoneNumberWhereInput, orderBy: PhoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PhoneNumber]!
  application(where: ApplicationWhereUniqueInput!): Application
  phoneNumber(where: PhoneNumberWhereUniqueInput!): PhoneNumber
  applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
  phoneNumbersConnection(where: PhoneNumberWhereInput, orderBy: PhoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhoneNumberConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Sex {
  M
  F
}

type Subscription {
  application(where: ApplicationSubscriptionWhereInput): ApplicationSubscriptionPayload
  phoneNumber(where: PhoneNumberSubscriptionWhereInput): PhoneNumberSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ApplicationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'band_ASC' |
  'band_DESC' |
  'applicationDate_ASC' |
  'applicationDate_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'surName_ASC' |
  'surName_DESC' |
  'otherNames_ASC' |
  'otherNames_DESC' |
  'country_ASC' |
  'country_DESC' |
  'nationality_ASC' |
  'nationality_DESC' |
  'address_ASC' |
  'address_DESC' |
  'dateOfBirth_ASC' |
  'dateOfBirth_DESC' |
  'photoURL_ASC' |
  'photoURL_DESC' |
  'email_ASC' |
  'email_DESC' |
  'sex_ASC' |
  'sex_DESC' |
  'parent_guardian_ASC' |
  'parent_guardian_DESC' |
  'occupation_ASC' |
  'occupation_DESC' |
  'employer_school_ASC' |
  'employer_school_DESC' |
  'grade_ASC' |
  'grade_DESC' |
  'accessedInstrument_ASC' |
  'accessedInstrument_DESC' |
  'bandExperience_ASC' |
  'bandExperience_DESC' |
  'pathfinder_adventurerClass_ASC' |
  'pathfinder_adventurerClass_DESC' |
  'club_ASC' |
  'club_DESC' |
  'church_ASC' |
  'church_DESC' |
  'churchPosition_ASC' |
  'churchPosition_DESC' |
  'reason_ASC' |
  'reason_DESC' |
  'status_ASC' |
  'status_DESC' |
  'hobbies_ASC' |
  'hobbies_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PhoneNumberOrderByInput =   'id_ASC' |
  'id_DESC' |
  'label_ASC' |
  'label_DESC' |
  'number_ASC' |
  'number_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ApplicationStatus =   'APPLIED' |
  'ASSIGNED' |
  'PASSED_OUT' |
  'INCOMPLETE'

export type Sex =   'M' |
  'F'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type Band =   'Pathfinder' |
  'Adventurer'

export type MinistryArea =   'AdventurerClubMember' |
  'AdventurerClubOfficer' |
  'PathfinderClubMember' |
  'PathfinderClubOfficer' |
  'AdventistYouthOfficer' |
  'MasterGuideInTraining' |
  'AYLeadershipTraining' |
  'PLATraining' |
  'APLATraining' |
  'AmbassadorTraining'

export interface ApplicationCreateinterestedInstrumentsInput {
  set?: String[] | String
}

export interface PhoneNumberUpdateWithWhereUniqueNestedInput {
  where: PhoneNumberWhereUniqueInput
  data: PhoneNumberUpdateDataInput
}

export interface ApplicationWhereInput {
  AND?: ApplicationWhereInput[] | ApplicationWhereInput
  OR?: ApplicationWhereInput[] | ApplicationWhereInput
  NOT?: ApplicationWhereInput[] | ApplicationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  band?: Band
  band_not?: Band
  band_in?: Band[] | Band
  band_not_in?: Band[] | Band
  applicationDate?: DateTime
  applicationDate_not?: DateTime
  applicationDate_in?: DateTime[] | DateTime
  applicationDate_not_in?: DateTime[] | DateTime
  applicationDate_lt?: DateTime
  applicationDate_lte?: DateTime
  applicationDate_gt?: DateTime
  applicationDate_gte?: DateTime
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  surName?: String
  surName_not?: String
  surName_in?: String[] | String
  surName_not_in?: String[] | String
  surName_lt?: String
  surName_lte?: String
  surName_gt?: String
  surName_gte?: String
  surName_contains?: String
  surName_not_contains?: String
  surName_starts_with?: String
  surName_not_starts_with?: String
  surName_ends_with?: String
  surName_not_ends_with?: String
  otherNames?: String
  otherNames_not?: String
  otherNames_in?: String[] | String
  otherNames_not_in?: String[] | String
  otherNames_lt?: String
  otherNames_lte?: String
  otherNames_gt?: String
  otherNames_gte?: String
  otherNames_contains?: String
  otherNames_not_contains?: String
  otherNames_starts_with?: String
  otherNames_not_starts_with?: String
  otherNames_ends_with?: String
  otherNames_not_ends_with?: String
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  nationality?: String
  nationality_not?: String
  nationality_in?: String[] | String
  nationality_not_in?: String[] | String
  nationality_lt?: String
  nationality_lte?: String
  nationality_gt?: String
  nationality_gte?: String
  nationality_contains?: String
  nationality_not_contains?: String
  nationality_starts_with?: String
  nationality_not_starts_with?: String
  nationality_ends_with?: String
  nationality_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  dateOfBirth?: DateTime
  dateOfBirth_not?: DateTime
  dateOfBirth_in?: DateTime[] | DateTime
  dateOfBirth_not_in?: DateTime[] | DateTime
  dateOfBirth_lt?: DateTime
  dateOfBirth_lte?: DateTime
  dateOfBirth_gt?: DateTime
  dateOfBirth_gte?: DateTime
  photoURL?: String
  photoURL_not?: String
  photoURL_in?: String[] | String
  photoURL_not_in?: String[] | String
  photoURL_lt?: String
  photoURL_lte?: String
  photoURL_gt?: String
  photoURL_gte?: String
  photoURL_contains?: String
  photoURL_not_contains?: String
  photoURL_starts_with?: String
  photoURL_not_starts_with?: String
  photoURL_ends_with?: String
  photoURL_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  sex?: Sex
  sex_not?: Sex
  sex_in?: Sex[] | Sex
  sex_not_in?: Sex[] | Sex
  parent_guardian?: String
  parent_guardian_not?: String
  parent_guardian_in?: String[] | String
  parent_guardian_not_in?: String[] | String
  parent_guardian_lt?: String
  parent_guardian_lte?: String
  parent_guardian_gt?: String
  parent_guardian_gte?: String
  parent_guardian_contains?: String
  parent_guardian_not_contains?: String
  parent_guardian_starts_with?: String
  parent_guardian_not_starts_with?: String
  parent_guardian_ends_with?: String
  parent_guardian_not_ends_with?: String
  occupation?: String
  occupation_not?: String
  occupation_in?: String[] | String
  occupation_not_in?: String[] | String
  occupation_lt?: String
  occupation_lte?: String
  occupation_gt?: String
  occupation_gte?: String
  occupation_contains?: String
  occupation_not_contains?: String
  occupation_starts_with?: String
  occupation_not_starts_with?: String
  occupation_ends_with?: String
  occupation_not_ends_with?: String
  employer_school?: String
  employer_school_not?: String
  employer_school_in?: String[] | String
  employer_school_not_in?: String[] | String
  employer_school_lt?: String
  employer_school_lte?: String
  employer_school_gt?: String
  employer_school_gte?: String
  employer_school_contains?: String
  employer_school_not_contains?: String
  employer_school_starts_with?: String
  employer_school_not_starts_with?: String
  employer_school_ends_with?: String
  employer_school_not_ends_with?: String
  grade?: String
  grade_not?: String
  grade_in?: String[] | String
  grade_not_in?: String[] | String
  grade_lt?: String
  grade_lte?: String
  grade_gt?: String
  grade_gte?: String
  grade_contains?: String
  grade_not_contains?: String
  grade_starts_with?: String
  grade_not_starts_with?: String
  grade_ends_with?: String
  grade_not_ends_with?: String
  accessedInstrument?: String
  accessedInstrument_not?: String
  accessedInstrument_in?: String[] | String
  accessedInstrument_not_in?: String[] | String
  accessedInstrument_lt?: String
  accessedInstrument_lte?: String
  accessedInstrument_gt?: String
  accessedInstrument_gte?: String
  accessedInstrument_contains?: String
  accessedInstrument_not_contains?: String
  accessedInstrument_starts_with?: String
  accessedInstrument_not_starts_with?: String
  accessedInstrument_ends_with?: String
  accessedInstrument_not_ends_with?: String
  bandExperience?: String
  bandExperience_not?: String
  bandExperience_in?: String[] | String
  bandExperience_not_in?: String[] | String
  bandExperience_lt?: String
  bandExperience_lte?: String
  bandExperience_gt?: String
  bandExperience_gte?: String
  bandExperience_contains?: String
  bandExperience_not_contains?: String
  bandExperience_starts_with?: String
  bandExperience_not_starts_with?: String
  bandExperience_ends_with?: String
  bandExperience_not_ends_with?: String
  pathfinder_adventurerClass?: String
  pathfinder_adventurerClass_not?: String
  pathfinder_adventurerClass_in?: String[] | String
  pathfinder_adventurerClass_not_in?: String[] | String
  pathfinder_adventurerClass_lt?: String
  pathfinder_adventurerClass_lte?: String
  pathfinder_adventurerClass_gt?: String
  pathfinder_adventurerClass_gte?: String
  pathfinder_adventurerClass_contains?: String
  pathfinder_adventurerClass_not_contains?: String
  pathfinder_adventurerClass_starts_with?: String
  pathfinder_adventurerClass_not_starts_with?: String
  pathfinder_adventurerClass_ends_with?: String
  pathfinder_adventurerClass_not_ends_with?: String
  club?: String
  club_not?: String
  club_in?: String[] | String
  club_not_in?: String[] | String
  club_lt?: String
  club_lte?: String
  club_gt?: String
  club_gte?: String
  club_contains?: String
  club_not_contains?: String
  club_starts_with?: String
  club_not_starts_with?: String
  club_ends_with?: String
  club_not_ends_with?: String
  church?: String
  church_not?: String
  church_in?: String[] | String
  church_not_in?: String[] | String
  church_lt?: String
  church_lte?: String
  church_gt?: String
  church_gte?: String
  church_contains?: String
  church_not_contains?: String
  church_starts_with?: String
  church_not_starts_with?: String
  church_ends_with?: String
  church_not_ends_with?: String
  churchPosition?: String
  churchPosition_not?: String
  churchPosition_in?: String[] | String
  churchPosition_not_in?: String[] | String
  churchPosition_lt?: String
  churchPosition_lte?: String
  churchPosition_gt?: String
  churchPosition_gte?: String
  churchPosition_contains?: String
  churchPosition_not_contains?: String
  churchPosition_starts_with?: String
  churchPosition_not_starts_with?: String
  churchPosition_ends_with?: String
  churchPosition_not_ends_with?: String
  reason?: String
  reason_not?: String
  reason_in?: String[] | String
  reason_not_in?: String[] | String
  reason_lt?: String
  reason_lte?: String
  reason_gt?: String
  reason_gte?: String
  reason_contains?: String
  reason_not_contains?: String
  reason_starts_with?: String
  reason_not_starts_with?: String
  reason_ends_with?: String
  reason_not_ends_with?: String
  status?: ApplicationStatus
  status_not?: ApplicationStatus
  status_in?: ApplicationStatus[] | ApplicationStatus
  status_not_in?: ApplicationStatus[] | ApplicationStatus
  hobbies?: String
  hobbies_not?: String
  hobbies_in?: String[] | String
  hobbies_not_in?: String[] | String
  hobbies_lt?: String
  hobbies_lte?: String
  hobbies_gt?: String
  hobbies_gte?: String
  hobbies_contains?: String
  hobbies_not_contains?: String
  hobbies_starts_with?: String
  hobbies_not_starts_with?: String
  hobbies_ends_with?: String
  hobbies_not_ends_with?: String
  phones_every?: PhoneNumberWhereInput
  phones_some?: PhoneNumberWhereInput
  phones_none?: PhoneNumberWhereInput
}

export interface PhoneNumberUpdateManyInput {
  create?: PhoneNumberCreateInput[] | PhoneNumberCreateInput
  connect?: PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput
  disconnect?: PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput
  delete?: PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput
  update?: PhoneNumberUpdateWithWhereUniqueNestedInput[] | PhoneNumberUpdateWithWhereUniqueNestedInput
  upsert?: PhoneNumberUpsertWithWhereUniqueNestedInput[] | PhoneNumberUpsertWithWhereUniqueNestedInput
}

export interface ApplicationSubscriptionWhereInput {
  AND?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput
  OR?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput
  NOT?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ApplicationWhereInput
}

export interface ApplicationUpdateinterestedInstrumentsInput {
  set?: String[] | String
}

export interface PhoneNumberUpsertWithWhereUniqueNestedInput {
  where: PhoneNumberWhereUniqueInput
  update: PhoneNumberUpdateDataInput
  create: PhoneNumberCreateInput
}

export interface ApplicationUpdateministryAreasInput {
  set?: MinistryArea[] | MinistryArea
}

export interface ApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface ApplicationUpdateInput {
  band?: Band
  applicationDate?: DateTime
  firstName?: String
  surName?: String
  otherNames?: String
  country?: String
  nationality?: String
  address?: String
  dateOfBirth?: DateTime
  photoURL?: String
  email?: String
  sex?: Sex
  parent_guardian?: String
  occupation?: String
  employer_school?: String
  grade?: String
  accessedInstrument?: String
  bandExperience?: String
  pathfinder_adventurerClass?: String
  club?: String
  church?: String
  churchPosition?: String
  reason?: String
  status?: ApplicationStatus
  hobbies?: String
  ministryAreas?: ApplicationUpdateministryAreasInput
  interestedInstruments?: ApplicationUpdateinterestedInstrumentsInput
  phones?: PhoneNumberUpdateManyInput
}

export interface PhoneNumberUpdateDataInput {
  label?: String
  number?: String
}

export interface ApplicationCreateministryAreasInput {
  set?: MinistryArea[] | MinistryArea
}

export interface ApplicationCreateInput {
  band: Band
  applicationDate: DateTime
  firstName: String
  surName: String
  otherNames?: String
  country?: String
  nationality?: String
  address?: String
  dateOfBirth: DateTime
  photoURL?: String
  email?: String
  sex: Sex
  parent_guardian?: String
  occupation?: String
  employer_school?: String
  grade?: String
  accessedInstrument?: String
  bandExperience?: String
  pathfinder_adventurerClass?: String
  club?: String
  church?: String
  churchPosition?: String
  reason?: String
  status?: ApplicationStatus
  hobbies?: String
  ministryAreas?: ApplicationCreateministryAreasInput
  interestedInstruments?: ApplicationCreateinterestedInstrumentsInput
  phones?: PhoneNumberCreateManyInput
}

export interface PhoneNumberCreateManyInput {
  create?: PhoneNumberCreateInput[] | PhoneNumberCreateInput
  connect?: PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput
}

export interface PhoneNumberCreateInput {
  label: String
  number: String
}

export interface PhoneNumberUpdateInput {
  label?: String
  number?: String
}

export interface PhoneNumberWhereUniqueInput {
  id?: ID_Input
}

export interface PhoneNumberSubscriptionWhereInput {
  AND?: PhoneNumberSubscriptionWhereInput[] | PhoneNumberSubscriptionWhereInput
  OR?: PhoneNumberSubscriptionWhereInput[] | PhoneNumberSubscriptionWhereInput
  NOT?: PhoneNumberSubscriptionWhereInput[] | PhoneNumberSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PhoneNumberWhereInput
}

export interface PhoneNumberWhereInput {
  AND?: PhoneNumberWhereInput[] | PhoneNumberWhereInput
  OR?: PhoneNumberWhereInput[] | PhoneNumberWhereInput
  NOT?: PhoneNumberWhereInput[] | PhoneNumberWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  label?: String
  label_not?: String
  label_in?: String[] | String
  label_not_in?: String[] | String
  label_lt?: String
  label_lte?: String
  label_gt?: String
  label_gte?: String
  label_contains?: String
  label_not_contains?: String
  label_starts_with?: String
  label_not_starts_with?: String
  label_ends_with?: String
  label_not_ends_with?: String
  number?: String
  number_not?: String
  number_in?: String[] | String
  number_not_in?: String[] | String
  number_lt?: String
  number_lte?: String
  number_gt?: String
  number_gte?: String
  number_contains?: String
  number_not_contains?: String
  number_starts_with?: String
  number_not_starts_with?: String
  number_ends_with?: String
  number_not_ends_with?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface PhoneNumberEdge {
  node: PhoneNumber
  cursor: String
}

export interface Application extends Node {
  id: ID_Output
  band: Band
  applicationDate: DateTime
  firstName: String
  surName: String
  otherNames?: String
  country?: String
  nationality?: String
  address?: String
  dateOfBirth: DateTime
  phones?: PhoneNumber[]
  photoURL?: String
  email?: String
  sex: Sex
  parent_guardian?: String
  occupation?: String
  employer_school?: String
  grade?: String
  accessedInstrument?: String
  bandExperience?: String
  pathfinder_adventurerClass?: String
  club?: String
  church?: String
  churchPosition?: String
  ministryAreas: MinistryArea[]
  interestedInstruments: String[]
  reason?: String
  status: ApplicationStatus
  hobbies?: String
}

export interface PhoneNumberPreviousValues {
  id: ID_Output
  label: String
  number: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregatePhoneNumber {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface PhoneNumberConnection {
  pageInfo: PageInfo
  edges: PhoneNumberEdge[]
  aggregate: AggregatePhoneNumber
}

/*
 * An edge in a connection.

 */
export interface ApplicationEdge {
  node: Application
  cursor: String
}

export interface ApplicationSubscriptionPayload {
  mutation: MutationType
  node?: Application
  updatedFields?: String[]
  previousValues?: ApplicationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ApplicationConnection {
  pageInfo: PageInfo
  edges: ApplicationEdge[]
  aggregate: AggregateApplication
}

export interface ApplicationPreviousValues {
  id: ID_Output
  band: Band
  applicationDate: DateTime
  firstName: String
  surName: String
  otherNames?: String
  country?: String
  nationality?: String
  address?: String
  dateOfBirth: DateTime
  photoURL?: String
  email?: String
  sex: Sex
  parent_guardian?: String
  occupation?: String
  employer_school?: String
  grade?: String
  accessedInstrument?: String
  bandExperience?: String
  pathfinder_adventurerClass?: String
  club?: String
  church?: String
  churchPosition?: String
  ministryAreas: MinistryArea[]
  interestedInstruments: String[]
  reason?: String
  status: ApplicationStatus
  hobbies?: String
}

export interface AggregateApplication {
  count: Int
}

export interface PhoneNumberSubscriptionPayload {
  mutation: MutationType
  node?: PhoneNumber
  updatedFields?: String[]
  previousValues?: PhoneNumberPreviousValues
}

export interface PhoneNumber extends Node {
  id: ID_Output
  label: String
  number: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string