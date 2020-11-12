import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesListComponent } from './components/hobbies-list/hobbies-list.component';
import { HobbyDetailsComponent } from './components/hobby-details/hobby-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
    {
    path: 'hobbies-list',
    component: HobbiesListComponent,
  },
        {
    path: 'hobby-details/:id',
    component: HobbyDetailsComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
