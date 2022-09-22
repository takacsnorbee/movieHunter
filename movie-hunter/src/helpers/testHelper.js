/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockedState } from './mockedStates';
import { render } from '@testing-library/react';
import React from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
  cache: new InMemoryCache(),
});

const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

export const renderWithState = (ui) => {
  const Wrapper = ({ children }) => (
    <ApolloProvider client={client}>
      <Provider store={mockedStore}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
  return render(ui, { wrapper: Wrapper });
};
