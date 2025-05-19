import { Image, useColorScheme } from "react-native";

import bat from '../assets/img/bat.jpg'
import Sword from '../assets/img/sword.png'

const ThemedLogo =({...props}) =>{
    const colorScScheme = useColorScheme()
    const logo = colorScScheme == 'dark' ? bat : Sword

    return(
        <Image source={logo} {...props}/>
    )
}


export default ThemedLogo