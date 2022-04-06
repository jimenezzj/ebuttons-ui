import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './UI/card/card.component';
import { ButtonComponent } from './UI/button/button.component';
import { InputFieldComponent } from './UI/form/input-field/input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
