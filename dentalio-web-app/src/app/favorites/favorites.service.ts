import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  getUserFavoritesIds(): Observable<string[] | null> {
    return this.authService.auth.user.pipe(
      switchMap((user) => {
        if (user) {
          const userId = user.uid;
          return this.firestore
            .doc<any>(`Users/${userId}`)
            .get()
            .pipe(
              map((documentSnapshot) => {
                if (documentSnapshot.exists) {
                  const data = documentSnapshot.data();
                  const favorites = data?.favorites || [];
                  return favorites.map((favorite: any) => favorite.toString());
                } else {
                  console.error('Document does not exist in Firestore');
                  return null;
                }
              }),
              catchError((error) => {
                console.error(
                  'Error retrieving user favorites from Firestore:',
                  error
                );
                return null;
              })
            );
        } else {
          // User is not logged in
          return [];
        }
      })
    );
  }
}
