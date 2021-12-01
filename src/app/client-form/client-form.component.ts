import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  clientName = new FormControl('');

  constructor(private service: AppService) {}

  ngOnInit() {}

  handleClientAdd() {
    this.service.addClient(this.clientName.value);
  }
}
