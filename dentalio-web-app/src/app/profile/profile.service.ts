import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserM } from '../shared/services/user.model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  public createUserInDb(user: any): Promise<void> {
    const userRef: AngularFirestoreDocument<UserM> = this.firestore.doc(
      `Users/${user.uid}`
    );
    const userData: UserM = {
      uid: user.uid,
      email: user.email || '',
      name: user.displayName || '',
      photoURL: user.photoURL || '',
      emailVerified: user.emailVerified || false,
    };

    return userRef.set(userData, { merge: true });
  }

  public async updateUserData(updatedData: UserM): Promise<void> {
    const user = await this.auth.currentUser;
    if (user) {
      const userRef: AngularFirestoreDocument<UserM> = this.firestore.doc(
        `Users/${user.uid}`
      );

      const userData: UserM = {
        uid: user.uid,
        email: user.email || '',
        name: user.displayName || '',
        photoURL: user.photoURL || '',
        emailVerified: user.emailVerified || false,
        ...updatedData,
      };

      try {
        await userRef.set(userData, { merge: true });
      } catch (error) {
        console.error('Failed to update user data:', error);
      }
    } else {
      console.log('User not logged in.');
    }
  }

  public getUserData(): Observable<UserM | undefined> {
    return this.auth.user.pipe(
      switchMap((user) =>
        user
          ? this.firestore.doc<UserM>(`Users/${user.uid}`).valueChanges()
          : of<UserM | undefined>(undefined)
      )
    );
  }
}
