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
const DEPOSIT_LABELS = [0, 1000, 3000, 5000, 10000, 20000, 30000];
const RENT_LABELS = [0, 30, 50, 70, 100, 150, 200];
const SLIDER_LENGTH = SCREEN_WIDTH - 96;
const DEPOSIT_MAX = DEPOSIT_LABELS.length - 1; // 6
const RENT_MAX = RENT_LABELS.length - 1;

function makeIndices(labels, values) {
  const start = labels.indexOf(values[0]);
  const end = labels.indexOf(values[1]);
  return [start !== -1 ? start : 0, end !== -1 ? end : labels.length - 1];
}

export default function MonthlyRentFilter({
  depositValues,
  onDepositFinish,
  rentValues,
  onRentFinish,
}) {
  const depositIdx = makeIndices(DEPOSIT_LABELS, depositValues);
  const rentIdx = makeIndices(RENT_LABELS, rentValues);
  const handleFinish = ([i0, i1]) => {
    const realMin = DEPOSIT_LABELS[i0];
    const realMax = DEPOSIT_LABELS[i1];
    onDepositFinish([realMin, realMax]);
  };
  const handleRentFinish = ([i0, i1]) => {
    const realMin = RENT_LABELS[i0];
    const realMax = RENT_LABELS[i1];
    onRentFinish([realMin, realMax]);
  };

  return (
    <View style={styles.transactionTypeFilterWrapper}>
      <View style={styles.sliderWithDividers}>
        {/* 트랙 전용 슬라이더 (터치 통과) */}
        <View pointerEvents="none" style={styles.sliderContainer}>
          <MultiSlider
            values={depositIdx}
            min={0}
            max={DEPOSIT_MAX}
            step={1}
            snapped
            sliderLength={SLIDER_LENGTH}
            selectedStyle={styles.trackSelected}
            unselectedStyle={styles.trackUnselected}
            markerStyle={{ width: 0, height: 0 }}
            containerStyle={styles.sliderContainer}
          />
        </View>

        {/* 구분선 */}
        <View style={styles.dividerOverlay}>
          {DEPOSIT_LABELS.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.divider,
                { left: (SLIDER_LENGTH / DEPOSIT_MAX) * idx - 1 },
              ]}
            />
          ))}
        </View>

        {/* 마커 전용 슬라이더 (터치 가능) */}
        <MultiSlider
          values={depositIdx}
          min={0}
          max={DEPOSIT_MAX}
          step={1}
          snapped
          onValuesChangeFinish={handleFinish}
          sliderLength={SLIDER_LENGTH}
          selectedStyle={styles.trackTransparent}
          unselectedStyle={styles.trackTransparent}
          markerStyle={styles.marker}
          containerStyle={[styles.sliderContainer, styles.markerSlider]}
        />

        {/* 라벨 (구분선 바로 아래) */}
        <View style={styles.rentLabelOverlay}>
          {DEPOSIT_LABELS.map((label, idx) => {
            const LABEL_WIDTH = 50;
            const leftPos =
              (SLIDER_LENGTH / DEPOSIT_MAX) * idx - LABEL_WIDTH / 2;
            const display =
              label === 0
                ? '0'
                : label === 1000 || label === 3000 || label === 5000
                ? `${label}만원`
                : `${label / 10000}억${label === 30000 ? '~' : ''}`;
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

        <View style={styles.buttonStyle}>
          <Pressable>
            <Text style={styles.inputText}>보증금 직접 입력</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.sliderWithDividers}>
        {/* 트랙 전용 슬라이더 */}
        <View pointerEvents="none" style={styles.sliderContainer}>
          <MultiSlider
            values={rentIdx}
            min={0}
            max={RENT_MAX}
            step={1}
            snapped
            sliderLength={SLIDER_LENGTH}
            selectedStyle={styles.trackSelected}
            unselectedStyle={styles.trackUnselected}
            markerStyle={{ width: 0, height: 0 }}
            containerStyle={styles.sliderContainer}
          />
        </View>

        {/* 구분선 */}
        <View style={styles.dividerOverlay}>
          {RENT_LABELS.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.divider,
                { left: (SLIDER_LENGTH / RENT_MAX) * idx - 1 },
              ]}
            />
          ))}
        </View>

        {/* 마커 전용 슬라이더 */}
        <MultiSlider
          values={rentIdx}
          min={0}
          max={RENT_MAX}
          step={1}
          snapped
          onValuesChangeFinish={handleRentFinish}
          sliderLength={SLIDER_LENGTH}
          selectedStyle={styles.trackTransparent}
          unselectedStyle={styles.trackTransparent}
          markerStyle={styles.marker}
          containerStyle={[styles.sliderContainer, styles.markerSlider]}
        />

        {/* 라벨 (구분선 바로 아래) */}
        <View style={styles.labelOverlay}>
          {RENT_LABELS.map((label, idx) => {
            const LABEL_WIDTH = 50;
            const leftPos = (SLIDER_LENGTH / RENT_MAX) * idx - LABEL_WIDTH / 2;
            const display =
              label === 0 ? '0' : label === 200 ? '200만원~' : `${label}만원`;
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

      <View style={styles.rentButtonStyle}>
        <Pressable>
          <Text style={styles.inputText}>월세 직접 입력</Text>
        </Pressable>
        <Pressable
          style={styles.resetButtonWrapper}
          onPress={() => {
            handleFinish([0, DEPOSIT_MAX]);
            handleRentFinish([0, RENT_MAX]);
          }}
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
    zIndex: 10,
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
  trackSelected: {
    backgroundColor: '#1229A4',
    height: 8,
  },
  trackUnselected: {
    backgroundColor: '#a3a3a3',
    height: 8,
  },
  // 투명 트랙 (마커 전용 슬라이더)
  trackTransparent: {
    backgroundColor: 'transparent',
    height: 8,
  },

  // 구분선
  dividerOverlay: {
    position: 'absolute',
    top: 3,
    width: '100%',
    height: 8,
    flexDirection: 'row',
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
  markerSlider: {
    top: -15,
    zIndex: 2,
    elevation: 2,
  },

  // 라벨 오버레이
  labelOverlay: {
    position: 'absolute',
    top: 20, // 구분선 아래 위치 조정
    width: SLIDER_LENGTH,
    height: 20,
  },
  rentLabelOverlay: {
    position: 'absolute',
    top: 20, // 구분선 아래 위치 조정
    width: SLIDER_LENGTH,
    height: 20,
  },
  // 라벨 텍스트
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
    marginTop: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rentButtonStyle: {
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
