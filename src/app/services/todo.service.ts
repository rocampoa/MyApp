export class TodoService {

  todos = ['wash dishes', 'go to diner', 'ir a natación'];

  getTodos() {
    return this.todos;
  }

  addTodo(newTodo) {
    this.todos.push(newTodo);
  }

  removeTodo(p) {
    console.log(p);
    this.todos.splice(this.todos.indexOf(p), 1);
  }

  resetTodos() {
    this.todos.length = 0;
  }

}
