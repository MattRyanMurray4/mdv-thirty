import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegesComponent } from './colleges/colleges.component';
import { CollegesListComponent } from './colleges/colleges-list/colleges-list.component';
import { CollegeDetailsComponent } from './colleges/college-details/college-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CollegesComponent, CollegesListComponent, CollegeDetailsComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
