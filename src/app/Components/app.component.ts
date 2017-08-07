import {Component, Inject} from '@angular/core';
import {TodosComponent} from './todos.components';
import {Car} from "../services/car.service";
import {Engine} from "../services/engine.service";
import {Body} from "../services/body.service";
import {Tire} from "../services/tires.services";

@Component({
  selector: 'app-root',
  template: `<h1> Mi Primera Aplicaci&oacute;n Angular 2 </h1>
             <my-component></my-component>
             <todos></todos>
            <br/>`,
  providers : [Car, Body, Engine, Tire]
})
export class AppComponent {
  color : string;
  title = 'My First Angular App Prueba';

  constructor(@Inject(Car) c) {
    this.color = c.body.color;
  }
}
