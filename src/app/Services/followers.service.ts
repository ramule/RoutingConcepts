import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http : HttpClient) { }

  getFollowers(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
