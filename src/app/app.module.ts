import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfcomponentComponent } from './pdfcomponent/pdfcomponent.component';
import { AppRoutingModule } from './app-routing.module';
import { TextbooklistComponent } from './textbooklist/textbooklist.component';
import { LoginComponent } from './login/login.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "ng2-completer";
import {MatDialogModule} from '@angular/material/dialog';

 import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider } from "angular-6-social-login";
import { ProfileComponent } from './profile/profile.component';
import { DialogComponent } from './dialog/dialog.component';
 
 const client_id:string = '413051260737-ln0fa4c6v2g9t2fs0g7vcj1055550lfe.apps.googleusercontent.com';
    
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(client_id)
    }
  ]);

  return config;
  }


@NgModule({
  declarations: [
    AppComponent,
    PdfcomponentComponent,
    TextbooklistComponent,
    LoginComponent,
    ProfileComponent,
    DialogComponent,
  ],
  entryComponents: [DialogComponent,],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    PdfViewerModule,
    AppRoutingModule,
    SocialLoginModule,
    NgxExtendedPdfViewerModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    MatDialogModule,
   HttpClientModule     
  ],
  providers: [
      {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
