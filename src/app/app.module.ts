import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularComponentesModule } from './modules/angular-componentes/angular-componentes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularComponentesModule
  ],
  exports: [
    AngularComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
