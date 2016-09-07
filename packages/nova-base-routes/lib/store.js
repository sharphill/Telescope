import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ApolloClient from 'apollo-client';

import Telescope from 'meteor/nova:lib';

const client = new ApolloClient();

const rootReducer = combineReducers({...Telescope.reducers, apollo: client.reducer()}); 

const store = createStore(
  // reducers
  rootReducer,
  // middlewares
  compose(
    applyMiddleware(client.middleware()),
    typeof window !== "undefined" && window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

export { store, client };