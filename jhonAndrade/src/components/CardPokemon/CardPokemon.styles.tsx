import {Dimensions, StyleSheet} from 'react-native';

const widthWindow = Dimensions.get('window').width;

const styles = StyleSheet.create({
  containerCard: {
    marginHorizontal: 10,
    height: 220,
    width: widthWindow * 0.4,
    marginBottom: 25,
  },
  textName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imgPokemon: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
