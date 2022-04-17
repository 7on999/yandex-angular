import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdvAndDzenComponent } from './adv-and-dzen/adv-and-dzen.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { AsideComponent } from './aside/aside.component';
import { ListIconComponent } from './list-icon/list-icon.component';
import { MiddleBlockComponent } from './middle-block/middle-block.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { WeatherAndTraficComponent } from './weather-and-trafic/weather-and-trafic.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdvAndDzenComponent,
    AdvertisingComponent,
    AsideComponent,
    ListIconComponent,
    MiddleBlockComponent,
    MainBlockComponent,
    WeatherAndTraficComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
