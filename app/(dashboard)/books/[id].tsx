 import { StyleProp, StyleSheet, ViewProps, ViewStyle ,Text} from 'react-native'
import { Colors } from '../../../constants/Colors'
import Spacer from "../../../components/Spacer"
import ThemedText from "../../../components/ThemedText"
import ThemedView from "../../../components/ThemeView"
import ThemeCard from '../../../components/ThemeCard'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
 import { useBooks } from '../../../hooks/useBooks'
import ThemedLoader from '../../../components/ThemedLoader'
import { Models } from 'react-native-appwrite'
import ThemedBtn from '../../../components/ThemeBtn'


const BookDetail= ({ }) => {
    const [book, setBook]= useState<Models.Document | null>(null)
    const {id}= useLocalSearchParams()
    const {fetchBookById, deleteBook}=useBooks()
    const router= useRouter()
    const handleDelete = async ()=>{
        await deleteBook(id)
        setBook(null)
        router.replace("/books")
    }
    useEffect (()=>{
        async function loadBook(){
            const bookData = await fetchBookById(id)
            setBook(bookData)
                }
                loadBook()
    },[id])

    if(!book){
        return(
            <ThemedView safe={true} style={styles.container}>
            <ThemedLoader />
            </ThemedView>
        )
    }


   return (
     <ThemedView safe={true} style={styles.container}>
        <ThemeCard>
        <ThemedText style={styles.title}>{book.title} </ThemedText>
        <ThemedText >Written by {book.author}</ThemedText>
        <Spacer/>
        <ThemedText title={true}> Book descriptiom</ThemedText>
        <Spacer height={10}/>
        <ThemedText > {book.description}</ThemedText>
     </ThemeCard>

     <ThemedBtn style={styles.delete}  onPress={handleDelete}>
        <Text style={{color:'#fff', textAlign:'center'}}>
            Delete 
        </Text>
     </ThemedBtn>
     </ThemedView>
   )
 }
 
 export default BookDetail
 
 const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "stretch",
    },
     title: {
    fontSize: 20,
    marginVertical:10
  },
  card:{
    margin:20
  },
  delete:{
    marginTop:40,
    backgroundColor:Colors.warning,
    width:200,
    alignSelf:'center',
  }
 })