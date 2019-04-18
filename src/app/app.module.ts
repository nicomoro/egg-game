import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseComponent } from './choose/choose.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OeufComponent } from './oeuf/oeuf.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EggsBankComponent } from './eggs-bank/eggs-bank.component';
import { LootComponent } from './loot/loot.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseComponent,
    NavBarComponent,
    OeufComponent,
    WelcomeComponent,
    EggsBankComponent,
    LootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
