import React from 'react';

import { Provider } from 'react-redux';
import {  ApolloProvider } from '@apollo/client';
import  { Store }  from './src/config';
import { AppNavigationContainer } from "./src/navigation"
import { AppApolloProvider } from './src/services';



const App = () => {
  return (
    <Provider store={Store}>
      <ApolloProvider client={AppApolloProvider.client}>
          <AppNavigationContainer/>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
