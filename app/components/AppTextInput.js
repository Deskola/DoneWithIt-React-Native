import React from 'react';
import { View,StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from '../config/styles';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons 
                name={icon} size={20} style={styles.icon}
                backgroundColor={defaultStyle.colors.medium} />}
            <TextInput 
                placeholderTextColor={defaultStyle.colors.medium}
                style={defaultStyle.text} {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon:{
        marginRight:10
    },    
})
export default AppTextInput;