import { StyleSheet, Pressable, Text, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors' 
import { Link } from 'expo-router'
import ThemeView from '../../components/ThemeView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedBtn from '../../components/ThemeBtn'
import ThemeTextInput from '../../components/ThemeTextInput'
import { useUser } from '../../hooks/useUser'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const[error, setError]= useState(null)


  const { user } = useUser();
  const {login} = useUser()
  
  const handleSubmit =async ()=>{
    setError(null)
     try{
              await login(email, password)
                  console.log('current user is:', user)
            }
            catch (error:any){
                setError(error.message)
            }
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemeView style={styles.container} safe={false}>


      <Spacer/>
          <ThemedText style={styles.title} title ={true}>Hello World
          </ThemedText>
    <ThemeTextInput 
    style={{width: '80%', marginBottom:20}}
        placeholder='Email' 
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        safe={false}  />

         <ThemeTextInput 
    style={{width: '80%', marginBottom:20}}
        placeholder='Password' 
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        safe={false}  />

      <Spacer height={100} />

    
  <ThemedBtn onPress={handleSubmit} >
     <Text style= {{color:'#f2f2f2'}}> LogIn</Text>
     </ThemedBtn>

     <Spacer/>
      {error && <Text style={styles.error}> {error}</Text>}
  <Link href='/register'>
          <ThemedText> Register Instead
            </ThemedText></Link>
    </ThemeView>
    </TouchableWithoutFeedback>
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