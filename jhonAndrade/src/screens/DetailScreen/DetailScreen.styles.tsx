import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backButton: {
    position: 'relative',
    left: 15,
    zIndex: 2,
  },
  containerCard: {
    alignSelf: 'center',
    zIndex: 2,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
