import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const SettingsScreen = () => {
  const counter = useCounterStore(state => state.counter);
  const incrementBy = useCounterStore(state => state.incrementBy);

  const navigaton = useNavigation();

  useEffect(() => {
    navigaton.setOptions({
      title: `Contador: ${counter}`,
    });
  }, [counter]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Count: {counter}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(+1)}>
        <Text>+1</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
