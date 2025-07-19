import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import { useState, useRef } from 'react';
import Button from '../components/Button';

const SPLASH_SCREEN_CONTENT = [
  {
    icon: require('../../assets/splash/splashIcon1.png'),
    title: '투명한 주거 정보를 확인해요',
    content: '허위 매물 없이 신속하고 정확한\n 주거 결정 과정을 경험하세요.',
  },
  {
    icon: require('../../assets/splash/splashIcon2.png'),
    title: '오직 나를 위한 정보까지 고려해요',
    content:
      '여성 안심 구역, 노인을 위한 주거지 등\n보호 약자를 위한 정보도 확인할 수 있어요.',
  },
  {
    icon: require('../../assets/splash/splashIcon3.png'),
    title: '중개인 리뷰에 참여해요',
    content: '중개인 리뷰를 확인하고 신뢰감 있는 거래를 선택하세요.\n',
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);

  const onScrollEnd = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / SCREEN_WIDTH);
    setActiveIndex(newIndex);
  };

  return (
    <View style={styles.splashContainerStyle}>
      <View style={styles.splashContainer}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onScrollEnd}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {SPLASH_SCREEN_CONTENT.map((item) => (
            <View key={item.title} style={styles.splashContentContainer}>
              <Image source={item.icon} style={styles.splashImg} />
              <Text style={styles.splashTitle}>{item.title}</Text>
              <Text style={styles.splashContent}>{item.content}</Text>
            </View>
          ))}
        </Animated.ScrollView>
        <View style={styles.pagination}>
          {SPLASH_SCREEN_CONTENT.map((_, i) => {
            const inputRange = [
              (i - 1) * SCREEN_WIDTH,
              i * SCREEN_WIDTH,
              (i + 1) * SCREEN_WIDTH,
            ];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [8, 32, 8],
              extrapolate: 'clamp',
            });
            const dotOpacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            const dotColor = scrollX.interpolate({
              inputRange,
              outputRange: ['#C5CFD6', 'rgba(18,41,164,1)', '#C5CFD6'],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={[
                  styles.dot,
                  {
                    width: dotWidth,
                    opacity: dotOpacity,
                    backgroundColor: dotColor,
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <Button title="시작하기" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  splashContainer: {
    flex: 8,
    marginBottom: 70,
  },
  splashContentContainer: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImg: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6,
  },
  splashTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    marginTop: 25,
  },

  splashContent: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
    textAlign: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonStyle: {
    flex: 1,
  },
});
