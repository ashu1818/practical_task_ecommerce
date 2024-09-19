import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import PrimaryNavigator from './src/navigation/primaryNavigator';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <PrimaryNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
