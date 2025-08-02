import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Button from '../../components/Button';

import TransactionTypeFilter from './components/TransactionTypeFilter';
import BargainFilter from './components/BargainFilter';
import CharterFilter from './components/CharterFilter';
import MonthlyRentFilter from './components/MonthlyRentFilter';
import SquareMetersFilter from './components/SquareMetersFilter';
import FloorFilter from './components/FloorFilter';
import RoomFilter from './components/RoomFilter';
import RestroomFilter from './components/RestroomFilter';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function PropertyMapPage() {
  const [selectedType, setSelectedType] = useState('');
  const [transactionSelection, setTransactionSelection] = useState('');
  const [priceSelection, setPriceSelection] = useState([0, 50]);
  const [charterSelection, setCharterSelection] = useState([0, 100000]);
  const [depositionSelection, setDepositionSelection] = useState([0, 30000]);
  const [monthlyRentSelection, setMonthlyRentSelection] = useState([0, 200]);
  const [squareMeterSelection, setSquareMeterSelection] = useState([0, 60]);
  const [floorSelection, setFloorSelection] = useState('');
  const [roomSelection, setRoomSelection] = useState('');
  const [restRoomSelection, setRestRoomSelection] = useState('');

  const priceStatus = (() => {
    switch (transactionSelection) {
      case '매매':
        return priceSelection[0] === 0 && priceSelection[1] === 50
          ? ''
          : `${priceSelection[0]} ~ ${priceSelection[1]}`;
      case '전세':
        return charterSelection[0] === 0 && charterSelection[1] === 100000
          ? ''
          : `${charterSelection[0]} ~ ${charterSelection[1]}`;
      case '월세':
        return monthlyRentSelection[0] === 0 &&
          monthlyRentSelection[1] === 200 &&
          depositionSelection[0] === 0 &&
          depositionSelection[1] === 30000
          ? ''
          : `${monthlyRentSelection[0]} ~ ${monthlyRentSelection[1]}~${depositionSelection[0]} ~ ${depositionSelection[1]}`;

      default:
        return '';
    }
  })();
  const PROPERTY_TYPE = [
    { type: '매물 타입', status: '' },
    { type: '거래유형', status: transactionSelection },
    {
      type: '가격',
      status: priceStatus,
    },
    {
      type: '평형',
      status:
        squareMeterSelection[0] === 0 && squareMeterSelection[1] === 60
          ? ''
          : `${squareMeterSelection[0]} ~ ${squareMeterSelection[1]}`,
    },
    { type: '층', status: floorSelection },
    { type: '방 갯수', status: roomSelection },
    { type: '화장실 갯수', status: restRoomSelection },
  ];

  const handlePriceChange = ([min, max]) => {
    setPriceSelection([min, max]);
    console.log(min, max);
  };
  const handleSquareMeterChange = ([min, max]) => {
    setSquareMeterSelection([min, max]);
  };

  const handleCharterChange = ([min, max]) => {
    setCharterSelection([min, max]);
  };
  const handleDepositChange = ([min, max]) => {
    setDepositionSelection([min, max]);
  };
  const handleMonthlyRentChange = ([min, max]) => {
    setMonthlyRentSelection([min, max]);
  };

  return (
    <MainLayout>
      <View style={styles.propertyMapWrapper}>
        <ImageBackground
          source={require('../../../assets/map/temp-map-picture.png')}
          style={styles.tempMapImage}
        >
          <View style={styles.searchInputWrapper}>
            <View style={styles.searchInputContainer}>
              <Image
                source={require('../../../assets/map/filter-icon.png')}
                style={styles.filterIcon}
              />
              <TextInput style={styles.searchInputStyle} />
              <Image
                source={require('../../../assets/map/search-icon.png')}
                style={styles.searchIcon}
              />
            </View>
          </View>
          <View style={styles.propertyTypeWrapper}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.propertyType}
              showsHorizontalScrollIndicator={false}
            >
              {PROPERTY_TYPE.map((item, idx) => (
                <Pressable
                  key={item.type}
                  style={[
                    styles.propertyTypeContainer,
                    selectedType === item.type && styles.containerStyle,
                  ]}
                  disabled={item.type === '매물 타입' ? true : false}
                  onPress={() => setSelectedType(item.type)}
                >
                  <Text
                    style={[
                      idx === 0 ? styles.textBlue : styles.textBlack,
                      item.status !== '' ? styles.textBlue : null,
                    ]}
                  >
                    {item.type}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>

            <View style={styles.filterDeatilStyle}>
              {selectedType === '거래유형' && (
                <TransactionTypeFilter
                  selected={transactionSelection}
                  onSelected={setTransactionSelection}
                />
              )}
              {selectedType === '가격' && transactionSelection === '매매' && (
                <BargainFilter
                  values={priceSelection}
                  onValuesChangeFinish={handlePriceChange}
                />
              )}
              {selectedType === '가격' && transactionSelection === '전세' && (
                <CharterFilter
                  values={charterSelection}
                  onValuesChangeFinish={handleCharterChange}
                />
              )}
              {selectedType === '가격' && transactionSelection === '월세' && (
                <MonthlyRentFilter
                  depositValues={depositionSelection}
                  onDepositFinish={handleDepositChange}
                  rentValues={monthlyRentSelection}
                  onRentFinish={handleMonthlyRentChange}
                />
              )}
              {selectedType === '평형' && (
                <SquareMetersFilter
                  values={squareMeterSelection}
                  onValuesChangeFinish={handleSquareMeterChange}
                />
              )}
              {selectedType === '층' && (
                <FloorFilter
                  selected={floorSelection}
                  onSelected={setFloorSelection}
                />
              )}
              {selectedType === '방 갯수' && (
                <RoomFilter
                  selected={roomSelection}
                  onSelected={setRoomSelection}
                />
              )}
              {selectedType === '화장실 갯수' && (
                <RestroomFilter
                  selected={restRoomSelection}
                  onSelected={setRestRoomSelection}
                />
              )}
            </View>
          </View>
          <View style={styles.locationAndRulerWrapper}>
            <View style={styles.rulerIconWrapper}>
              <Image
                source={require('../../../assets/map/ruler-icon.png')}
                style={styles.rulerAndLocationIcon}
              />
            </View>
            <View style={styles.locationIconWrapper}>
              <Image
                source={require('../../../assets/map/location-icon.png')}
                style={styles.rulerAndLocationIcon}
              />
            </View>
          </View>
          <View style={styles.buttonStyle}>
            <Button title="이 동네 매물보기" />
          </View>
        </ImageBackground>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  propertyMapWrapper: {
    flex: 1,
  },
  propertyType: {
    height: 30,
    flexDirection: 'row',
    gap: 4,
    marginBottom: 12,
  },
  propertyTypeContainer: {
    paddingHorizontal: 18,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  containerStyle: {
    borderColor: '#1229A4',
    borderWidth: 1,
  },
  textBlue: {
    color: '#1229A4',
  },
  textBlack: {
    color: 'black',
  },
  tempMapImage: {
    height: '100%',
    paddingHorizontal: 24,
    width: SCREEN_WIDTH,
  },

  searchInputWrapper: {
    height: '15%',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'flex-end',
  },
  searchInputContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  filterIcon: {
    width: 24,
    height: 24,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  propertyTypeWrapper: {
    height: 30,
    marginTop: 15,
    marginRight: -24,
    marginBottom: '35%',
    position: 'relative',
  },
  filterDeatilStyle: {
    position: 'absolute',
    top: 40,
    width: SCREEN_WIDTH - 48,
    marginRight: 24,
  },
  locationAndRulerWrapper: {
    width: '12%',
    height: 90,
    marginTop: 15,
    marginBottom: '83%',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  rulerIconWrapper: {
    width: 43,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    opacity: 0.9,
  },
  rulerAndLocationIcon: {
    width: 25,
    height: 25,
  },
  locationIconWrapper: {
    width: 43,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.9,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  searchInputStyle: {
    width: '85%',
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 10,
  },
  buttonStyle: {
    marginBottom: 25,
  },
});
