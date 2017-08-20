import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector : 'post-component',
  template: `
    <h1> Post </h1>
    <div> <code>{{response}}</code></div>
  `
})

export class PostComponent {
  url;
  response;
  constructor(private http: HttpClient) {
    this.url = 'http://jsonplaceholder.typicode.com/posts';
    http.get(this.url)
      .subscribe((data) => {
        console.log('Entro');
        this.response = JSON.stringify(data);
      });
  }
}
