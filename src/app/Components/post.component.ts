import {Component, DoCheck, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../services/post.service';
import {PostDTO} from '../model/PostDTO';

@Component({
  selector : 'post-component',
  template: `
    <h1> Post </h1>
    <div> <code>{{response}}</code></div>
    <button (click)="clickMe()">Click</button>
    <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div *ngFor="let p of post">
      <h3>{{p.title}}</h3>
      <p>{{p.body}}</p>
      <hr/>
      
    </div>
  `
})

export class PostComponent implements OnInit, DoCheck{

  url;
  response;
  post: PostDTO[];
  isLoading:boolean = true;

  constructor(private http: HttpClient, private postService : PostService) {
    this.url = 'http://jsonplaceholder.typicode.com/posts';
    http.get(this.url)
      .subscribe((data) => {
        console.log('Entro');
        this.response = JSON.stringify(data);
      });
  }

  ngOnInit(): void {
    console.log('Desde el Init del PostService');
    this.postService.getPosts().subscribe(posts => {console.log(posts);
    this.isLoading = false;
    this.post = posts;
    });
  }


  ngDoCheck(): void {
    console.log('Docheck has run....');
  }

  clickMe() {
    console.log('clicked');
  }
}
