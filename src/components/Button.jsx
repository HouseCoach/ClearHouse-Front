import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function Button() {
  return (
    <View style={styles.btnContainerStyle}>
      <Pressable
        onPress={() => console.log('btn pressed')}
        style={styles.btnStyle}
      >
        <Text style={styles.btnTextStyle}>시작하기</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    alignItems: 'center',
  },
  btnStyle: {
    width: '80%',
    height: 60,
    backgroundColor: 'rgba(18,41,164,1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 18,
    lineHeight: 26,
  },
});
