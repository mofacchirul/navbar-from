import { MongoClient, ServerApiVersion } from 'mongodb';

export const CollectonObj= {
    usecollection: "user_collection"
}
export  default function bdcoonet(collection){
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      }); 
      return client.db(process.env.BD_USER).collection(collection)
}
