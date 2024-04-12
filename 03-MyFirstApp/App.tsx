import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
// import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
// import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
// import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
// import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
// import {PositonScreen} from './src/presentation/screens/PositonScreen';
// import {FlexScreen} from './src/presentation/screens/FlexScreen';
import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Christian Osorio" /> */}
        {/* <CounterM3Screen /> */}
        {/* <CounterScreen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositonScreen /> */}
        {/* <FlexScreen /> */}
        <FlexDirectionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
