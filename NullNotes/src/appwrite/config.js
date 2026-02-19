import conf from "../config/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async creatPost([title, slug, featuredImage, status, userId]){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log(error)
        }
    }
    async updatePost([slug, title, featuredImage, status]){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content, featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }
    async deletePost([slug,]){
        try {
            await this.databases.deleteDocument({
                conf.databseId,
            })
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}


const service = new Service();
export default service;