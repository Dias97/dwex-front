import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-parsel',
  templateUrl: './list-parsel.component.html',
  styleUrls: ['./list-parsel.component.scss']
})
export class ListParselComponent implements OnInit {

    title = 'Мои посылки';

  constructor(private router: Router) { }

  ngOnInit() {
  }

    openNewParcel() {
      this.router.navigate(['new-parsel']);
    }
}
