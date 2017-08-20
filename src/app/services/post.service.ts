import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PostDTO} from '../model/PostDTO';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
  private postUrl = 'http://jsonplaceholder.typicode.com/posts';
  constructor( private http : HttpClient) {

  }

  getPosts(): Observable<PostDTO[]> {
    return this.http.get(this.postUrl)
      .map(res => res);
  }
}
