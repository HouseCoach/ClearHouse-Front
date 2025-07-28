import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Pressable,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function TopBar({ children, imgSource }) {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomBarContainer}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.backIconWrapper}
      >
        <Image
          source={require('../../../assets/Login/back-icon.png')}
          style={styles.backIconStyle}
          resizeMode="contain"
        />
      </Pressable>
      <Text style={styles.titleStyle}>{children}</Text>
      <Pressable style={styles.imgWrapper}>
        <Image
          source={imgSource}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.12,
    paddingTop: '10%',
    paddingHorizontal: '6%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fafaff',
    width: '100%',
  },
  backIconWrapper: {
    flex: 1,
    width: '10%',
  },
  backIconStyle: {
    width: '50%',
    height: '100%',
  },
  titleStyle: {
    flex: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgWrapper: {
    flex: 1,
    width: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  imgStyle: {
    width: '38%',
    height: '100%',
  },
});
