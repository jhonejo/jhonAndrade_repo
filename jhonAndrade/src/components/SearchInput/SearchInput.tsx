import React, {useEffect, useState} from 'react';
import {Platform, View, StyleProp, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';
import styles from './SearchInput.styles';

interface Props {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style, onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');

  const deboncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(deboncedValue);
  }, [deboncedValue]);

  return (
    <View
      style={{
        ...styles.container,
        ...(style as any),
      }}>
      <View style={styles.textBackground}>
        <TextInput
          placeholderTextColor={'black'}
          placeholder="Buscar"
          style={{
            ...styles.textInput,
            top: Platform.OS === 'ios' ? 0 : 2,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />

        <Icon name="search-outline" color="black" size={30} />
      </View>
    </View>
  );
};
