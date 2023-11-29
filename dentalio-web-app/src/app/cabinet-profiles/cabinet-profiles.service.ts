import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CabinetProfileM } from './models/cabinet-profile.model';
import { StaffMemberM } from './models/staff-member.model';
import { ServiceM } from './models/service.model';
import { GalleryImageM } from './models/gallery-image.model';

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
    return this.cabinetProfilesCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => ({
          id: a.payload.doc.id,
          ...(a.payload.doc.data() as CabinetProfileM),
        }))
      )
    );
  }

  public getCabinetProfileById(
    profileId: string
  ): Observable<CabinetProfileM | undefined> {
    const profileDoc: AngularFirestoreDocument<CabinetProfileM> =
      this.cabinetProfilesCollection.doc(profileId);

    return profileDoc.snapshotChanges().pipe(
      switchMap((action) => {
        const data = action.payload.data();
        const id = action.payload.id;

        if (!id) {
          return of(undefined);
        }

        const cabinetProfile = { id, ...data } as CabinetProfileM;

        // Extract and set staff members
        return this.extractAndSetStaff(profileDoc).pipe(
          switchMap((staffMembers) => {
            cabinetProfile.staff = staffMembers;

            // Extract and set services
            return this.extractAndSetServices(profileDoc).pipe(
              switchMap((services) => {
                cabinetProfile.services = services;

                // Extract and set gallery images
                return this.extractAndSetGalleryImages(profileDoc).pipe(
                  map((galleryImages) => {
                    cabinetProfile.gallery = galleryImages;
                    return cabinetProfile;
                  }),
                  catchError((error) => {
                    console.error('Error extracting gallery images:', error);
                    return of(cabinetProfile); // Continue with the profile even if gallery images extraction fails
                  })
                );
              }),
              catchError((error) => {
                console.error('Error extracting services:', error);
                return of(cabinetProfile); // Continue with the profile even if services extraction fails
              })
            );
          }),
          catchError((error) => {
            console.error('Error extracting staff:', error);
            return of(cabinetProfile); // Continue with the profile even if staff extraction fails
          })
        );
      }),
      catchError((error) => {
        console.error('Error fetching profile:', error);
        return of(undefined);
      })
    );
  }

  private extractAndSetStaff(
    profileDoc: AngularFirestoreDocument<CabinetProfileM>
  ): Observable<StaffMemberM[]> {
    return profileDoc
      .collection('staff')
      .valueChanges()
      .pipe(
        map((staffCollection: any[]) =>
          staffCollection.map((staffMember: any) =>
            StaffMemberM.fromJson(staffMember)
          )
        ),
        catchError((error) => {
          console.error('Error extracting staff:', error);
          return of([]); // Return an empty array in case of errors
        })
      );
  }

  private extractAndSetServices(
    profileDoc: AngularFirestoreDocument<CabinetProfileM>
  ): Observable<ServiceM[]> {
    return profileDoc
      .collection('services')
      .get()
      .pipe(
        map((servicesSnapshot) => {
          const servicesList: ServiceM[] = [];

          servicesSnapshot.docs.forEach((serviceDocument) => {
            const categoryServices = serviceDocument.data()?.services ?? [];

            // Iterate through each service in the 'services' array
            categoryServices.forEach((serviceData: ServiceM) => {
              // Add each service to the main list
              servicesList.push(serviceData);
            });
          });

          return servicesList;
        }),
        catchError((error) => {
          console.error('Error extracting services:', error);
          return of([]); // Return an empty array in case of errors
        })
      );
  }

  private extractAndSetGalleryImages(
    profileDoc: AngularFirestoreDocument<CabinetProfileM>
  ): Observable<GalleryImageM[]> {
    return profileDoc
      .collection('Images')
      .get()
      .pipe(
        map((imagesSnapshot) => {
          const imagesList: GalleryImageM[] = [];

          imagesSnapshot.docs.forEach((imageDocument) => {
            const data = imageDocument.data();
            const galleryImage: GalleryImageM = {
              imageUrl: data['imageUrl'] as string,
              order: data['order'] as number,
              toJson: function () {
                return {
                  imageUrl: this.imageUrl,
                  order: this.order,
                };
              },
            };
            imagesList.push(galleryImage);
          });

          // Sort the images by their 'order' property
          imagesList.sort((a, b) => a.order - b.order);

          return imagesList;
        }),
        catchError((error) => {
          console.error('Error extracting gallery images:', error);
          return of([]); // Return an empty array in case of errors
        })
      );
  }
}
