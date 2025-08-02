import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import MainLayout from '../components/layout/MainLayout';
import { POPULAR_HOUSE } from '../mocks/House';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HOME_GRID = [
  {
    title: '원/투룸',
    icon: require('../../assets/home/home-icon1.png'),
  },
  {
    title: '오피스텔',
    icon: require('../../assets/home/home-icon2.png'),
  },
  {
    title: '아파트',
    icon: require('../../assets/home/home-icon3.png'),
  },
  {
    title: '주택/빌라',
    icon: require('../../assets/home/home-icon4.png'),
  },
];

const MATCHING_HOUSE = [
  {
    title: '여성 안심',
    icon: require('../../assets/home/women-icon.png'),
  },
  {
    title: '노인 중심',
    icon: require('../../assets/home/grand-icon.png'),
  },
  {
    title: '휠체어 이용',
    icon: require('../../assets/home/bathchair-icon.png'),
  },
];

export default function HomePage({ navigation }) {
  const [liked, setLiked] = useState([]);

  const pushHeart = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <MainLayout>
      <View style={styles.homeContainer}>
        <View style={styles.homeNavBar}>
          <View style={styles.homeLogoWrpper}>
            <Image
              source={require('../../assets/house-coach-logo.png')}
              style={styles.logoStyle}
              resizeMode="contain"
            />
            <Text style={styles.logoTitleStyle}>투명한 집터</Text>
          </View>
        </View>
        <View style={styles.homeGridContainer}>
          {HOME_GRID.map((item, idx) => (
            <View style={styles.homeGridDetailStyle} key={idx}>
              <Text style={styles.homeGridTitleStyle}>{item.title}</Text>
              <Image
                source={item.icon}
                resizeMode="contain"
                style={styles.homeGridIconStyle}
              />
            </View>
          ))}
          <Pressable style={[styles.seeAnotherBtnWrapper, styles.shadowBox]}>
            <Text style={styles.btnTitleStyle}>다른 조건으로 검색하기</Text>
            <Image
              source={require('../../assets/home/search-icon.png')}
              resizeMode="contain"
              style={styles.searchIcon}
            />
          </Pressable>
        </View>
        <View style={styles.popularHouseWrapper}>
          <View style={styles.popularHouseTitleWrapper}>
            <Text style={styles.popularHouseTitle}>검증 매물 추천</Text>
            <Pressable style={styles.seeMoreBtnWraper}>
              <Text style={styles.seeMoreBtn}>더보기 {'>'}</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.houseWrapper}
          >
            {POPULAR_HOUSE.map((item) => {
              const isLiked = liked.includes(item.id);
              return (
                <Shadow
                  key={item.id}
                  distance={9}
                  startColor={'#61616110'}
                  finalColor={'#00000000'}
                  offset={[4, 4]}
                  radius={12}
                  style={[
                    styles.cardShadow,
                    {
                      width: SCREEN_WIDTH * 0.38,
                    },
                  ]}
                >
                  <View style={styles.cardContainer}>
                    <Image source={item.picture} style={styles.housePicture} />
                    <Pressable
                      onPress={() => pushHeart(item.id)}
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                      style={styles.circleStyle}
                    >
                      <Image
                        source={
                          isLiked
                            ? require('../../assets/home/full-heart-icon.png')
                            : require('../../assets/home/empty-heart-icon.png')
                        }
                        style={styles.hearIcon}
                        resizeMode="contain"
                      />
                    </Pressable>
                    <View style={styles.titleAndDescription}>
                      <Text style={styles.houseTitle}>{item.title}</Text>
                      <Text style={styles.houseDescription}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </Shadow>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.matchingHouseWrapper}>
          <View style={styles.popularHouseTitleWrapper}>
            <Text style={styles.popularHouseTitle}>맞춤 매물 보기</Text>
            <Pressable style={styles.seeMoreBtnWraper}>
              <Text style={styles.seeMoreBtn}>더보기 {'>'}</Text>
            </Pressable>
          </View>
          <View style={styles.containerWrapper}>
            {MATCHING_HOUSE.map((item) => (
              <View style={styles.matchingHouseContainer} key={item.title}>
                <Text style={styles.matchingHouseTitleContainer}>
                  {item.title}
                </Text>
                <Image
                  source={item.icon}
                  style={styles.matchingHouseiconStyle}
                  resizeMode="contain"
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </MainLayout>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#FAFAFF',
    paddingTop: 38,
  },
  homeNavBar: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  homeLogoWrpper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  logoStyle: {
    width: 50,
    height: 50,
  },
  logoTitleStyle: {
    color: '#1229A4',
    fontSize: 23,
    fontWeight: 'bold',
  },
  profileIconStyle: {
    width: 25,
    height: 25,
  },
  homeGridContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    paddingHorizontal: 24,
  },
  homeGridDetailStyle: {
    backgroundColor: 'white',
    width: '48%',
    height: '35%',
    borderRadius: 5,
    padding: 13,
    elevation: 2,
  },
  homeGridTitleStyle: {
    fontSize: 17,
    color: '#1229A4',
    fontWeight: '600',
  },
  homeGridIconStyle: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 50,
    height: 50,
  },
  seeAnotherBtnWrapper: {
    backgroundColor: 'white',
    width: '100%',
    height: '17%',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  shadowBox: Platform.select({
    ios: {
      shadowColor: '#cfcfcf',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    android: {
      elevation: 2,
    },
  }),
  btnTitleStyle: {
    fontSize: 17,
    color: '#1229A4',
    fontWeight: '600',
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  popularHouseWrapper: {
    flex: 4,
    paddingLeft: 24,
    paddingTop: 15,
  },
  matchingHouseWrapper: {
    flex: 1,
    paddingLeft: 24,
    gap: 10,
  },
  popularHouseTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  popularHouseTitle: {
    fontSize: 21,
    color: '#1229A4',
    fontWeight: 'bold',
  },
  seeMoreBtnWraper: {
    width: '15%',
    alignItems: 'flex-end',
    paddingRight: 13,
  },
  seeMoreBtn: {
    fontSize: 12,
    color: '#767676',
  },
  houseWrapper: {
    flexGrow: 1,
    height: '80%',
    marginTop: '12',
    gap: 12,
  },
  cardShadow: {
    borderRadius: 12,
    backgroundColor: 'white',
  },
  cardContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },

  housePicture: {
    width: '100%',
    height: '55%',
  },
  circleStyle: {
    position: 'absolute',
    right: 7,
    bottom: 100,
    width: 33,
    height: 33,
    borderRadius: '50%',
    backgroundColor: '#ffffffc8',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  titleAndDescription: {
    height: '45%',
    backgroundColor: 'white',
    padding: 12,
    gap: 7,
  },
  hearIcon: {
    width: 18,
    height: 18,
  },
  houseTitle: {
    fontSize: 16,
    fontWeight: 'regular',
  },
  houseDescription: {
    fontSize: 13,
    color: '#767676',
  },
  containerWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  matchingHouseContainer: {
    width: '30%',
    height: 35,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  matchingHouseTitleContainer: {
    fontSize: 15,
    color: '#1229A4',
  },
  matchingHouseiconStyle: {
    width: 17,
    aspectRatio: 1,
    height: 17,
  },
});
