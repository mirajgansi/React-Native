import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemeView from '../../components/ThemeView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedBtn from '../../components/ThemeBtn'

const Register = () => {
  const handleSubmit =()=>{
  console.log('Form submitted')
}
  return (
    <ThemeView style={styles.container}>

      <Spacer/>
      <ThemedText title={true} style={styles.title}>
    Register Page
      </ThemedText>

      
  <ThemedBtn onPress={handleSubmit} >
     <Text style= {{color:'#f2f2f2'}}> Register</Text>
     </ThemedBtn>
     
      <Spacer height={100} />

      <Link href='/login'>
      <ThemedText> Login Instead
        </ThemedText></Link>

    </ThemeView>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  },
  title:{
    textAlign: "center",
    fontSize: 32,
    marginBottom:30,
  }


})