import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingRight: 25,
    position: 'relative',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  name: {
    color: '#34383B',
    fontSize: 16,
    fontWeight: '600',
  },
  symbol: {
    color: '#838486',
    fontSize: 14,
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButtonContainer: {
    position: 'absolute',
    top: 5,
    right: 0,
  },
});
