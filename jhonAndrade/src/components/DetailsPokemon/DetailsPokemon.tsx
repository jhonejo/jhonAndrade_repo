import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonFull} from '../../interfaces/pokemonInterfaces';
import {FadeInImage} from '../FadeInImage/FadeInImage';
import styles from './DetailsPokemon.styles';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      {/* Types y peso */}
      <View
        style={{
          ...styles.container,
          marginTop: 280,
        }}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        {/* Peso */}
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight}kg</Text>
      </View>

      {/* Types */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView
        // style
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />

        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />

        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />

        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* Habilidades */}
      <View style={styles.container}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
