import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  @HostBinding('style.border') border = '1px solid green';

  colors = ['red', 'orange', 'orangered', 'gold', 'violet', 'indigo'];
  clientName = new FormControl('');

  constructor(private service: AppService) {}

  ngOnInit() {
    interval(2000)
      .pipe(map((val) => val % this.colors.length))
      .subscribe((val) => (this.border = `1px solid ${this.colors[val]}`));
  }

  handleClientAdd() {
    this.service.addClient(this.clientName.value);
  }
}
