import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useBooks } from "../../hooks/useBooks"
import { useRouter } from 'expo-router'
import React, { useState } from 'react'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemeView"
import ThemeTextInput from '../../components/ThemeTextInput'
import ThemedBtn from '../../components/ThemeBtn'



const Create = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const { createBook } = useBooks()
  const router = useRouter()

  async function handleSubmit() {
    if (!title.trim() || !author.trim() || !description.trim()) return

    setLoading(true)
    
    // create the book
    await createBook({ title, author, description })

    // reset fields
    setTitle("")
    setAuthor("")
    setDescription("")

    // redirect
    router.replace("/books")

    // reset loading state
    setLoading(false) 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <ThemedView style={styles.container} safe={false}>

        <ThemedText title={true} style={styles.heading}>
          Add a New Book
        </ThemedText>
        <Spacer />

        <ThemeTextInput
          style={styles.input}
          placeholder="Book Title"
          value={title}
          onChangeText={setTitle} safe={false}        />
        <Spacer />

        <ThemeTextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor} safe={false}        />
        <Spacer />

        <ThemeTextInput
          style={styles.multiline}
          placeholder="Book Description"
          value={description}
          onChangeText={setDescription}
          multiline={true} safe={false}        />
        <Spacer />

        <ThemedBtn onPress={handleSubmit} 
        aria-disabled={loading}>
          <Text style={{ color: '#fff' }}>
            {loading ? "Saving..." : "Create Book"}
          </Text>
        </ThemedBtn>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Create

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
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
})