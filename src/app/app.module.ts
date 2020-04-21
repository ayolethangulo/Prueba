import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule} from '@angular/forms';
import { PruebaRegistroComponent } from '../prueba/prueba-registro/prueba-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    PruebaRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
