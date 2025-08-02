import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';

const TRANSACTION_TYPE = [
  { title: '반지층' },
  { title: '1층' },
  { title: '1층 이상' },
  { title: '옥탑층' },
];
export default function FloorFilter({ selected, onSelected }) {
  return (
    <View style={styles.transactionTypeFilterWrapper}>
      <View style={styles.contentWrapper}>
        {TRANSACTION_TYPE.map((item) => (
          <Pressable
            key={item.title}
            onPress={() => onSelected(item.title)}
            style={styles.itemPressableStyle}
          >
            <Text
              style={[
                styles.contentTitle,
                selected === item.title ? styles.active : '',
              ]}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
      <Pressable
        style={styles.resetButtonWrapper}
        onPress={() => onSelected('')}
      >
        <Image
          source={require('../../../../assets/map/reset-button.png')}
          style={styles.resetButtonImg}
        />
        <Text style={styles.resetButtonText}>선택해제</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionTypeFilterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  itemPressableStyle: {
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 14,
    fontWeight: 'regular',
  },
  active: {
    color: '#1229A4',
    textDecorationLine: 'underline',
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
