import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IClient } from '../utils/constants';

@Component({
  selector: 'app-clients-display',
  templateUrl: './clients-display.component.html',
  styleUrls: ['./clients-display.component.scss'],
})
export class ClientsDisplayComponent implements OnInit {
  @Input() clients: IClient[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
