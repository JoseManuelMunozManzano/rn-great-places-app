import React from 'react';
import { Provider } from 'react-redux';

import PlacesNavigator from './navigation/PlacesNavigator';
import { store } from './store/places-store';

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
