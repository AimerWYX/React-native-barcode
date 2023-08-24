import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useAction} from './hook';

export const Login = ({navigation}) => {
  const {userName, password, setUserName, setPassword} = useAction();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/image.png')}
        style={styles.image}>
        <View style={styles.inputContainer}>
          <Text style={styles.loginTitle}>Login your account</Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={text => setUserName(text)}
            value={userName}
            placeholder="请输入用户名"
          />
          <TextInput
            style={styles.loginInput}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="请输入密码"
          />
          <View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.loginButtonText}>登录</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontaLLineContainer}>
            <Text style={styles.horizontaLLine} />
            <Text style={styles.color2D333A}>OR</Text>
            <Text style={styles.horizontaLLine} />
          </View>
          <View>
            <TouchableOpacity style={styles.continueWithGoogleContainer}>
              <Image source={require('../assets/images/google.jpg')} />
              <Text style={styles.continueWithGoogleText}>
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                ...styles.continueWithGoogleContainer,
                marginVertical: 10,
              }}>
              <Image source={require('../assets/images/microsoft.jpg')} />
              <Text style={styles.continueWithGoogleText}>
                Continue with Microsoft
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.continueWithGoogleContainer}>
              <Image source={require('../assets/images/apple.jpg')} />
              <Text style={styles.continueWithGoogleText}>
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.myApp}>CHAT GPT</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
