import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import styles from './Loading.styles';

export const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Cargando...</Text>
    </View>
  );
};
