import conf from "../conf/conf"
import {Client, Account,  ID } from "appwrite"

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)

    }

  async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
                console.log("Account not created due to error");
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }

        return null;

    }

    async logout () {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: Logout :: error", error);
            
        }
    }

    async updateName(name) {
        try {
            await this.account.updateName(name);
        } catch (error) {
            console.log("Appwrite error :: updateName :: error", error);
        }
    }

    async updateEmail(email) {
        try{
            await this.account.updateEmail(email);
        }
        catch(error){
            console.log("Appwrite error :: updateEmail:: error" ,error)
        }
    }

        async updatePassword(password) {
        try{
            await this.account.updatePassword(password);
        }
        catch(error){
            console.log("Appwrite error :: updatePassword:: error" ,error)
        }
    }



}


const authservice = new AuthService()

export default authservice
