import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  title: {
    color: '#34383B',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    position: 'relative',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 15 : 85,
  },
  button: {
    backgroundColor: '#FAD24E',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 6,
  },
  buttonText: {
    color: '#385774',
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#838486',
    fontSize: 16,
    padding: 15,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  listItemName: {
    color: '#34383B',
    fontSize: 14,
  },
  listItemSymbol: {
    color: '#838486',
    fontSize: 13,
  },
  androidInputContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
    zIndex: 1,
  },
});
