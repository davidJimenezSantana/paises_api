import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { sharedModule } from './shared/shared.module';
import { appRoutngModule } from './appRoutin.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRoutngModule,
    BrowserModule,
    sharedModule,   
    HttpClientModule 
  ],
  exports:[
    sharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
