import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import {  RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent  },
  { path: 'about', component: DirectoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     DirectoryComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,      // <-- Here is why ngModel is recognized
    HttpModule,
     RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
