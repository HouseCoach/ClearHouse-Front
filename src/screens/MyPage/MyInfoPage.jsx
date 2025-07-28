import {
  StyleSheet,
  Pressable,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import TopLayout from '../../components/layout/TopLayout';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function MyInfoPage() {
  const [nickNameInput, setnickNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [focusInput, setFocusInput] = useState('');
  const navigation = useNavigation();

  return (
    <TopLayout barTitle="나의 정보 설정">
      <View style={styles.profileIconStyle}>
        <Image
          source={require('../../../assets/MyPage/my-info-icon.png')}
          style={styles.prifileIcon}
          resizeMode="contain"
        />
      </View>
      <View style={styles.socialAccountWrapper}>
        <Text style={styles.socialAccountTitle}>연결된 소셜 계정</Text>
        <Image
          source={require('../../../assets/Login/kakao-logo.png')}
          resizeMode="contain"
          style={styles.kakaoIconStyle}
        />
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput
          value="현사은"
          style={styles.myInfoInputStyle}
          editable={false}
        />
        <TextInput
          value={nickNameInput}
          onChangeText={setnickNameInput}
          style={[
            styles.myInfoInputStyle,
            focusInput === 'nickName' && styles.focusInputStyle,
          ]}
          placeholder="닉네임을 입력해주세요"
          placeholderTextColor="#777C89"
          keyboardType="default"
          onFocus={() => setFocusInput('nickName')}
          onBlur={() => setFocusInput('')}
        />
        <TextInput
          value={emailInput}
          onChangeText={setEmailInput}
          style={[
            styles.myInfoInputStyle,
            focusInput === 'email' && styles.focusInputStyle,
          ]}
          placeholder="이메일을 입력해주세요"
          placeholderTextColor="#777C89"
          keyboardType="email-address"
          autoCapitalize="none"
          onFocus={() => setFocusInput('email')}
          onBlur={() => setFocusInput('')}
        />
        <TextInput
          value={phoneNumberInput}
          onChangeText={setPhoneNumberInput}
          style={[
            styles.myInfoInputStyle,
            focusInput === 'phoneNumber' && styles.focusInputStyle,
          ]}
          placeholder="전화번호를 입력해주세요"
          placeholderTextColor="#777C89"
          keyboardType="numeric"
          returnKeyType="done"
          onFocus={() => setFocusInput('phoneNumber')}
          onBlur={() => setFocusInput('')}
        />
      </View>
      <View style={styles.myInfoBtnStyle}>
        <Pressable style={styles.logoutBtn}>
          <Text style={styles.logoutBtnText}>로그아웃</Text>
        </Pressable>
        <Pressable
          style={styles.completeBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.completeBtnText}>입력완료</Text>
        </Pressable>
      </View>
    </TopLayout>
  );
}

const styles = StyleSheet.create({
  profileIconStyle: {
    flex: 2.8,
    alignItems: 'center',
    paddingTop: '10%',
  },
  prifileIcon: {
    width: '30%',
    height: '100%',
  },
  socialAccountWrapper: {
    flex: 1.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '15%',
  },
  socialAccountTitle: {
    fontSize: 14,
  },
  kakaoIconStyle: {
    width: 22,
    height: 22,
  },
  textInputWrapper: {
    flex: 7,
    paddingHorizontal: '7%',
    gap: '5%',
    justifyContent: 'center',
  },
  myInfoInputStyle: {
    width: '100%',
    height: '17%',
    color: '#1A1A1A',
    fontSize: 14,
    backgroundColor: '#EAECFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  myInfoBtnStyle: {
    flex: 2,
    flexDirection: 'row',
    paddingHorizontal: '7%',
    gap: '5%',
    paddingTop: '4%',
  },
  logoutBtn: {
    flex: 1,
    backgroundColor: '#EAECFF',
    height: '62%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutBtnText: {
    color: '#4d4d4d',
    fontSize: 18,
  },
  focusInputStyle: {
    borderWidth: 1,
    borderColor: '#1229A4',
  },
  completeBtn: {
    flex: 1,
    backgroundColor: '#1229A4',
    height: '62%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeBtnText: {
    color: 'white',
    fontSize: 18,
  },
});
