import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';

export default class AppApolloProvider  {
    static client = new ApolloClient({
        uri: 'localhost:4000/graphql',
        cache: new InMemoryCache()
      });
};
