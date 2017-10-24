import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YagaModule } from '@yaga/leaflet-ng2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    YagaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
