import { useUser } from '../../hooks/useUser'
import { useRouter } from 'expo-router'
import { ReactNode, useEffect } from 'react'
import { Text } from 'react-native'
import ThemedLoader from '../ThemedLoader'


type UserOnlyProps = {
  children: ReactNode
}
const UserOnly = ({ children }: UserOnlyProps)=> {
    const { user, authChecked } = useUser()
  const router = useRouter()
  
  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login")
    }
  }, [user, authChecked])


  // show loader while we wait for auth to be checked, or while redirecting if user becomes null
  if (!authChecked || !user) {
    return (
     <ThemedLoader/>
    )
  }
  
  return children
}

export default UserOnly