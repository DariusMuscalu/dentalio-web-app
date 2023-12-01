import { Injectable, NgZone } from '@angular/core';
import { UserM } from './user.model';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from 'src/app/profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: UserM | null = null;

  private isVisibleSubject = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject.asObservable();

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private profileService: ProfileService
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = {
          uid: user.uid,
          email: user.email || '',
          name: user.displayName || '',
          photoURL: user.photoURL || '',
          emailVerified: user.emailVerified || false,
        };
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        this.userData = null;
        localStorage.setItem('user', 'null');
      }
    });
  }

  // TODO Maybe this should be moved to a separate visibility service.
  toggleAuthModalVisibility() {
    this.isVisibleSubject.next(!this.isVisibleSubject.value);
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.auth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['profile']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.profileService.createUserInDb(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.auth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.auth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // TODO Google sign in is not working for the moment. I have to understand the API in order to make changes.

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['profile']);
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['profile']);
        this.profileService.createUserInDb(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Sign out
  SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}
