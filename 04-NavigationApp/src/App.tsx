import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigation} from './presentation/routes/SideMenuNavigation';
// import {StackNavigator} from './presentation/routes/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigation />
    </NavigationContainer>
  );
};
