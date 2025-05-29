import { createContext, useState, ReactNode } from "react";
import { account } from "../lib/appwrit.";
import { ID, Models } from "react-native-appwrite";

export const UserContext = createContext<any>(null); // You can replace `any` with a proper type later

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);


  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error: any) {
     throw Error(error.message);
    }
  }

  async function register(email: string, password: string) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error: any) {
     throw Error(error.message);
    }
  }

  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error: any) {
     throw Error(error.message);
    }
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
