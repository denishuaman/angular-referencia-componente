import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VarRefPlantillaComponent } from './var-ref-plantilla/var-ref-plantilla.component';
import { PadreViewChildComponent } from './padre-view-child/padre-view-child.component';
import { HijoViewChildComponent } from './hijo-view-child/hijo-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    VarRefPlantillaComponent,
    PadreViewChildComponent,
    HijoViewChildComponent
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
