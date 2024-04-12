import {StyleSheet, View} from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}></View>
      <View style={[styles.box, styles.orangeBox]}></View>
      <View style={[styles.box, styles.blueBox]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    // TODO tarea
    // justifyContent: 'center', // HW2
    // justifyContent: 'center', //HW3
    // justifyContent: 'space-between', //HW4
    // alignItems: 'center', //HW4
    // justifyContent: 'space-between', //HW5
    // flexDirection: 'row', //HW5
    // justifyContent: 'space-between', //HW6
    // justifyContent: 'center', //HW7
    // alignItems: 'center', //HW7
    // justifyContent: 'center', //HW8
    // alignItems: 'center', //HW8
    // justifyContent: 'center', //HW9
    // alignItems: 'center', //HW9

    justifyContent: 'center', //HW10
    alignItems: 'center', //HW10
    flexDirection: 'row',
  },
  box: {
    width: 100, //HW66 comment
    height: 100, //HW6comment
    borderWidth: 10,
    borderColor: 'white',
    // TODO tarea
    // height: '100%', // HW5
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // TODO tarea
    // flex: 2, //HW6
    // alignSelf: 'flex-end', //HW3
    // alignSelf: 'flex-end', //HW4
    // top: 100, //HW9
  },
  orangeBox: {
    backgroundColor: '#F0A23D',
    // TODO tarea
    // flex: 2, //HW6
    // flex: 1, HW1
    // right: -100, // HW8
    // right: -100, // HW9
    top: 50, // HW10
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    // TODO tarea
    // flex: 4, //HW6
    // width: '100%', //HW2
    // alignSelf: 'center', //HW3
    // alignSelf: 'flex-start', //HW4
  },
});
