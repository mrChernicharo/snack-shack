import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../utils/constants';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss'],
})
export class ProductsDisplayComponent implements OnInit {
  @Input() products: IProduct[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
