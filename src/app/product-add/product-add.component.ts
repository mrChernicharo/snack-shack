import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  productName = new FormControl('');
  productPrice = new FormControl(0);

  constructor(private service: AppService) {}

  ngOnInit(): void {}

  handleAddProduct() {
    this.service.addProduct(this.productName.value, this.productPrice.value);
  }
}
