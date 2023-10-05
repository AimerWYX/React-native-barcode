import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  loginTitle: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: '600',
  },
  inputContainer: {
    width: 300,
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
    zIndex: 10,
    position: 'relative',
  },
  loginInput: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: 'skyblue',
    marginBottom: 12,
    height: 32,
  },
  loginButton: {
    backgroundColor: '#10A37F',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  myApp: {
    position: 'absolute',
    fontSize: 80,
    color: '#10A37F',
    top: '16%',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  horizontaLLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  horizontaLLine: {
    width: 115,
    height: 1,
    backgroundColor: '#2D333A',
    opacity: 0.5,
  },
  color2D333A: {
    color: '#2D333A',
  },
  continueWithGoogleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderColor: 'rgba(0,0,0,0.7)',
  },
  continueWithGoogleText: {
    color: '#2D333A',
    marginLeft: 12,
  },
});
