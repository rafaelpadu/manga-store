import {TuiAlertModule, TuiDialogModule, TuiRootModule} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
