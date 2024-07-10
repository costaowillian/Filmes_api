import config from "config"
import {MongoClient as Mongo, Db} from "mongoDb";

export const MongoClient = {
   client: undefined as unknown as Mongo,
   db: undefined as unknown as Db,

   async connect(): Promise<void> {
    const url = config.get<string>("dbUri");
    const username = config.get<string>("dbUser");
    const password = config.get<string>("dbPassword");
    const client = new Mongo(url, { auth: {username, password} });
    const db = client.db("filmes");

    this.client = client;
    this.db = db;
    console.log("Conectado ao mongo!");
   },
};