import React from 'react';
import { StyleSheet, View,Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import ContactSellerForm from '../components/ContactSellerForm';

import ListItem from '../components/ListItem';
import colors from '../config/colors';


function ListDetailScreen({route}) {
  const listing = route.params;
    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 1000}>
        <ScrollView > 
            <Image
                uri={listing.images[0].url}
                preview={{uri: listing.images[0].thumbnailUrl}}
                style={styles.image}
                tint="light"/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>KSH{listing.price}</Text>
                <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/mosh.jpg")}
                    title="Mosh Hamedani"
                    subTitle="5 Listings"
                />
                </View>
                <ContactSellerForm listing={listing}/>
            </View>        
      </ScrollView>
      </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
      },
      image: {
        width: "100%",
        height: 300,
      },
      price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: "500",
      },
      userContainer: {
        marginVertical: 40,
      },
})
export default ListDetailScreen;