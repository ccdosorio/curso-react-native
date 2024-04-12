import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './presentation/routes/BottomTabsNavigator';
import {SideMenuNavigation} from './presentation/routes/SideMenuNavigation';
// import {StackNavigator} from './presentation/routes/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigation />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};
