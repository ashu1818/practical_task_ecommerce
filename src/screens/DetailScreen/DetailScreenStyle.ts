import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../theme/color';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: APP_COLORS.white,
    height: 60,
    paddingHorizontal: 10,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    color: APP_COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.white,
  },
  card: {
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: APP_COLORS.grey,
    overflow: 'hidden',
    backgroundColor: APP_COLORS.white,
    padding: 15,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: APP_COLORS.black,
  },
  price: {
    fontSize: 16,
    color: APP_COLORS.black,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: APP_COLORS.grey,
    marginTop: 10,
  },
});
