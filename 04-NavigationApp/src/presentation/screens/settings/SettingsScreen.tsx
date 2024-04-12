import {Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {PrimaryBotton} from '../../components/shared/PrimaryBotton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>

      <PrimaryBotton label="Regresar" onPress={() => navigation.goBack()} />
      <PrimaryBotton
        label="Regresar al home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
