import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: root,
})
export class TaskService {
  private readonly ROOT_URL;

  public constructor(

    private http: HttpClient
  ) {
    this.ROOT_URL = 'http://localhost:3000';
  }
}

