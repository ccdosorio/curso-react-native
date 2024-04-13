import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {BottomTabNavigator} from './presentation/navigators/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator></BottomTabNavigator>
    </NavigationContainer>
  );
};
