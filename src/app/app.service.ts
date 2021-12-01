import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  IClient,
  initialClients,
  IProduct,
  initialProducts,
  IOrder,
  initialOrders,
  idGen,
} from './utils/constants';

@Injectable({ providedIn: 'root' })
export class AppService {
  private clientsSubj$ = new BehaviorSubject<IClient[]>(initialClients);
  public clients$ = this.clientsSubj$.asObservable();

  private productsSubj$ = new BehaviorSubject<IProduct[]>(initialProducts);
  public products$ = this.productsSubj$.asObservable();

  private ordersSubj$ = new BehaviorSubject<IOrder[]>(initialOrders);
  public orders$ = this.ordersSubj$.asObservable();

  private selectedClientSubj$ = new BehaviorSubject<IClient | null>(null);
  public selectedClient$ = this.selectedClientSubj$.asObservable();

  private selectedProductSubj$ = new BehaviorSubject<IProduct | null>(null);
  public selectedProduct$ = this.selectedProductSubj$.asObservable();

  private selectedOrderSubj$ = new BehaviorSubject<IOrder | null>(null);
  public selectedOrder$ = this.selectedOrderSubj$.asObservable();

  constructor() {
    this.clients$.subscribe(console.log);
  }

  addClient(name: string) {
    const id = <number>idGen('client').next().value;

    this.clientsSubj$.next([...this.clientsSubj$.getValue(), { id, name }]);
  }

  addProduct(name: string, price: number) {
    const id = <number>idGen('product').next().value;

    // prettier-ignore
    this.productsSubj$.next([...this.productsSubj$.getValue(), { id, name, price }])
  }
}
