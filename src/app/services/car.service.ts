import {Injectable} from '@angular/core';
import {Engine} from './engine.service';
import {Tire} from './tires.services';
import {Body} from './body.service';

@Injectable()
export class Car {
  constructor(public body: Body, public engine: Engine, public tires : Tire) {

  }
}
