import {Component} from '@angular/core';

@Component({
  selector : 'todos',
  template : `
      <h1>My Todos {{newTodo}}</h1>
      <div *ngIf="errorMsg">
        <div class="alert alert-danger">{{errorMsg}}</div>
      </div>
      <div *ngIf="succesMsg">
        <div class="alert alert-success">{{succesMsg}}</div>
      </div>
      <div>
        <input type="text" class="form-control"  [(ngModel)]="newTodo" (keyup.enter)="addTodo()"/>
        <br/>
      </div>
      <div *ngIf="todos">
        {{todos}}
      </div>
    <div [ngSwitch]="name">
      <div *ngSwitchCase="'Rafael'">
          Rafael
      </div>
      <div *ngSwitchCase="'Bryan'">
        Rafael
      </div>
      <div *ngSwitchCase="'Diego'">
        Rafael
      </div>
      <div *ngSwitchDefault>
        Marluvy
      </div>
    </div>
    <ul class="list-group">  
      <li *ngFor="let x of arreglo" class="list-group-item">
        <a href="#" (dblclick)="removeTodo(x)">{{x}}</a> 
     </li>
    </ul>
    <button class="btn btn-default" (click)="resetTodos()">Reset</button>
  `
})

export class TodosComponent{
  todos;
  name;
  arreglo;
  newTodo;
  errorMsg;
  succesMsg;
  constructor() {
    this.todos = 'hello';
    this.name = 'Rafael';
    this.arreglo = ['Lavar los platos', 'Recoger los niños', 'Comer la cena'];
  }

  addTodo() {
    if (!this.newTodo || this.newTodo.length < 3) {
      this.errorMsg = 'Debe ser mayor a 3 caracteres';
    } else {
      this.arreglo.push(this.newTodo);
      this.errorMsg = '';
      this.succesMsg = 'Todo added';
    }
  }

  removeTodo(p) {
    console.log(p);
    this.arreglo.splice(this.arreglo.indexOf(p), 1);
  }

  resetTodos() {
    this.arreglo.length = 0;
    this.succesMsg = 'Todos Cleared';
    this.newTodo = '';
  }
}

