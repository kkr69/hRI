// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { CrudComponent } from './crud/crud.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     RegistrationComponent,
//     CrudComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CrudComponent } from './crud/crud.component';

const appRoutes: Routes = [
  { path: 'Register', component: RegistrationComponent },
  { path: 'CRUD', component: CrudComponent },
  { path: 'home', component: AppComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
     // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
        RegistrationComponent,
    CrudComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
