import { Component, OnInit } from '@angular/core';
import {ListService} from "../../services/list.service";
import {Router} from "@angular/router";

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
    this.list.createList(listTitle).subscribe();
    this.router.navigateByUrl('/').then();
  }

}
