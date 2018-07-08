import { Component, OnInit } from '@angular/core';
import {Party} from "../../model/party";

@Component({
  selector: 'app-new-parsel',
  templateUrl: './new-parsel.component.html',
  styleUrls: ['./new-parsel.component.scss']
})
export class NewParselComponent implements OnInit {

    title = 'Создание отправления';
    status = 1;
    custFrom = new Party;
    custTo = new Party;

  constructor() { }

  ngOnInit() {
  }

    stepBack() {
      if (this.status === 1) {
        return;
      } else {
          this.status = this.status - 1;
      }
    }

    stepForward() {
      if (this.status === 3) {
          return;
      }
        this.status = this.status + 1;
    }

}
