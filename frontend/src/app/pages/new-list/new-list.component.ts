import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service';
import {Router} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {IList} from '../../interfaces/list.interface';

@UntilDestroy()
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(
    private readonly list: ListService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  public createList(listTitle: string): void {
    this.list.createList(listTitle)
      .pipe(untilDestroyed(this))
      .subscribe((list: IList) => {
        this.router.navigate([ '/lists', list._id ])
          .catch(console.log);
      });
  }

}
