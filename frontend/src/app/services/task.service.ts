import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IList} from '../interfaces/list.interface';
import {ITask} from '../interfaces/task.interface';

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

  public getTasks(listId: string): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.getUrl(`lists/${listId}/tasks`));
  }

  public createTask(title: string): Observable<ITask> {
    return this.http.post<ITask>(this.getUrl('lists'), {
      title,
    });
  }

  private getUrl(url: string): string {
    return `${this.ROOT_URL}/${url}`;
  }
}

