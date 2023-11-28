import { Injectable } from '@angular/core';
import { CabinetProfileM } from './models/cabinet-profile.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CabinetProfilesService {
  cabinetProfilesCollection: AngularFirestoreCollection<CabinetProfileM>;

  constructor(private firestore: AngularFirestore) {
    this.cabinetProfilesCollection =
      firestore.collection<CabinetProfileM>('CabinetProfiles');
  }

  public getCabinetProfiles() {
    // Fetch cabinet profiles from Firestore
    return this.cabinetProfilesCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => ({
          id: a.payload.doc.id,
          ...(a.payload.doc.data() as CabinetProfileM),
        }))
      )
    );
  }
}
