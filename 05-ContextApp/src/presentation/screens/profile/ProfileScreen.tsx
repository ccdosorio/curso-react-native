import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Christian Osorio'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() =>
          useProfileStore.setState({email: 'ccdosorio@gmail.com'})
        }>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => changeProfile('John', 'john.doe@gogole.com')}>
        <Text>Regresar a John</Text>
      </Pressable>
    </View>
  );
};
