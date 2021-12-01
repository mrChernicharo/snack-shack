import { Component, HostBinding, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss'],
})
export class ProductSelectionComponent implements OnInit {
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.border') border = '1px solid royalblue';

  constructor(public service: AppService) {}

  ngOnInit(): void {}
}
