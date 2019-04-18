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
        component: Quete2Component
        },
        {
        path: 'quete2',
          component: Quete1Component
          }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
