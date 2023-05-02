import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { sharedModule } from './shared/shared.module';
import { appRoutngModule } from './appRoutin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    sharedModule,
    appRoutngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
