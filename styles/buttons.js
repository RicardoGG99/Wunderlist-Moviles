import { StyleSheet } from 'react-native';

export const ButtonStyles = StyleSheet.create({
  TaskButton: {
    alignItems: 'center',
    backgroundColor: 'lightseagreen',
    padding: 15,
    height: 60,
  },

  TaskText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  SignOut: {
    bottom: 534,
    right: 20,
  },

  SignIn: {
    left: 270,
    bottom: 485,
  },

  LogOutButton: {
    borderRadius: 5,
    height: 60,
    width: '100%',
    backgroundColor: 'lightseagreen',
    bottom: '100%',
  },

  SignButton: {
    padding: 15,
    backgroundColor: 'lightseagreen',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
  },

  SignButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  Selector: {
    textAlign: 'center',
    height: 100,
  },

  TaskInput: {
    paddingBottom: 5,
    width: 700,
  },
});
