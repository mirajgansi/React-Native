import { Stack } from "expo-router";
import {StatusBar, useColorScheme} from      "react-native";
import { Colors } from "../../constants/Colors";
import { UserProvider } from "../../context/UserContext";
import { useUser } from "../../hooks/useUser";

export default function AuthLayout(){

  const {user}= useUser();
  console.log(user)
  return (
    <>
        <StatusBar barStyle="default" />
        <Stack screenOptions={{
headerShown:false, animation: 'none'      
  }}/>

 
    </>
    )
}