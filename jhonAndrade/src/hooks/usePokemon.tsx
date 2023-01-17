import {useState, useEffect} from 'react';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {getPokemon} from '../api/pokeApi';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fullPokemon, setFullPokemon] = useState<PokemonFull>(
    {} as PokemonFull,
  );

  const loadPokemon = async () => {
    const resp = await getPokemon.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setFullPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    fullPokemon,
  };
};
