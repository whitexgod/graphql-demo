import { gql } from "apollo-server";

export const typeDefs = gql`
  enum Nationality {
    INDIA
    CANADA
    AUSTRALIA
    USA
    BRAZIL
  }

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    married: Boolean!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(id: ID!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int = 18
    married: Boolean!
    nationality: Nationality = INDIA
  }

  input UpdateUserInput {
    name: String!
    username: String!
  }

  type Mutation {
    createUser(input: CreateUserInput): User!
    updateUserName(input: UpdateUserInput): User!
  }
`;
