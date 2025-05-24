import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68313cc20031510df77b')
    .setPlatform('dev.React-Native.app');


export const account = new Account (client)
export const avatars= new Avatars(client)