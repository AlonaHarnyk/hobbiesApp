import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HobbiesListComponent } from './components/hobbies-list/hobbies-list.component';
import { HobbyDetailsComponent } from './components/hobby-details/hobby-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HobbiesListComponent,
    HobbyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
