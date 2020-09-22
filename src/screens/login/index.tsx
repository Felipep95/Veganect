import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Image 
                        source={require('../../../assets/images/carrot.png')}
                        style={styles.imageConfig}
                    />
                    <Text style={styles.textConfig}>Veganect</Text>
                </View>
                <View>
                    <Input
                        inputStyle={styles.inputConfig}
                        placeholder="Email"
                        placeholderTextColor="white"
                        leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
                    />
                    <Input
                        inputStyle={styles.inputConfig}
                        placeholder="Senha"
                        placeholderTextColor="white"
                        leftIcon={{ type: 'font-awesome', name: 'lock', iconStyle:styles.iconColor }}
                        secureTextEntry={true}
                    /> 

                    <Button title='Login' buttonStyle={styles.buttonColor}></Button>
                    <TouchableOpacity>
                        <Text style={styles.textCreatAccount}>Criar conta</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </>
    )
};

export default Login;