import React from 'react';
import './App.css';
import MainForm from './components/Forms/FormTemplates/MainForm/MainForm';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/graphql.config';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MainForm></MainForm>
      </div>
    </ApolloProvider>
  );
};

export default App;
