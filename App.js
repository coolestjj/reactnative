import * as React from 'react';
import Login from './pages/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personal from "./pages/Personal";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
                <Stack.Screen name="Personal" component={Personal} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}