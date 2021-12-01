import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'snack-shack';
  // clientName = new FormControl('');

  constructor(public service: AppService) {}

  ngOnInit() {}

  // handleClientAdd() {
  //   this.service.addClient(this.clientName.value);
  // }
}
