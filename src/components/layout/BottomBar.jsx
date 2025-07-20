import { StyleSheet, View, Image, Pressable, Dimensions } from 'react-native';

const BAR_ICON = [
  {
    icon: require('../../../assets/Bar/home-icon.png'),
    link: '',
  },
  {
    icon: require('../../../assets/Bar/map-icon.png'),
    link: '',
  },
  {
    icon: require('../../../assets/Bar/hear-icon.png'),
    link: '',
  },
  {
    icon: require('../../../assets/home/profile.png'),
    link: '',
  },
];

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function BottomBar() {
  return (
    <View style={styles.bottomBarContainer}>
      {BAR_ICON.map((item, idx) => (
        <Pressable
          style={styles.iconWrapperStyle}
          key={idx}
          onPress={() => console.log('press')}
        >
          <Image source={item.icon} style={styles.iconStyle} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.12,
    paddingHorizontal: '6%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fafaff',
  },
  iconWrapperStyle: {
    flex: 1,
    alignItems: 'center',
  },
  iconStyle: {
    width: 24,
    height: 24,
    marginTop: 23,
  },
});
