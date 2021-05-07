import React, { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';

import AppLoading from 'expo-app-loading'
//import { AppLoading } from 'expo';

import AppNavigator from './app/navigation/AppNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/store';
import {navigationRef} from './app/navigation/rootNavigation';



//Local file

export default function App() {
 const [user, setUser] = useState();
 const [isReady, setIsReady] = useState(false);

 const restoreUser = async () => {
  //const token = await authStorage.getToken()
  const user = await authStorage.getUser();
  if (user) setUser(user);  
 }
 if (!isReady)
  return (
    <AppLoading 
      startAsync={restoreUser} 
      onFinish={() => setIsReady(true)} 
      onError={() => console.log("Error")}/>
  )
  
  return (
    
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator/>:<AuthNavigator />}
      </NavigationContainer>  
    </AuthContext.Provider>    
  );
} 

