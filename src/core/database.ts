import { Injectable } from '@nestjs/common';
import firebase from "firebase";
@Injectable()
export class DatabaseService {

    initializeDatabase() {
        if (firebase.apps.length) {
            firebase.app(); // if already initialized, use that one
            return;
        }
        const config = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            databaseURL: process.env.DATABASE_URL,
            storageBucket: process.env.BUCKET
        };
        firebase.initializeApp(config);
    }


    async getList(collection : string): Promise<any> {
        this.initializeDatabase();
        const database = firebase.database();
        const query = database.ref(collection);
        return new Promise((resolve, reject)=> {
            query.on('value', function(snapshot) {
                resolve(snapshot.toJSON());
            });
        })
    }

    async update(collection,id,data : object): Promise<any> {
        this.initializeDatabase();
        const database = firebase.database();
        const query = database.ref(collection);
        return new Promise((resolve, reject)=> {
            query.child(id).set(data);
            resolve();
        })
    }
}
