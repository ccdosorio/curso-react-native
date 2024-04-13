import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {IonIcon} from './IonIcon';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
          <IonIcon name="menu-outline" />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
