import {Component, OnInit} from '@angular/core';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';
import {IList} from '../../interfaces/list.interface';
import {ITask} from '../../interfaces/task.interface';
import {TaskService} from '../../services/task.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  public lists$!: Observable<IList[]>;
  public tasks$!: Observable<ITask[]>;

  constructor(
    private readonly list: ListService,
    private readonly task: TaskService,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.lists$ = this.list.getLists();
    this.route.params.subscribe((params: Params) => {
      this.tasks$ = this.task.getTasks(params.listId);
    });
  }

  public createList(): void {
  }

}

