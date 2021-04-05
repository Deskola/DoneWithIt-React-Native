import React from 'react';
import { Image, ImageBackground, StyleSheet, View} from 'react-native';

//Local Files
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function WelcomeScreen({navigation }) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.backgound} 
            source={require('../assets/shelve.jpg')}>
                <Image source={require('../assets/parcmon.png')} style={styles.logo}/>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                    <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />                    
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgound: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    buttonContainer:{
        width: "100%",
        padding: 20,        
    },
    logo:{
        width: 100,
        height: 100,
        position: "absolute",
        top:70,
         
    },
    
    
})

export default WelcomeScreen;