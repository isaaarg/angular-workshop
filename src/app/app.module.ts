import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { PokeapiService } from './pokeapi.service';
import { PkComponent } from './pk/pk.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    SimpsonComponent,
    PkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
