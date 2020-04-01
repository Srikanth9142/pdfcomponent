import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PdfcomponentComponent } from './pdfcomponent/pdfcomponent.component';
import { TextbooklistComponent } from './textbooklist/textbooklist.component';
import { LoginComponent }from './login/login.component';
import { ProfileComponent }from './profile/profile.component';
export const rootRouterConfig:Routes=[
	{path:'view',component:PdfcomponentComponent},
	{path:'list',component:TextbooklistComponent},
	{path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},

];
@NgModule({
  declarations: [],
 
  imports: [
    RouterModule.forRoot(rootRouterConfig)

  ],

  exports:[
  	RouterModule
  ]
})
export class AppRoutingModule { }
