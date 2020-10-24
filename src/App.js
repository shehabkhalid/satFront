import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import SidePane from './components/SidePane'
import client from './context/graphqlClient'
function App()
{
  return (
    <ApolloProvider client={client} >



      <BrowserRouter>

        <Switch>
          <Route exact path="/"> <SidePane/> </Route>
        </Switch>


      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
