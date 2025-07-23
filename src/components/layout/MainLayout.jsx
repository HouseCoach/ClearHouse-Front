import { StyleSheet, View, Dimensions } from 'react-native';
import BottomBar from './BottomBar';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function MainLayout({ children }) {
  return (
    <View style={styles.LayoutContainer}>
      <View style={styles.LayoutMainContainer}>{children}</View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  LayoutContainer: {
    flex: 1,
  },
  LayoutMainContainer: {
    flex: SCREEN_HEIGHT * 0.88,
  },
});
