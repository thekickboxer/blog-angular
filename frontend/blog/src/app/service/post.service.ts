import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('http://localhost:3000/posts')
  }

  getPostsPorNome(nome: string) {
    return this.http.get('http://localhost:3000/posts?nome=' + nome)
  }

  postMensagem(post: Post) {
    return this.http.post('http://localhost:3000/posts', post)
  }

}
