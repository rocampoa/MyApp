import {Component} from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Post} from './post';


@Component({
  selector : 'todos',
  template : `
    <div class="container">
      <h1>Add Post</h1>
      <form>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" [(ngModel)]="model.title" name="title" required>
          {{model.title}}
        </div>  
      </form>  
    </div>
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
    <h2>{{promise | async}}</h2>  
    <div [ngSwitch]="name">
      <div *ngSwitchCase="'Rafael'">
          Rafael {{fecha | date:"dd/MM/yyyy"}}
      </div>
      <div *ngSwitchCase="'Bryan'">
        Rafael {{fecha | date:"dd/MM/yyyy"}}
      </div>
      <div *ngSwitchCase="'Diego'">
        Rafael {{fecha | date:"dd/MM/yyyy"}} 
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
  `,
  providers : [TodoService]
})

export class TodosComponent{
  todos;
  name;
  arreglo;
  newTodo;
  errorMsg;
  succesMsg;
  fecha : Date = new Date(1975, 3, 15);
  promise;
  categories = ['Technology', 'Business', 'Entertaiment'];
  model = new Post(1, 'Post one', this.categories[0], 'This is the boy', 'Rafael Ocampo');
  submited  = false;
  constructor(private todoService : TodoService) {
    this.todos = todoService.getTodos();
    this.name = 'Rafael';
    this.arreglo = ['Lavar los platos', 'Recoger los niños', 'Comer la cena'];
    this.promise = new Promise(function(resolve, reject){
      setTimeout(function() {
        resolve('Hi, i am promise');
      }, 2000);
    });
  }

  addTodo() {

    if (!this.newTodo || this.newTodo.length < 3) {
      this.errorMsg = 'Debe ser mayor a 3 caracteres';
    } else {
      this.todoService.addTodo(this.newTodo)
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
    this.todoService.resetTodos();
    this.succesMsg = 'Todos Cleared';
    this.newTodo = '';
  }
}

