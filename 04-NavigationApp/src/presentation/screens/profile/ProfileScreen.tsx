import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryBotton} from '../../components/shared/PrimaryBotton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, paddingHorizontal: 20, marginTop: top + 20}}>
      <Text>ProfileScreen</Text>

      <PrimaryBotton
        label="Abrir menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
