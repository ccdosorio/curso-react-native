import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {PrimaryBotton} from '../../components/shared/PrimaryBotton';
import {useEffect} from 'react';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryBotton
        label="Products"
        onPress={() => navigation.navigate('Products' as never)}
      />
      <PrimaryBotton
        label="Settings"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
