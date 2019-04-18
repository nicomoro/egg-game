import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChooseComponent } from './choose/choose.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'choose', component: ChooseComponent },
  { path: 'profile/:id', component: ChooseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
