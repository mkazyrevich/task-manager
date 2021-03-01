import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IList} from '../interfaces/list.interface';
import {mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: root,
})
export class ListService {
  private readonly ROOT_URL = 'http://localhost:3000';

  public constructor(
    private http: HttpClient
  ) {
  }

  public getLists(): Observable<IList[]> {
    return this.http.get<IList[]>(this.getUrl('lists'));
  }

  public createList(title: string): Observable<IList> {
    return this.http.post<IList>(this.getUrl('lists'), {
      title,
    });
  }

  private getUrl(url: string): string {
    return `${this.ROOT_URL}/${url}`;
  }
}
