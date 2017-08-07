import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './Components/app.component';
import { MyComponent} from './Components/my-component.component';
import {TodosComponent} from "./Components/todos.components";

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
