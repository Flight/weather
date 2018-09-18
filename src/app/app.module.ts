import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RequestCacheService } from './services/request-cache.service';
import { CachingInterceptor } from './cache.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ForecastComponent } from './forecast/forecast.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RepaintOnScrollDirective } from './directives/repaint-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    NavigationComponent,
    RepaintOnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxChartsModule
  ],
  providers: [
    RequestCacheService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
