import React, { useEffect, useState } from 'react';
import {Button, FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import listingApi from '../api/listings';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';




function ListingScreen({navigation}) {
    const getListingApi = useApi(listingApi.getistings);
    
    
    useEffect(() => {
        getListingApi.request();
    }, [])

   
    return (
        <>
        <ActivityIndicator visible={getListingApi.loading}/>
        <Screen style={styles.screen}>
            {getListingApi.error && <>
                <AppText>Could not retrieve the listings.</AppText>
                <AppButton title="Retry" onPress={getListingApi.request}/>
            </>}
            <FlatList
                data={getListingApi.data}
                keyExtractor={(listingItem) => listingItem.id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={"KSH " + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}/>
                }
            />
        </Screen>
        </>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
})
export default ListingScreen;