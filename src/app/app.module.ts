import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { BuildmenuComponent } from './buildmenu/buildmenu.component';
import { FormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    BuildmenuComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
