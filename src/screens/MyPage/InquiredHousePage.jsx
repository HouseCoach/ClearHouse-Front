import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { POPULAR_HOUSE } from '../../mocks/House';

import TopBottomLayout from '../../components/layout/TopBottomLayout';
export default function InquiredHousePage() {
  return (
    <TopBottomLayout barTitle="문의한 방">
      <ScrollView
        contentContainerStyle={styles.favoriteHouseListContainer}
        scrollIndicatorInsets={false}
      >
        {POPULAR_HOUSE.map((item) => (
          <View key={item.id} style={styles.favoriteHouseListWrapper}>
            <View style={styles.favoriteHouseWrapper}>
              <Image
                source={require('../../../assets/MyPage/temp-house-picture.png')}
                style={styles.housePicture}
                resizeMode="contain"
              />
            </View>
            <View style={styles.descriptionWrapper}>
              <View style={styles.houseFilterWrapper}>
                <Text style={styles.houseFilter}>{item.filter}</Text>
                <Image
                  source={require('../../../assets/home/women-icon.png')}
                  style={styles.womenIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.houseTitle}>{item.title}</Text>
              <Text style={styles.houseDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </TopBottomLayout>
  );
}

const styles = StyleSheet.create({
  favoriteHouseListContainer: {
    marginTop: '5%',
  },
  favoriteHouseListWrapper: {
    height: 130,
    flexDirection: 'row',
    paddingHorizontal: '7%',
    borderBottomWidth: 1,
    borderBottomColor: '#DDE3E9',
    alignItems: 'center',
    gap: '5%',
  },
  favoriteHouseWrapper: {
    width: '45%',
    height: '90%',
    borderRadius: 5,
  },
  housePicture: {
    width: '100%',
    height: '100%',
  },

  descriptionWrapper: {
    flex: 1,
    height: '80%',
  },
  houseFilterWrapper: {
    marginBottom: 11,
    flexDirection: 'row',
    gap: '1%',
  },
  houseFilter: {
    color: '#1229A4',
    fontSize: 12,
    fontWeight: '600',
  },
  womenIcon: {
    width: 8,
    height: 13,
  },
  houseTitle: {
    fontSize: 16,
    fontWeight: 'regular',
    marginBottom: 6,
  },
  houseDescription: {
    fontSize: 13,
    color: '#767676',
  },
});
