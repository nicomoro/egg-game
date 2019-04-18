import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChooseComponent } from './choose/choose.component';
import { EggsBankComponent } from './eggs-bank/eggs-bank.component';
<<<<<<< Updated upstream
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { OeufComponent } from './oeuf/oeuf.component';
import { LootComponent } from './loot/loot.component';
=======
import { EggDetailComponent } from './egg-detail/egg-detail.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'choose', component: ChooseComponent },
<<<<<<< Updated upstream
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
      }
    ]
  }
];
=======
  { path: 'profile/:id', component: ChooseComponent },
  { path: 'eggsBank', component: EggsBankComponent },
  { path: 'eggsBank/:id', component: EggDetailComponent },
]
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
