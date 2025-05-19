import { StyleSheet, Pressable, Text} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors' 
import { Link } from 'expo-router'
import ThemeView from '../../components/ThemeView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedBtn from '../../components/ThemeBtn'

const Login = () => {
const handleSubmit =()=>{
  console.log('Form submitted')
}

  return (
    <ThemeView style={styles.container}>


      <Spacer/>
          <ThemedText style={styles.title} title ={true}>Hello World</ThemedText>

      <Spacer height={100} />

  <ThemedBtn onPress={handleSubmit} >
     <Text style= {{color:'#f2f2f2'}}> LogIn</Text>
     </ThemedBtn>
  <Link href='/register'>
          <ThemedText> Register Instead
            </ThemedText></Link>
    </ThemeView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems: 'center'
  },
  title:{
    textAlign: "center",
    fontSize: 32,
    marginBottom:30,
  },
  btn:{
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
  },
  pressed:{
    opacity: 0.9
  }

})