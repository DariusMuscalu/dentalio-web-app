import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
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

  addToFavorites(profileId: string): Observable<boolean> {
    return this.authService.auth.user.pipe(
      switchMap((user) => {
        if (user) {
          const userId = user.uid;
          return this.firestore
            .doc<any>(`Users/${userId}`)
            .valueChanges()
            .pipe(
              take(1),
              switchMap((userData) => {
                const currentFavorites = userData?.favorites || [];
                if (!currentFavorites.includes(profileId)) {
                  const updatedFavorites = [...currentFavorites, profileId];
                  return this.firestore
                    .doc<any>(`Users/${userId}`)
                    .update({
                      favorites: updatedFavorites,
                    })
                    .then(() => true)
                    .catch((error) => {
                      console.error('Error adding to favorites:', error);
                      return false;
                    });
                } else {
                  console.warn('Profile already in favorites');
                  return of(true); // Return true if the profile is already in favorites
                }
              })
            );
        } else {
          console.error('User is not logged in');
          return of(false);
        }
      })
    );
  }

  removeFromFavorites(profileId: string): Observable<boolean> {
    return this.authService.auth.user.pipe(
      switchMap((user) => {
        if (user) {
          const userId = user.uid;
          return this.firestore
            .doc<any>(`Users/${userId}`)
            .valueChanges()
            .pipe(
              take(1),
              switchMap((userData) => {
                const currentFavorites = userData?.favorites || [];
                const updatedFavorites = currentFavorites.filter(
                  (id) => id !== profileId
                );
                return this.firestore
                  .doc<any>(`Users/${userId}`)
                  .update({
                    favorites: updatedFavorites,
                  })
                  .then(() => true)
                  .catch((error) => {
                    console.error('Error removing from favorites:', error);
                    return false;
                  });
              })
            );
        } else {
          console.error('User is not logged in');
          return of(false);
        }
      })
    );
  }
}
