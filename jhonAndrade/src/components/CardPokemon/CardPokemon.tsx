import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {pokemonSimple} from '../../interfaces/pokemonInterfaces';
import {FadeInImage} from '../FadeInImage/FadeInImage';
import styles from './CardPokemon.styles';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';

interface CardPokemonProps {
  pokemon: pokemonSimple;
}

export const CardPokemon = ({pokemon}: CardPokemonProps) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {
    ImageColors.getColors(pokemon.img, {fallback: 'grey'}).then(colors => {
      if (!isMounted.current) return;

      if (colors.platform === 'android') {
        setBgColor(colors.dominant || 'grey');
      }
      if (colors.platform === 'ios') {
        setBgColor(colors.background || 'grey');
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('DetailScreen', {pokemon: pokemon, color: bgColor})
      }>
      <View style={{...styles.containerCard, backgroundColor: bgColor}}>
        <View>
          <FadeInImage uri={pokemon.img} style={styles.imgPokemon} />
        </View>
        <View>
          <Text style={styles.textName}>
            {'#' + pokemon.id} {'\n' + pokemon.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CardPokemon;
