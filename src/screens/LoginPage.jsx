import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

const SOCIAL_LOGIN_BTN = [
  {
    icon: require('../../assets/Login/google-logo.png'),
    title: '구글로 로그인하기',
  },
  {
    icon: require('../../assets/Login/kakao-logo.png'),
    title: '카카오로 로그인하기',
  },
  {
    icon: require('../../assets/Login/naver-logo.png'),
    title: '네이버로 로그인하기',
  },
];
export default function Login({ navigation }) {
  return (
    <View style={styles.loginContainer}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.backBtnStyle}
      >
        <Image
          source={require('../../assets/Login/back-icon.png')}
          resizeMode="contain"
          style={styles.backBtnIcon}
        />
      </Pressable>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/house-coach-logo.png')}
          style={styles.houseCoachLogo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.loginButtonContainer}>
        {SOCIAL_LOGIN_BTN.map((item, idx) => (
          <View key={idx} style={styles.loginButtonWrapper}>
            <Pressable
              style={styles.loginButtonStyle}
              onPress={() => console.log('click')}
            >
              <Image
                source={item.icon}
                resizeMode="contain"
                style={styles.socialBtnLogo}
              />
              <Text style={styles.socialBtnTitle}>{item.title}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'rgba(250,250,255,1)',
    paddingHorizontal: 24,
    paddingVertical: 55,
  },
  backBtnStyle: {
    flex: 0.5,
    width: '10%',
  },
  backBtnIcon: {
    width: '80%',
    height: '100%',
  },
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  houseCoachLogo: {
    marginTop: '5%',
    width: '45%',
    height: undefined,
    aspectRatio: 1 / 1,
  },
  loginButtonContainer: {
    flex: 5,
    gap: 5,
    alignItems: 'center',
  },
  loginButtonWrapper: {
    width: '100%',
    height: '16%',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(18,41,164,1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: 'rgba(250,250,255,1)',
    elevation: 2,
  },
  loginButtonStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 82,
    gap: 15,
  },
  socialBtnLogo: {
    width: 24,
    height: 24,
  },
  socialBtnTitle: {
    fontSize: 16,
    lineHeight: 24,
  },
});
