 import React , { Component} from 'react';
 import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ListView from './ListView';

const ROWS_IN_DATA_SOURCE = 30;
const data = [];
for (let i=0; i<ROWS_IN_DATA_SOURCE; i++) data.push(`This is ios row # ${i+1}`);

const App = ()=> {

    return (
      <View>
        <Text>RN Text</Text>
        <ListView
          data = {data}
        />
      </View>
    );
  }

export default App;