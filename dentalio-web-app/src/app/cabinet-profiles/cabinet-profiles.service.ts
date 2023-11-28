import { Injectable } from '@angular/core';
import { CabinetProfileM } from './models/cabinet-profile.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CabinetProfilesService {
  cabinetProfilesCollection: AngularFirestoreCollection<CabinetProfileM>;

  constructor(private firestore: AngularFirestore) {
    this.cabinetProfilesCollection =
      firestore.collection<CabinetProfileM>('CabinetProfiles');
  }

  public getCabinetProfiles(): Observable<CabinetProfileM[]> {
    // Fetch cabinet profiles from Firestore
    return this.cabinetProfilesCollection.snapshotChanges().pipe(
      map(
        (actions) =>
          actions.map((a) => ({
            id: a.payload.doc.id,
            ...(a.payload.doc.data() as CabinetProfileM),
          })) as CabinetProfileM[]
      )
    );
  }

  public getCabinetProfileById(
    profileId: string
  ): Observable<CabinetProfileM | undefined> {
    const profileDoc = this.cabinetProfilesCollection.doc(profileId);

    return profileDoc.snapshotChanges().pipe(
      map((a) => {
        const data = a.payload.data();
        const id = a.payload.id;
        return id ? ({ id, ...data } as CabinetProfileM) : undefined;
      })
    );
  }
}
