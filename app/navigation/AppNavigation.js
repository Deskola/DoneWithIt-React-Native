import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

  
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';
import useNotification from '../hooks/useNotification';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {    
    useNotification();
    
    return (
        <Tab.Navigator>
        <Tab.Screen 
            name={routes.LISTINGS} 
            component={FeedNavigator}
            options={{
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons name="home" size={size} color={color}/>
            }}/>
        <Tab.Screen 
            name= {routes.LISTINGS_EDIT} 
            component={ListingEditScreen}
            options={({ navigation }) => ({ 
                tabBarButton: () => (
                    <NewListingButton onPress={() => navigation.navigate(routes.LISTINGS_EDIT) }/>
                    ),              
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons name="plus-circle" size={size} color={color}/>
            })}/>                           
        <Tab.Screen 
            name={routes.ACCOUNT} 
            component={AccountNavigator}
            options={{
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons name="account" size={size} color={color}/>,
                headerShown: false,
            }}/> 
    </Tab.Navigator>
    )
};

export default AppNavigator;