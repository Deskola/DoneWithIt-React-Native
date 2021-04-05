import React from 'react';
import { Button, StyleSheet,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen';
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigation';
import navigationTheme from './app/navigation/navigationTheme';

//Local file

const Link = () => {
  const navigation = useNavigation();
  
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetail")}/>
  )
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetail", {id: 1})}/>
  </Screen>
);

const TweetDetail = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
    
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
    
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}/>    
    <Stack.Screen 
      name="TweetDetail" 
      component={TweetDetail}
      options={({ route }) => ({title: route.params.id})}/>
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () =>(
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "White",
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: "black"
    }}>
    <Tab.Screen 
      name="Tweets" 
      component={StackNavigator}
      options={{
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color/>
      }}/>
    <Tab.Screen 
      name="Account" 
      component={Account} 
      options={{
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="email" size={size} color/>
      }}/>
  </Tab.Navigator>
)

export default function App() {
 
  return (    
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>  
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
