import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../theme/color';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: APP_COLORS.white,
    height: 60,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  headerTitle: {
    color: APP_COLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.white,
  },
  input: {
    height: 50,
    borderColor: APP_COLORS.grey,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: APP_COLORS.white,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
    color: APP_COLORS.black,
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: '100%',
  },
  card: {
    width: '45%',
    padding: 15,
    backgroundColor: APP_COLORS.white,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: APP_COLORS.grey,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    elevation: 4,
    margin: 10,
  },
  title: {
    fontSize: 16,
    color: APP_COLORS.black,
    fontWeight: '500',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: APP_COLORS.black,
    fontWeight: '500',
    marginTop: 2,
  },
});
