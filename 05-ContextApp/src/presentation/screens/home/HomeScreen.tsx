import {Text, View} from 'react-native';
import {globalStyles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';
import {useCounterStore} from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const counter = useCounterStore(state => state.counter);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>
      <Text style={globalStyles.title}>Count: {counter}</Text>
    </View>
  );
};
