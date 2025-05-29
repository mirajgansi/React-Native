import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemeView from '../../components/ThemeView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedBtn from '../../components/ThemeBtn'
import ThemeTextInput from '../../components/ThemeTextInput'
import { useUser } from '../../hooks/useUser'

const Register = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[error, setError]= useState(null)
    const {user, register} = useUser();



  const handleSubmit =async ()=>{
    setError(null)
     try{
              await register(email, password)
                  console.log('current user is:', user)
            }
            catch (error:any){
               setError(error.message)
            }
  console.log('Form submitted')
}
  return (
    <ThemeView style={styles.container} safe={false}>

      <Spacer/>
      <ThemedText title={true} style={styles.title}>
    Register Page
      </ThemedText>

       <ThemeTextInput 
    style={{width: '80%', marginBottom:20}}
        placeholder='Email' 
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        safe={false}  />

        <ThemeTextInput 
  style={{ width: '80%', marginBottom: 20 }}
  placeholder='Password' 
  value={password}
  onChangeText={setPassword}
  secureTextEntry
  safe={false}
/>
      <Spacer height={100} />

  <ThemedBtn onPress={handleSubmit} >
     <Text style= {{color:'#f2f2f2'}}> Register</Text>
     </ThemedBtn>
     
     <Spacer/>
      {error && <Text style={styles.error}> {error}</Text>}
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
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  }

})