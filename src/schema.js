import { buildSchema } from 'graphql'

export const schema = buildSchema(`

    type Service {
        _id: ID!
        name: String!
        date: String!
        costMin: Int!
        benefit : Int!
        business: String!
        payments: String!
        thumb: String!
    }

    type Query {
        getAllService: [Service]!
        getService(name: String!): Service
    }

    type Mutation {
        insert(
            name: String!
            date: String!
            costMin: Int!
            benefit: Int!
            business: String!
            payments: String!
            thumb: String!
        ): Service

        update(
            _id: ID!
            name: String!
            date: String!
            costMin: Int!
            benefit: Int!
            business: String!
            payments: String!
            thumb: String!
        ): Service

        delete(_id: ID!): String!
    }
`);

