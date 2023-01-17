import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {stackParams} from '../../navigator/Tab1';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './DetailScreen.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CardPokemon from '../../components/CardPokemon/CardPokemon';
import {usePokemon} from '../../hooks/usePokemon';
import {PokemonDetails} from '../../components/DetailsPokemon/DetailsPokemon';

interface DetailScreenProps
  extends StackScreenProps<stackParams, 'DetailScreen'> {}

export const DetailScreen = ({navigation, route}: DetailScreenProps) => {
  const {pokemon, color} = route.params;
  const {top} = useSafeAreaInsets();
  const {isLoading, fullPokemon} = usePokemon(pokemon.id);

  return (
    <View>
      <View style={{backgroundColor: color, height: '100%'}}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 10}}>
          <Icon name="arrow-back-outline" color="black" size={35} />
        </TouchableOpacity>
        <View style={styles.containerCard}>
          <CardPokemon pokemon={pokemon} />
        </View>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color={'black'} size={50} />
          </View>
        ) : (
          <PokemonDetails pokemon={fullPokemon} />
        )}
      </View>
    </View>
  );
};
export default DetailScreen;
