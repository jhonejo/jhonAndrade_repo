import {useEffect, useRef, useState} from 'react';
import {getPokemon} from '../api/pokeApi';
import {
  pokemonResponse,
  pokemonSimple,
  Result,
} from '../interfaces/pokemonInterfaces';

export const paginatedPokemon = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<pokemonSimple[]>([]);

  const nextPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=4');

  const loadData = async () => {
    setLoading(true);
    const response = await getPokemon.get<pokemonResponse>(nextPage.current);
    nextPage.current = response.data.next;
    listPokemon(response.data.results);
  };

  const listPokemon = (pokemonArray: Result[]) => {
    const newPokemonArray: pokemonSimple[] = pokemonArray.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id, name, img};
    });

    setPokemonList([...pokemonList, ...newPokemonArray]);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    loading,
    pokemonList,
    loadData,
  };
};
