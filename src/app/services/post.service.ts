import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";


@Injectable()
export class PostService {
  private postUrl = 'http://jsonplaceholder.typicode.com/posts';
  constructor( private http : HttpClient) {

  }

  getPosts(): Observable<Post[] {
    return this.http.get(this.url)
      .map(res => res.json);

  }
}
