import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PRICE_LABELS = [0, 5000, 10000, 20000, 30000, 50000, 100000];
const SLIDER_LENGTH = SCREEN_WIDTH - 96;
const MAX_INDEX = PRICE_LABELS.length - 1; // 6

export default function ChartFilter({ values, onValuesChangeFinish }) {
  const startIdx = PRICE_LABELS.indexOf(values[0]);
  const endIdx = PRICE_LABELS.indexOf(values[1]);
  const indices = [
    startIdx !== -1 ? startIdx : 0,
    endIdx !== -1 ? endIdx : MAX_INDEX,
  ];

  const handleFinish = ([i0, i1]) => {
    const realMin = PRICE_LABELS[i0];
    const realMax = PRICE_LABELS[i1];
    onValuesChangeFinish([realMin, realMax]);
  };

  return (
    <View style={styles.transactionTypeFilterWrapper}>
      <View style={styles.sliderWithDividers}>
        {/* 1) 트랙 전용 슬라이더 (터치 통과) */}
        <View pointerEvents="none" style={styles.sliderContainer}>
          <MultiSlider
            values={indices}
            min={0}
            max={MAX_INDEX}
            step={1}
            snapped
            sliderLength={SLIDER_LENGTH}
            selectedStyle={styles.trackSelected}
            unselectedStyle={styles.trackUnselected}
            markerStyle={{ width: 0, height: 0 }}
            containerStyle={styles.sliderContainer}
          />
        </View>

        {/* 2) 구분선 */}
        <View style={styles.dividerOverlay}>
          {PRICE_LABELS.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.divider,
                { left: (SLIDER_LENGTH / MAX_INDEX) * idx - 1 },
              ]}
            />
          ))}
        </View>

        {/* 3) 마커 전용 슬라이더 (터치 가능) */}
        <MultiSlider
          values={indices}
          min={0}
          max={MAX_INDEX}
          step={1}
          snapped
          onValuesChangeFinish={handleFinish}
          sliderLength={SLIDER_LENGTH}
          selectedStyle={styles.trackTransparent}
          unselectedStyle={styles.trackTransparent}
          markerStyle={styles.marker}
          containerStyle={[styles.sliderContainer, styles.markerSlider]}
        />

        {/* 4) 라벨 (구분선 바로 아래) */}
        <View style={styles.labelOverlay}>
          {PRICE_LABELS.map((label, idx) => {
            const LABEL_WIDTH = 50;
            const leftPos = (SLIDER_LENGTH / MAX_INDEX) * idx - LABEL_WIDTH / 2;
            const display =
              label === 0
                ? '0'
                : label === 5000
                ? '5000만원~'
                : `${label / 10000}억${label === 100000 ? '~' : ''}`;
            return (
              <Text
                key={idx}
                style={[
                  styles.labelText,
                  { left: leftPos, width: LABEL_WIDTH },
                ]}
              >
                {display}
              </Text>
            );
          })}
        </View>
      </View>

      {/* 버튼 영역 */}
      <View style={styles.buttonStyle}>
        <Pressable>
          <Text style={styles.inputText}>보증금 직접 입력</Text>
        </Pressable>
        <Pressable
          style={styles.resetButtonWrapper}
          onPress={() => handleFinish([0, MAX_INDEX])}
        >
          <Image
            source={require('../../../../assets/map/reset-button.png')}
            style={styles.resetButtonImg}
          />
          <Text style={styles.resetButtonText}>선택해제</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionTypeFilterWrapper: {
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
  },

  sliderWithDividers: {
    position: 'relative',
    width: SLIDER_LENGTH,
    overflow: 'visible',
    alignItems: 'center',
  },
  sliderContainer: {
    width: '100%',
    height: 15,
  },

  // 트랙 스타일
  trackSelected: { backgroundColor: '#1229A4', height: 8 },
  trackUnselected: { backgroundColor: '#a3a3a3', height: 8 },
  trackTransparent: { backgroundColor: 'transparent', height: 8 },

  // 구분선
  dividerOverlay: {
    position: 'absolute',
    top: 3,
    width: '100%',
    height: 8,
    zIndex: 1,
    elevation: 1,
  },
  divider: {
    position: 'absolute',
    width: 2,
    height: 8,
    backgroundColor: '#E5E5E5',
  },

  // 마커 스타일
  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FAFAFF',
    marginTop: 5,
    zIndex: 2,
    elevation: 2,
    borderWidth: 0,
  },
  markerSlider: { top: -15, zIndex: 2, elevation: 2 },

  // 라벨 오버레이
  labelOverlay: {
    position: 'absolute',
    top: 20, // 구분선 아래 위치 조정
    width: SLIDER_LENGTH,
    height: 20,
  },
  labelText: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 10,
    color: '#666666',
  },

  // 버튼 영역
  inputText: {
    fontSize: 12,
    color: '#1229A4',
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    paddingLeft: '43%',
    flexDirection: 'row',
    gap: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingVertical: 10,
  },
  resetButtonImg: {
    width: 8,
    height: 10,
  },
  resetButtonText: {
    color: '#666666',
    fontSize: 11,
  },
});
