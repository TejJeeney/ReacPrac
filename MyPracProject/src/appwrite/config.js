import conf from "../conf/conf"
import { Client, Storage, Query, Databases, ID } from "appwrite"

export class Services {

    client = new Client();
    databases;
    bucket; 
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.bucket = new Storage(this.client)
        this.databases = new Databases(this.client)
    }


    // Post related services
    async createPost({title, content, slug, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content, 
                    featuredImage, 
                    status, 
                    userId
                }) 
        } catch (error) {
            console.log("Appwrite error :: createPost :: error" ,error)            
        }
    }

    async updatePost(slug, {title, content, featuredImage,status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            console.log("Appwrite error :: updatePost :: error" ,error)
            
        }
    }

    async deletePost(slug) {
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite error :: deletePost :: error" ,error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite error :: getPost :: error" , error);
        }
    }

    async getPosts(quaries= [Query.equal("status", "active")] ) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                quaries
            )
        } catch (error) {
            console.log("Appwrite error :: getPosts :: error" , error);
            
        }
    }

    //File related services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite error :: uploadFile :: error" , error);
            
            return false
        }
}

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite error :: deleteFile :: error" , error);
            return false
            
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
        // try {
        //     return this.bucket.getFilePreview(
        //         conf.appwriteBucketId,
        //         fileId,

        //     )
        // } catch (error) {
        //     console.log("Appwrite error :: getFilePreview :: error" , error);
        //     return false;
        // }
    }

    getFileDownload(fileId) {
        return this.bucket.getFileDownload(
            conf.appwriteBucketId,
            fileId
        );
    }
        

}

const services = new Services()

export default services