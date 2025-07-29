import { StyleSheet, View, Image, Pressable, Dimensions } from 'react-native';
import { useNavigation, useRoute, TabActions } from '@react-navigation/native';

const BAR_ICON = [
  {
    icon: require('../../../assets/Bar/home-icon.png'),
    selectedIcon: require('../../../assets/Bar/selected-home-icon.png'),
    link: ['Home'],
  },
  {
    icon: require('../../../assets/Bar/map-icon.png'),
    selectedIcon: require('../../../assets/Bar/map-icon.png'),
    link: ['Map'],
  },
  {
    icon: require('../../../assets/Bar/chat-icon.png'),
    selectedIcon: require('../../../assets/Bar/chat-icon.png'),
    link: ['Chat'],
  },
  {
    icon: require('../../../assets/home/profile.png'),
    selectedIcon: require('../../../assets/Bar/selected-person-icon.png'),
    link: ['MyPageTab', 'FavoriteHouseList'],
  },
];

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function BottomBar() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.bottomBarContainer}>
      {BAR_ICON.map((item, idx) => {
        const isActive = item.link.includes(route.name);
        return (
          <Pressable
            style={styles.iconWrapperStyle}
            key={idx}
            onPress={() => {
              navigation.navigate(item.link[0]);
            }}
          >
            <Image
              source={isActive ? item.selectedIcon : item.icon}
              style={styles.iconStyle}
            />
          </Pressable>
        );
      })}
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
    width: 25,
    height: 25,
    marginTop: 23,
  },
});
