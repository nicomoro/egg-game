import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChooseComponent } from './choose/choose.component';
import { EggsBankComponent } from './eggs-bank/eggs-bank.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { OeufComponent } from './oeuf/oeuf.component';
import { LootComponent } from './loot/loot.component';
import { EggDetailComponent } from './egg-detail/egg-detail.component';
import { MyComponent } from './my-eggs/my.component';
import { Quete2Component } from './quete2/quete2.component';
import { Quete1Component } from './quete1/quete1.component';
import { Quete3Component } from './quete3/quete3.component';
import { Quete4Component } from './quete4/quete4.component';
import { Quete5Component } from './quete5/quete5.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'choose', component: ChooseComponent },
  {
    path: 'profile/:id',
    component: NavBarComponent,
    children: [
      {
        path: '',
        component: OeufComponent,
      },
      {
        path: 'loot',
        component: LootComponent,
      },
      { path: 'eggsBank',
      component: EggsBankComponent
    },
    { path: 'eggdetail/:id', 
    component: EggDetailComponent },
    { path: 'myeggs',
    component: MyComponent },
    {
      path: 'quete1',
      component: Quete1Component
    },
    {
      path: 'quete2',
      component: Quete2Component
    },
    {
      path: 'quete3',
      component: Quete3Component
    },
    {
      path: 'quete4',
      component: Quete4Component
    },
    {
      path: 'quete5',
      component: Quete5Component
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
