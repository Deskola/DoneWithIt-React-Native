import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

function ImageInput({imageUri, onChangeImage}) {
    
    useEffect(() => {
        requestPermission()
    }, [])

    const requestPermission = async () =>{
        const {granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted){
          alert("You need to enable camera permission");
        }
    }

    const handlePress =() =>{
        if (!imageUri) {
            selectImage()
        }else{
            Alert.alert('Delete', 'Are you sure?', [
                {text: 'Yes', onPress: () => onChangeImage(null)},
                {text: 'No'}
            ])
        }
    }

    const selectImage = async () =>{
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5,
          });
          if (!result.cancelled) {
            onChangeImage(result.uri)            
          }
        } catch (error) {
          console.log("Error Reading Image",error);
        }
    }

    return (
        <TouchableWithoutFeedback
            underlayColor={colors.light} 
            onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons style={styles.icon} name="camera" size={35}/>}
                {imageUri && <Image
                    source={{uri: imageUri}}
                    style={styles.image}/>}               
                  
            </View>
        </TouchableWithoutFeedback>
        
    );
}
const styles = StyleSheet.create({
    container:{
        width: 100,
        height: 100,
        borderRadius:25,
        backgroundColor: colors.lightGray, 
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        margin: 5,
    },
    icon:{
        color: colors.medium,
    }, 
    image:{
        width: "100%",
        height: "100%"
    },
})
export default ImageInput;