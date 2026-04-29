import { Injectable, Optional } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ContactInterfacer } from '../entities/contact';

@Injectable({
  providedIn: 'root'
})
export class DatafireService {

  private contact: AngularFirestoreCollection<ContactInterfacer>;

  constructor(@Optional() private firebase: AngularFirestore) {
    if (this.firebase) {
      this.contact = this.firebase.collection<ContactInterfacer>('contact');
    }
  }

  garderMessage(newMessage: ContactInterfacer): void {
    if (this.contact) {
      this.contact.add(newMessage);
    }
  }
}
