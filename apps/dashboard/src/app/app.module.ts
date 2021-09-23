import { CoreStateModule } from '@make-app/core-state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiLibraryModule } from '@make-app/ui-library';
import { MaterialModule } from '@make-app/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegesComponent } from './colleges/colleges.component';
import { CollegesListComponent } from './colleges/colleges-list/colleges-list.component';
import { CollegeDetailsComponent } from './colleges/college-details/college-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@make-app/core-data';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CollegesComponent,
    CollegesListComponent,
    CollegeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLibraryModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    CoreStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
