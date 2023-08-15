import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

export default function Loader() {
  return (
    <View style={s.wrapper}>
      <ActivityIndicator />
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
