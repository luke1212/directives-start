import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HighLighterDirective } from './directive/high-lighter.directive';
import { UnlessDirective } from './directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighLighterDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
