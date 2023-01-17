import {useEffect, useState} from 'react';

import {
  pokemonResponse,
  pokemonSimple,
  Result,
} from '../interfaces/pokemonInterfaces';
import {getPokemon} from '../api/pokeApi';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<pokemonSimple[]>(
    [],
  );

  const loadPokemons = async () => {
    const resp = await getPokemon.get<pokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: pokemonSimple[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id, name, img};
    });

    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    simplePokemonList,
  };
};
