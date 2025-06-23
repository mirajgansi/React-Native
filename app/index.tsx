import { StyleSheet, Text, View,  Image } from "react-native";
import {Link } from 'expo-router'
import ThemeView from "../components/ThemeView";
import ThemedLogo from "../components/ThemeLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

export default function Page() {
  return (
    <ThemeView style={styles.container} safe={false}>
      {/* <ThemedLogo  style={styles.img}/> */}
    <Spacer height={20} />
        <ThemedText style={styles.title} title ={true}>Hello World</ThemedText>

        <Spacer height={10}/>
        <ThemedText>This is the first page of your app.</ThemedText>
        <Spacer/>

      <Link href="/login"
      style={styles.link}> <ThemedText> Login </ThemedText></Link>

      <Link href="/register" style={styles.link}>
        <ThemedText> Rewgister </ThemedText></Link>
         <Link href="/profile" style={styles.link}>
        <ThemedText> Profile page </ThemedText></Link>
       
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },


 link:{
   marginVertical:10,
   borderBottomWidth:1 
  }
});


