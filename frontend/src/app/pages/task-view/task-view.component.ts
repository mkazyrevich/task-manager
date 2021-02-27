import { Component, OnInit } from '@angular/core';
import {ListService} from "../../services/list.service";
import {Observable} from "rxjs";
import {IList} from "../../interfaces/list.interface";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  public lists$!: Observable<IList[]>;

  constructor(
    private list: ListService,
  ) { }

  ngOnInit(): void {
    this.lists$ = this.list.getLists();
  }

  public createList(): void {
    this.list.createList('new list').subscribe();
    this.lists$ = this.list.getLists();
   }

}

