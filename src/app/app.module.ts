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
import { Quete1Component } from './quete1/quete1.component';
import { Quete2Component } from './quete2/quete2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseComponent,
    NavBarComponent,
    OeufComponent,
    Quete1Component,
    Quete2Component,
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
