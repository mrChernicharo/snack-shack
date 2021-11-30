import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService, IClient, IProduct } from './app.service';

export interface MenuProduct {
  productId: number;
  quantity: number;
  clientId: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'snack-shack';
  clients!: IClient[];
  products!: IProduct[];

  @ViewChild('client') clientSelectRef!: ElementRef<HTMLSelectElement>;
  @ViewChild('product') productSelectRef!: ElementRef<HTMLSelectElement>;
  @ViewChild('quantity') quantityInputRef!: ElementRef<HTMLInputElement>;

  currentClientId = 1;
  currentProduct: MenuProduct = { productId: 0, quantity: 0, clientId: 0 };
  selectedProducts: MenuProduct[] = [];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.clients$.subscribe((clients) => (this.clients = clients));
    this.service.products$.subscribe(
      (products) =>
        (this.products = [{ id: 0, name: '', price: 0 }, ...products])
    );
  }

  setClient() {
    const clientName = this.clientSelectRef.nativeElement.value;
    const clientId = this.clients.find((client) => client.name === clientName)
      ?.id as number;
    this.currentClientId = clientId;
    this.currentProduct.clientId = clientId;
  }

  setProduct() {
    const prodName = this.productSelectRef.nativeElement.value;
    const prodId = this.products.find((prod) => prod.name === prodName)?.id;
    this.currentProduct.productId = Number(prodId);
    console.log(this.currentProduct);
  }

  setQuantity() {
    const quantity = this.quantityInputRef.nativeElement.value;
    this.currentProduct.quantity = Number(quantity);
    console.log(this.currentProduct);
  }

  addProduct() {
    this.selectedProducts.push({
      ...this.currentProduct,
      clientId: this.currentClientId,
    });
    this.resetForm();
    console.log(this.selectedProducts);
  }

  resetForm() {
    this.productSelectRef.nativeElement.value = '';
    this.quantityInputRef.nativeElement.value = '';
    this.currentProduct = {
      productId: 0,
      quantity: 0,
      clientId: this.currentClientId,
    };
  }
}
