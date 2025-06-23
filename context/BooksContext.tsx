import { createContext, ReactNode, useEffect, useState } from "react";
import {databases} from  "../lib/appwrite";
import { ID, Models, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
const DATABASE_ID= "6852e584000afbef9647"
const COLLECTION_ID= "6852e59700215685b228"

export const BooksContext = createContext<any>(null); 
interface BooksProviderProps{
children: ReactNode;}

export function BooksProvider({children}:BooksProviderProps){
    const [book, setBook] =useState<Models.Document[]>([]);
    const {user}=useUser()

    async function fetchBooks(){
        try{
            const response= await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userID',user.$id)

                ]
            )
            setBook(response.documents)
            console.log(response)
        } catch (error: any) {
     throw Error(error.message);
    }

    }

    async function fetchBooksId(id: any){
        try{

        } catch(error:any){
            throw Error(error.message)
        }
    }

async function createBook(data: any) {
    try {
        const newBook = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            { ...data, userId: user.$id },
            [
                Permission.read(Role.user(user.$id)),
                Permission.update(Role.user(user.$id)),
                Permission.delete(Role.user(user.$id)),
            ]
        );
        console.log("Book created:", newBook);
    } catch (error: any) {
        throw Error(error.message);
    }
}


     async function deleteBook(id: any){
        try{

        } catch(error:any){
            throw Error(error.message)
        }
    }


useEffect(()=>{
    if(user){    
        fetchBooks()
    }else{
        setBook([])
    }
},[user])


    return (
        <BooksContext.Provider 
        value={{book, fetchBooks,fetchBooksId,createBook,deleteBook}}> 
        {children}</BooksContext.Provider>
    );
}



