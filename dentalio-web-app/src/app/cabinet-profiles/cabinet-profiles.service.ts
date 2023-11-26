import { Injectable } from '@angular/core';
import { CabinetProfileM } from './models/cabinet-profile.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

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
    this.cabinetProfilesCollection
      .valueChanges()
      .subscribe((profiles: any[]) => {
        // Clear the existing profiles
        this.cabinetProfiles = [];

        // Iterate through the profiles and convert each to CabinetProfileModel
        profiles.forEach((profile) => {
          const convertedProfile: CabinetProfileM =
            CabinetProfileM.fromJson(profile);
          this.cabinetProfiles.push(convertedProfile);

          console.log(this.cabinetProfiles);
        });
      });
  }
}
