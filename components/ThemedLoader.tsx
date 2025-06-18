import { ActivityIndicator, StyleProp, useColorScheme, ViewStyle } from "react-native";
import { Colors } from "../constants/Colors";
import ThemeView from "./ThemeView";



const ThemedLoader = ()=>{
    const colorScheme = useColorScheme() ?? "light";
    const theme= Colors[colorScheme] 

    return(
        <ThemeView  style={{
            flex :1,
            justifyContent:'center',
            alignItems:'center'
        }}
        
        safe={false} >
        <ActivityIndicator size="large"  color={theme.text} />
        </ThemeView>

      ) 
}


export default ThemedLoader