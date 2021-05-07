import {useEffect} from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokens from '../api/expoPushTokens';


const useNotification = (notificationListener) => {
    useEffect(() => {
        registerPushNotifications();

        if(notificationListener) Notifications.addNotificationReceivedListener(notificationListener);        
    }, []);

    const registerPushNotifications = async () => {        
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permission.granted) return;
    
            const token = await Notifications.getExpoPushTokenAsync();
            // console.log("Token:", token)
            expoPushTokens.register(token)             
        } catch (error) {
            console.log("Error getting push token ",error);
        }
    }
}

export default useNotification;