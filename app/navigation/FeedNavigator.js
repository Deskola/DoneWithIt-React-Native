import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListDetailScreen from '../screens/ListDetailScreen';
import ListingScreen from '../screens/ListingScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () =>(
    <Stack.Navigator mode="modal">
        <Stack.Screen 
            name={routes.LISTINGS} 
            component={ListingScreen}
            options={{ headerShown: false }}/>
        <Stack.Screen name={routes.LISTING_DETAILS} component={ListDetailScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator;