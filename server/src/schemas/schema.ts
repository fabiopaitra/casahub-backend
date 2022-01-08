import { buildSchema } from 'graphql';

export default buildSchema(`#graphql
  type TestData {
    text: String!
    views: Int!
  }

  type RootQuery {
    hello: TestData!
  }

  schema {
      query: RootQuery
  }
`);
