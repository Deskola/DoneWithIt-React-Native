import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import listingApi from '../api/listings';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';



function ListingScreen({navigation}) {
    const {data: listings, error, loading, request: loadingListings} = useApi(listingApi.getistings);
    
    
    useEffect(() => {
        loadingListings();
    }, [])

   
    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>Could not retrieve the listings.</AppText>
                <AppButton title="Retry" onPress={loadingListings}/>
            </>}
            <ActivityIndicator animating={true} size="large"/>
            <FlatList
                data={listings}
                keyExtractor={(listingItem) => listingItem.id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}/>
                }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
})
export default ListingScreen;