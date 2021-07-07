/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  AppRegistry,
} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { connect } from 'react-redux';


import { createStore } from "redux";
import { Provider } from 'react-redux';
import { rootReducer } from './src/redux/rootReducer';
import AppLogedIn from './src/Navigation/LogedIn';
import AppMain from './src/Navigation/Main';

const store = createStore(rootReducer);

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App = ({ isLogedIn }) => {
  console.log(store, 'app')
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red', height: '100%' }}>
          {
            store.isLogedIn ? <AppLogedIn/> : <AppMain />
          }
          
        </SafeAreaView>
      </ApolloProvider>
    </Provider>

  );
};

// const mapStateToProps = ({ app: { isLogedIn } }) => ({
//   isLogedIn,
// });

export default App;

