import {Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>

      <PrimaryButton label="Regresar" onPress={() => navigation.goBack()} />
      <PrimaryButton
        label="Regresar al home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
