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
  cabinetProfiles: CabinetProfileM[] = [];

  constructor(private firestore: AngularFirestore) {
    // Reference to the CabinetProfiles collection
    this.cabinetProfilesCollection =
      firestore.collection<CabinetProfileM>('CabinetProfiles');

    // Load the cabinet profiles when the service is constructed
    this.loadCabinetProfiles();
  }

  private loadCabinetProfiles() {
    // Using snapshotChanges to get the document ID along with the data
    this.cabinetProfilesCollection
      .snapshotChanges()
      .pipe(
        map((actions) =>
          // Transforming each action into an object that includes the document ID and data
          actions.map((a) => ({
            id: a.payload.doc.id,
            ...(a.payload.doc.data() as CabinetProfileM),
          }))
        )
      )
      .subscribe((profiles: CabinetProfileM[]) => {
        // Storing the profiles with document IDs in the service property
        this.cabinetProfiles = profiles;
        console.log(this.cabinetProfiles);
      });
  }
}
