import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHUComponent } from './component-hu/component-hu.component';
import { ComponentProgrammersComponent } from './component-programmers/component-programmers.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHUComponent,
    ComponentProgrammersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
