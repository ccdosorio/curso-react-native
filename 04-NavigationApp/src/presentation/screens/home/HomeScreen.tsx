import {View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {useNavigation} from '@react-navigation/native';
import {PrimaryBotton} from '../../components/shared/PrimaryBotton';

export const HomeScreen = () => {
  const navigation = useNavigation();

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
