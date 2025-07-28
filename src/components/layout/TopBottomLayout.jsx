import { StyleSheet, View, Dimensions } from 'react-native';
import BottomBar from './BottomBar';
import TopBar from './TopBar';

export default function TopBottomLayout({ children, barTitle, imgSource }) {
  return (
    <View style={styles.layoutContainer}>
      <View style={styles.topBar}>
        <TopBar imgSource={imgSource}>{barTitle}</TopBar>
      </View>
      <View style={styles.layoutMainContainer}>{children}</View>
      <View style={styles.bottomBar}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  topBar: {
    flex: 0.12,
  },
  bottomBar: {
    flex: 0.12,
  },
  layoutMainContainer: {
    flex: 0.76,
    backgroundColor: '#fafaff',
  },
});
