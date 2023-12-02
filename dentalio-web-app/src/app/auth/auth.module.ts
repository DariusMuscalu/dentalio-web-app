import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthOptionsComponent } from './auth-options/auth-options.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    AuthOptionsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    AuthOptionsComponent,
  ],
})
export class AuthModule {}
