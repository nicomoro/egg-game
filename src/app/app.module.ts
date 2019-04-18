import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Quete1Component } from './quete1/quete1.component';
import { Quete2Component } from './quete2/quete2.component';
import { EggDetailComponent } from './egg-detail/egg-detail.component';
import { MyComponent } from './my-eggs/my.component';
import { Quete3Component } from './quete3/quete3.component';
import { Quete4Component } from './quete4/quete4.component';
import { Quete5Component } from './quete5/quete5.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseComponent,
    NavBarComponent,
    OeufComponent,
    WelcomeComponent,
    EggsBankComponent,
    LootComponent,
    Quete1Component,
    Quete2Component,
    EggDetailComponent,
    MyComponent,
    Quete3Component,
    Quete4Component,
    Quete5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
