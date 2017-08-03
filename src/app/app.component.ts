import { Component } from '@angular/core';
import {TodosComponent} from './todos.components';

@Component({
  selector: 'app-root',
  template: `<h1> Mi Primera Aplicaci&oacute;n Angular 2 </h1>
             <my-component></my-component>
             <todos></todos>
            <br/>`
})
export class AppComponent {
  title = 'My First Angular App Prueba';
}
