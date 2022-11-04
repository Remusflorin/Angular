import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { EditAnimalsComponent } from './edit-animals/edit-animals.component';
import { ViewAnimalsComponent } from './view-animals/view-animals.component';
import { AddAnimalsComponent } from './add-animals/add-animals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    EditAnimalsComponent,
    ViewAnimalsComponent,
    AddAnimalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
