import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../../theme/appStyles';
import {paginatedPokemon} from '../../hooks/paginatedPokemon';
import CardPokemon from '../../components/CardPokemon/CardPokemon';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {pokemonList, loadData} = paginatedPokemon();

  return (
    <>
      <Text
        style={{
          ...styles.globalMargin,
          ...styles.title,
          top: top + 20,
          marginBottom: top + 30,
        }}>
        Listado de Pokemon
      </Text>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={pokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <CardPokemon pokemon={item} />}
          onEndReached={loadData}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="black" />
          }
        />
      </View>
    </>
  );
};
export default HomeScreen;
