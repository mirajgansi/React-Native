import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemeView"
import { useUser } from '../../hooks/useUser'
import ThemedBtn from '../../components/ThemeBtn'
import { Text } from 'react-native';

const Profile = () => {

  const {logout ,user} = useUser()
  return (

    <ThemedView style={styles.container} safe={false}>

        <ThemedText title={true} style={styles.heading}>
          {user.email}
          </ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />
      <ThemedBtn onPress={logout}> 
        <Text style ={{color:'#f2f2f2'}}> LogOut</Text>
      </ThemedBtn>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})