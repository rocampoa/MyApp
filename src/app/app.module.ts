import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';

import { AppComponent } from './Components/app.component';
import { MyComponent} from './Components/my-component.component';
import {TodosComponent} from './Components/todos.components';
import {FormaComponent} from './Components/forma.component';
  ;

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    TodosComponent,
    FormaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
