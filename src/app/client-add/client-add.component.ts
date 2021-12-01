import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';
import { colors } from '../utils/constants';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss'],
})
export class ClientAddComponent implements OnInit {
  @HostBinding('style.border') border = `1px solid ${colors[0]}`;

  clientName = new FormControl('');

  constructor(private service: AppService) {}

  ngOnInit() {
    interval(2000)
      .pipe(map((val) => val % colors.length))
      .subscribe((val) => (this.border = `1px solid ${colors[val]}`));
  }

  handleClientAdd() {
    this.service.addClient(this.clientName.value);
  }
}
