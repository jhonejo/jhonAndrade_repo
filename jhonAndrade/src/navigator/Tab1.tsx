import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import {pokemonSimple} from '../interfaces/pokemonInterfaces';

export type stackParams = {
  HomeScreen: undefined;
  DetailScreen: {pokemon: pokemonSimple; color: string};
};

const Stack = createStackNavigator<stackParams>();

export const Tab1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
