import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
// import {BottomTabsNavigator} from './presentation/routes/BottomTabsNavigator';
// import {StackNavigator} from './presentation/routes/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};
