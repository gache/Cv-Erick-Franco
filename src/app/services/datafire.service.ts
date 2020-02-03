import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ContactInterfacer } from '../entities/contact';

@Injectable({
  providedIn: 'root'
})
export class DatafireService {

  private contact: AngularFirestoreCollection<ContactInterfacer>;

  constructor(private firebase: AngularFirestore) {
    this.contact = this.firebase.collection<ContactInterfacer>('contact');
  }

  garderMessage(newMessage: ContactInterfacer): void {
    this.contact.add(newMessage);

  }
}
