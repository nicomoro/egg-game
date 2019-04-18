import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChooseComponent } from './choose/choose.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'choose', component: ChooseComponent },
  { path: 'profile/:id', component: NavBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
