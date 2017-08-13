import {Component, Inject, NgModule} from '@angular/core';
import {TodosComponent} from './todos.components';
import {Car} from "../services/car.service";
import {Engine} from "../services/engine.service";
import {Body} from "../services/body.service";
import {Tire} from "../services/tires.services";
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-root',
  template: `<h1> Mi Primera Aplicaci&oacute;n Angular 2 </h1>
             <my-component></my-component>
             <my-form></my-form>
             <todos></todos>
            <br/>`,
  providers : [Car, Body, Engine, Tire]
})
const appRoutes = [{ path: 'photos', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },]

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)]
});

export class AppComponent {
  color : string;
  title = 'My First Angular App Prueba';

  constructor(@Inject(Car) c) {
    this.color = c.body.color;
  }
}
