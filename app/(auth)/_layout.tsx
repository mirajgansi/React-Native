import { Stack } from "expo-router";
import {StatusBar, useColorScheme} from      "react-native";
import { Colors } from "../../constants/Colors";
import { UserProvider } from "../../context/UserContext";
import { useUser } from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

export default function AuthLayout(){

  return (
   
    <GuestOnly>
        <StatusBar barStyle="default" />
        <Stack screenOptions={{
headerShown:false, animation: 'none'      
  }}/>
    </GuestOnly>
    )
}