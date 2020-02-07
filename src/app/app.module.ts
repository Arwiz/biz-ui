import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule } from '@angular/material/slider'
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProviderComponent } from './provider/provider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

import { DetailProviderComponent } from './detail-provider/detail-provider.component';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    ProviderComponent,
    
    DetailProviderComponent,
    
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatGridListModule,
    HttpClientModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
