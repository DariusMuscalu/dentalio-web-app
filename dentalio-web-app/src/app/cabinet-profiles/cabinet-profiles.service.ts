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
  selectedCabinetProfile: CabinetProfileM | undefined;

  constructor(private firestore: AngularFirestore) {
    this.cabinetProfilesCollection =
      firestore.collection<CabinetProfileM>('CabinetProfiles');

    // Load all profiles (optional, if you want to keep the list updated)
    this.loadCabinetProfiles();

    // Load the selected profile by ID
    this.loadSelectedCabinetProfile('n3alAdTk2ye5Ukcqe1PmJ44TZ3J2');
  }

  private loadCabinetProfiles() {
    this.cabinetProfilesCollection
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => ({
            id: a.payload.doc.id,
            ...(a.payload.doc.data() as CabinetProfileM),
          }))
        )
      )
      .subscribe((profiles: CabinetProfileM[]) => {
        this.cabinetProfiles = profiles;
      });
  }

  private loadSelectedCabinetProfile(profileId: string): void {
    const profileDoc = this.cabinetProfilesCollection.doc(profileId);

    profileDoc
      .snapshotChanges()
      .pipe(
        map((a) => ({
          id: a.payload.id,
          ...(a.payload.data() as CabinetProfileM),
        }))
      )
      .subscribe((profile: CabinetProfileM) => {
        console.log('Received cabinet profile data:', profile);
        this.selectedCabinetProfile = profile;
      });
  }
}
