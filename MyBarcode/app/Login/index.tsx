import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useAction} from './hook';
import {styles} from './css';

export const Login = ({navigation}: any) => {
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
        <Text style={styles.myApp}>Learn More</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
