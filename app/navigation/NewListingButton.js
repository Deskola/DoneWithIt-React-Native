import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';


function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}> 
                <MaterialCommunityIcons 
                    name="plus-circle" 
                    color={colors.white}
                    size={30}/>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        backgroundColor: colors.primary,
        bottom: 10,
        borderRadius: 35,
        borderColor: colors.white,
        borderWidth: 15,
        height: 70,
        justifyContent: "center",
        width: 70,
        
    },
})
export default NewListingButton;