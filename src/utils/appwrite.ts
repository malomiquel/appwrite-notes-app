import { Client, Databases } from "appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66f45949002e1a3d8823")

export const databases = new Databases(client);