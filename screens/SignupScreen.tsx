import React, { Fragment } from 'react';
import { Text, View, Keyboard, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import Arrow from '../components/Arrow';
import AnimatedLoader from 'react-native-animated-loader';
import InputField from '../components/Forms/Components/InputField';

interface InputProps {
  password: string;
  confirmPassword: string;
  email: string;
  error: string;
  loading: boolean;
}


export class LoginScreen extends React.Component<{ navigation: any }, InputProps> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      loading: false,
    };
  }

  _handleSignUp = () => {
    this.setState({ error: '', loading: true });
    const { password, confirmPassword } = this.state;
    const { navigation } = this.props;
    // eslint-disable-next-line no-unused-expressions
    password === confirmPassword
      ? firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            Alert.alert(
              'Account Created',
              'Your account was created successfully. Please login to continue.',
            );
            navigation.navigate('Login');
          })
          .catch((error) => this.setState({ error: error.message, loading: false }))
      : this.setState({ error: 'Passwords do not match', loading: false });
  };

  render() {
    const { password, confirmPassword, email, loading, error } = this.state;
    const { navigation } = this.props;
    return (
      <>
        <View style={styles.arrow} onStartShouldSetResponder={() => navigation.navigate('Login')}>
          <Arrow />
          <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontFamily: 'SF-Bold', fontSize: 24, color: '#25265E', padding: 20 }}>
            Sign up
          </Text>
          <Text
            style={{
              alignSelf: 'flex-start',
              right: '3%',
              bottom: '15%',
              fontFamily: 'SF-Medium',
              fontSize: 16,
              color: '#787993',
              padding: 30,
            }}
          >
            Create an account to use Lumiere {'\n'}
            <Text style={{ color: '#FF7052', fontFamily: 'SF-Medium', fontSize: 16 }}>
              without limits
            </Text>
            . For free.
          </Text>
        </View>
        <View style={{ left: '10%', bottom: '8%' }}>
          <InputField
            style={{ fontFamily: 'MaisonMedium' }}
            placeholderTextColor="#787993"
            placeholder="Email address"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
          <InputField
            placeholderTextColor="#787993"
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={(input) => this.setState({ password: input })}
          />
          <InputField
            placeholderTextColor="#787993"
            placeholder="Repeat password"
            value={confirmPassword}
            secureTextEntry
            onChangeText={(input) => this.setState({ confirmPassword: input })}
          />
        </View>
        <View style={{ alignItems: 'flex-start', bottom: '8%', left: '7%' }}>
          <TouchableOpacity style={styles.button} onPress={this._handleSignUp}>
            {loading ? (
              <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                source={require('../assets/loader.json')}
                animationStyle={styles.lottie}
                speed={1}
              />
            ) : (
              <Text style={{ fontFamily: 'SF-Bold', fontSize: 16, color: '#FF7052' }}>Sign up</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: 'center', bottom: '2%' }}>
          <Text style={{ fontFamily: 'SF-Medium', color: '#787993', fontSize: 16 }}>
            I already have an account.
            <Text style={{ fontFamily: 'SF-Medium', color: '#FF7052', fontSize: 16 }}>
              {''} Login
            </Text>
          </Text>
        </View>
      </>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  arrow: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 40,
    top: '5%',
  },
  container: {
    alignItems: 'flex-start',
    padding: 20,
    bottom: '2%',
  },
  button: {
    margin: 10,
    paddingVertical: 12,
    width: '26%',
    alignItems: 'center',
    backgroundColor: '#ffe2dc',
    borderColor: '#ffe2dc',
    borderRadius: 30,
    borderWidth: 1,
  },

  lottie: {
    width: 100,
    height: 300,
  },
});
