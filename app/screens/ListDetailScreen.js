import React from 'react';
import { Image, StyleSheet, View,Text, ScrollView } from 'react-native';

import ListItem from '../components/ListItem';
import colors from '../config/colors';


function ListDetailScreen({route}) {
  const listing = route.params;
    return (
      <ScrollView >
        <View>
            <Image
                source={{uri: listing.images[0].url}}
                style={styles.image}/>
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
            </View>
        </View>
      </ScrollView>
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