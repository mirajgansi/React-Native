import { Stack } from "expo-router";
import {StatusBar, useColorScheme} from      "react-native";
import { Colors } from "../../constants/Colors";

export default function AuthLayout(){
  return (
    <>
        <StatusBar barStyle="default" />
        <Stack screenOptions={{
headerShown:false, animation: 'none'      
  }}/>

 
    </>
    )
}