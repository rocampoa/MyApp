import {Component, Inject, NgModule} from '@angular/core';
import {TodosComponent} from './todos.components';
import {Car} from '../services/car.service';
import {Engine} from '../services/engine.service';
import {Body} from '../services/body.service';
import {Tire} from '../services/tires.services';


@Component({
  selector: 'app-root',
  template: `<h1> Mi Primera Aplicaci&oacute;n Angular 2 </h1>
             <nav>
               <a routerLink="photos">Fotos</a>
               <a routerLink="videos">Videos</a>
               <a routerLink="albums">Albums</a>
             </nav>
             <router-outlet> </router-outlet>
             <post-component></post-component>
             <my-component></my-component>
             <my-form></my-form>
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
