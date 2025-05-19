import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import {Ionicons} from '@expo/vector-icons'

const DashBoardLayout = () => {
   const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme] ?? Colors.light;
  return (

    <Tabs 
    screenOptions={{headerShown:false , tabBarStyle:{
        backgroundColor: theme.navBackground,
        paddingTop:10,
        height: 90
    }, tabBarActiveTintColor: theme.iconColourFocused,
    tabBarInactiveBackgroundColor: theme.iconColour
}}>
        <Tabs.Screen name="profile" options={{title:'Profile', tabBarIcon: ({focused})=>(
            <Ionicons
            size={24}
            name={focused ?"person" : 'person-outline' }
            color={focused ? theme.iconColourFocused : theme.iconColour}/>
        )}} />     
        <Tabs.Screen name="books" options={{title:'Books',
            tabBarIcon: ({focused})=>(
                <Ionicons
                size={24}
                name={focused ?"book" : 'book-outline' }
            color={focused ? theme.iconColourFocused : theme.iconColour}/>
            )
        }} />     
        <Tabs.Screen name="create" options={{title:'Create' , tabBarIcon:({focused})=>(
        <Ionicons
        size={24}
       name={focused ?"create" : 'create-outline' }
            color={focused ? theme.iconColourFocused : theme.iconColour}/>
        )}} />     



    </Tabs>
  
)}

export default DashBoardLayout