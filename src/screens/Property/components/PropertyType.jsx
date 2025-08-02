import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import { useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PROPERTY_TYPE = [
  { type: '매물 타입' },
  { type: '거래유형' },
  { type: '가격' },
  { type: '평형' },
  { type: '층' },
  { type: '방 갯수' },
  { type: '화장실 갯수' },
];
const PRICE_LABELS = [0, 5, 10, 15, 20, 30, '50억~'];
const SLIDER_LENGTH = SCREEN_WIDTH - 90;
const STEP_COUNT = PRICE_LABELS.length - 1;
const STEP_WIDTH = SLIDER_LENGTH / STEP_COUNT;

export default function PropertyType() {
  const [type, setType] = useState('매물 타입');
  const [values, setValues] = useState([0, 30]);

  const handleValuesChange = (val) => {
    setValues(val);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal contentContainerStyle={styles.propertyTypeWrapper}>
        {PROPERTY_TYPE.map((item, idx) => (
          <Pressable
            key={item.type}
            style={[
              styles.propertyTypeContainer,
              type === item.type && styles.containerStyle,
            ]}
            onPress={() => setType(item.type)}
          >
            <Text
              style={[
                idx === 0 ? styles.textBlue : styles.textBlack,
                type === item.type && styles.textBlue,
              ]}
            >
              {item.type}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.typeDetailWrapper}>
        {type === '가격' && (
          <View style={styles.typeDetailContainer}>
            <View style={styles.multiSliderStyle}>
              <View
                style={[styles.sliderWithDividers, { width: SLIDER_LENGTH }]}
              >
                {/* 1. 슬라이더 */}
                <MultiSlider
                  values={values}
                  min={0}
                  max={30}
                  step={5}
                  enableSnapping
                  snapped
                  onValuesChange={handleValuesChange}
                  selectedStyle={{ backgroundColor: '#1229A4', height: 8 }}
                  unselectedStyle={{ backgroundColor: '#a3a3a3', height: 8 }}
                  markerStyle={styles.marker}
                  containerStyle={styles.sliderContainer}
                  sliderLength={SLIDER_LENGTH}
                />

                {/* 2. 구분선 */}
                <View style={styles.dividerOverlay}>
                  {Array.from({ length: STEP_COUNT + 1 }).map((_, idx) => (
                    <View
                      key={`divider-${idx}`}
                      style={[styles.divider, { left: idx * STEP_WIDTH - 1 }]}
                    />
                  ))}
                </View>
              </View>

              {/* 3. 라벨 */}
              <View style={[styles.labelRow, { width: SLIDER_LENGTH }]}>
                {PRICE_LABELS.map((label, idx) => (
                  <Text
                    key={idx}
                    style={[styles.labelText, { width: STEP_WIDTH * 0.93 }]}
                  >
                    {typeof label === 'number' ? `${label}억` : label}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.buttonStyle}>
              <Pressable>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#1229A4',
                    textDecorationLine: 'underline',
                  }}
                >
                  직접 입력
                </Text>
              </Pressable>
              <Pressable>
                <Text style={{ fontSize: 12, color: '#666666' }}>
                  <Image
                    source={require('../../../../assets/map/reset-button.png')}
                    style={{ width: 7, height: 9 }}
                  />{' '}
                  선택해제
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 12,
  },
  propertyTypeWrapper: {
    height: 30,
    flexDirection: 'row',
    gap: 4,
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
  typeDetailWrapper: {
    height: 100,
    marginRight: 24,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  typeDetailContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  multiSliderStyle: {
    alignItems: 'center',
    marginTop: 5,
  },
  sliderWithDividers: {
    position: 'relative',
    justifyContent: 'center',
  },
  sliderContainer: {
    width: '100%',
    height: 15,
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fafaff',
    marginTop: 5,
    zIndex: 2,
  },
  dividerOverlay: {
    position: 'absolute',
    top: 3,
    height: 8,
    width: '100%',
    flexDirection: 'row',
    zIndex: 0,
  },
  divider: {
    position: 'absolute',
    width: 2,
    height: 8,
    backgroundColor: '#E5E5E5',
    zIndex: 0,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 1,
  },
  labelText: {
    fontSize: 12,
    color: '#666666',
  },
  buttonStyle: {
    paddingLeft: '40%',
    flexDirection: 'row',
    gap: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
