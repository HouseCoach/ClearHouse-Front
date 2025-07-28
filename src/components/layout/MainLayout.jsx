import { StyleSheet, View } from 'react-native';
import BottomBar from './BottomBar';

export default function MainLayout({ children }) {
  return (
    <View style={styles.LayoutContainer}>
      <View style={styles.LayoutMainContainer}>{children}</View>
      <View style={styles.bottomBarStyle}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LayoutContainer: {
    flex: 1,
  },
  LayoutMainContainer: {
    flex: 0.88,
  },
  bottomBarStyle: {
    flex: 0.12,
  },
});
