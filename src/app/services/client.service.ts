import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Client } from '../models/client';

@Injectable()
export class ClientService {
  // calls AngularFirestore then passes in Client model interface
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  // plural or as an array
  clients: Observable<Client[]>;
  // singular or independent instance
  client: Observable<Client>;

  // inject dependency services in the constructor
  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
  }

  getClients(): Observable<Client[]> {
    // https://github.com/angular/angularfire2/blob/master/docs/firestore/documents.md
    // get clients with id
    // see snapshotChanges()

    this.clients = this.clientsCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
        return data;
      });
    });

    return this.clients;
  }

  newClient(client: Client) {
    this.clientsCollection.add(client);
  }

}
