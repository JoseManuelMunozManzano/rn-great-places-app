import React from 'react';
import { Provider } from 'react-redux';

import PlacesNavigator from './navigation/PlacesNavigator';
import { store } from './store/places-store';
import { init } from './helpers/db';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed');
    console.log(err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
