import { StyleSheet, View } from 'react-native';
import TopBar from './TopBar';

export default function TopLayout({ children, barTitle }) {
  return (
    <View style={styles.LayoutContainer}>
      <View style={styles.topBarStyle}>
        <TopBar>{barTitle}</TopBar>
      </View>
      <View style={styles.LayoutMainContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  LayoutContainer: {
    flex: 1,
  },
  topBarStyle: {
    flex: 0.12,
  },
  LayoutMainContainer: {
    flex: 0.88,
    backgroundColor: '#fafaff',
  },
});
