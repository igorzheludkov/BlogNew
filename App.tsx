import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './app/store/store';
import Entrypoint from './app/Entrypoint';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Entrypoint />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
