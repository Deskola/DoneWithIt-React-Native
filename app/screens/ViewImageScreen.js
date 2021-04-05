import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Local Files
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close-circle" size={50} color="dodgerblue" />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="delete-circle" size={50} color="tomato" />
            </View>
            <Image 
                style={styles.image}
                source={require('../assets/shelve.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {            
        position: "absolute",
        top: 30,
        left: 30,
    },
    container:{
        backgroundColor: colors.black,
        justifyContent: "center",
        flex: 1
    },
    deleteIcon: {               
        position: "absolute",
        top: 30,
        right: 30,
    },
    image:{
        width: "100%",
        height: "70%"
    }
})
export default ViewImageScreen;