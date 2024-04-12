import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigation';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

const Drawer = createDrawerNavigator();

export const SideMenuNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
