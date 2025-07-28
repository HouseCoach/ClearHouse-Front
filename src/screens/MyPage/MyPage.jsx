import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import TopBottomLayout from '../../components/layout/TopBottomLayout';
import { useNavigation } from '@react-navigation/native';

const MY_PAGE_MAIN_FEATURE = [
  {
    icon: require('../../../assets/MyPage/heart-icon.png'),
    title: '찜한 방',
  },
  {
    icon: require('../../../assets/MyPage/inquiry-icon.png'),
    title: '문의한 방',
  },
  {
    icon: require('../../../assets/MyPage/review-icon.png'),
    title: '내가 쓴 리뷰',
  },
];

const MY_PAGE_SUB_FEATURE = [
  {
    title: '알림 설정',
    link: '',
  },
  {
    title: '중개인 가입 신청하기',
    link: '',
  },
  {
    title: '허위 매물 신고',
    link: '',
  },
];
export default function MyPage() {
  const navigation = useNavigation();
  return (
    <TopBottomLayout
      style={styles.myPageWrapper}
      barTitle="마이페이지"
      imgSource={require('../../../assets/MyPage/alarm-icon.png')}
    >
      <View style={styles.profileWrapper}>
        <Pressable
          style={styles.profileDetailWrapper}
          onPress={() => navigation.navigate('MyInfo')}
        >
          <Image
            source={require('../../../assets/MyPage/profile-icon.png')}
            resizeMode="contain"
            style={styles.profileIconStyle}
          />
          <Text style={styles.profileNameStyle}>현사은</Text>
        </Pressable>
      </View>
      <View style={styles.mainFeatureWrapper}>
        {MY_PAGE_MAIN_FEATURE.map((item) => (
          <View style={styles.mainFeatureIconWrapper} key={item.title}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={styles.featureIconStyle}
            />
            <Text style={styles.featureIconTitleStyle}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.subFeatureWrapper}>
        {MY_PAGE_SUB_FEATURE.map((item) => (
          <Pressable key={item.title} style={styles.subFeatureDetailWrapper}>
            <Text style={styles.subFeatureDeatailTitle}>{item.title}</Text>
            <Image
              source={require('../../../assets/MyPage/go-icon.png')}
              style={styles.goIconStyle}
              resizeMode="contain"
            />
          </Pressable>
        ))}
      </View>
    </TopBottomLayout>
  );
}

const styles = StyleSheet.create({
  myPageWrapper: {
    flex: 1,
  },
  profileWrapper: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileDetailWrapper: {
    width: '20%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '15%',
  },
  profileIconStyle: {
    width: '80%',
    height: '80%',
  },
  profileNameStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  mainFeatureWrapper: {
    flex: 3.5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '25%',
    gap: '10%',
    borderTopColor: '#E5E5E5',
    borderBottomColor: '#E5E5E5',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  mainFeatureIconWrapper: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5%',
  },
  featureIconStyle: {
    width: '40%',
    height: '40%',
  },
  featureIconTitleStyle: {
    fontSize: 10,
    fontWeight: '600',
  },
  subFeatureWrapper: {
    flex: 8,
    paddingHorizontal: '10%',
    paddingVertical: '10%',
    gap: 12,
  },
  subFeatureDetailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subFeatureDeatailTitle: {
    fontSize: 14,
  },
  goIconStyle: {
    height: '100%',
    width: '5%',
  },
});
