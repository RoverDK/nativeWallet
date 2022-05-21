import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';

import { store } from './src/store';
import { Provider } from 'react-redux';

import { Main } from './src/components/Main';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    height: '100%'
  }
});

export default App;
