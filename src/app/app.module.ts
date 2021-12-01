import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientsDisplayComponent } from './clients-display/clients-display.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientAddComponent,
    ClientsDisplayComponent,
    ProductSelectionComponent,
    ProductAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
