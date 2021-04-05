import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, SubmitButton, AppFormik } from '../components/forms';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})
function LoginScreen(props) {    
    return (
       <Screen style={styles.container}>
           <Image
            style={styles.logo}
            source={require('../assets/parcmon.png')}/>

            <AppFormik
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    keyboardType="email-address"                            
                    placeholder="Email"
                    textContentType="emailAddress"/>                        
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"                            
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"/>                        
                <SubmitButton title="Login" />
            </AppFormik>    
       </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding: 20,

    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
})
export default LoginScreen;