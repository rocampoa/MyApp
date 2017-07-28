import {Component} from '@angular/core';



@Component({
  selector: 'my-component',
  template: `
    <h1>Hola Mundo porque no lo toma {{name}}</h1>
    <img [src]="imageUrl"/>
    <br/>
    <button [class.isActive] = "isActive" (click)="changeColor()" >Button</button>
    <button [style.background-color] = "isActive ? 'red': 'blue'" (click)="changeMessage()">Button 2</button>
    <h1>{{clickMessage}}</h1>
    <br/>
    <input type="text" [(ngModel)]="name" (ngModelChange)="setUpperCase($event)"/>`,
})

export class MyComponent {
   name;
   imageUrl;
   isActive;
   clickMessage;
   constructor() {
     this.name = 'Rafael Ocampo Antero';
     this.imageUrl = 'http://lorempixel.com/400/200/';
     this.isActive = true;
   }

   changeMessage() {
     this.clickMessage = 'Hola hizo click' + this.name;
   }

   changeColor() {
     this.isActive = !this.isActive;
   }
   setUpperCase(e) {
     this.name = e.toUpperCase();
   }
}
