import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { UserProvider } from '../context/UserContext'
import { BooksProvider } from '../context/BooksContext'

const RootLayout = () => {
      const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme] ?? Colors.light;

  
  return (
    <UserProvider>
      <BooksProvider   >
        <Stack screenOptions={{
            headerStyle:{backgroundColor : theme.navBackground},
            headerTintColor:theme.title,
        }}  > 
        <Stack.Screen name="index" options={{title:'Home', headerShown: false}}/>
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        <Stack.Screen name="(dashboard)" options={{headerShown: false}} />

        </Stack>
        </BooksProvider>
        </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})