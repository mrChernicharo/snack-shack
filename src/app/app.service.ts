import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface IClient {
  id: number;
  name: string;
}
export interface IProduct {
  id: number;
  name: string;
  price: number;
}
export interface IOrder {
  id: number;
  clientId: number;
  productsIds: number[];
}

@Injectable({ providedIn: 'root' })
export class AppService {
  private clients: IClient[] = [
    { id: 1, name: 'Zé' },
    { id: 2, name: 'Maru' },
    { id: 3, name: 'Jana' },
  ];
  private products: IProduct[] = [
    { id: 1, name: 'Taco', price: 10 },
    { id: 2, name: 'Pizza', price: 18 },
    { id: 3, name: 'Soda', price: 3 },
  ];
  private orders: IOrder[] = [
    { id: 1, clientId: 1, productsIds: [1, 3] },
    { id: 2, clientId: 2, productsIds: [2, 3] },
    { id: 3, clientId: 3, productsIds: [1] },
    { id: 4, clientId: 1, productsIds: [1, 2, 3, 3] },
  ];

  private clientsSubj$ = new BehaviorSubject<IClient[]>(this.clients);
  public clients$ = this.clientsSubj$.asObservable();

  private productsSubj$ = new BehaviorSubject<IProduct[]>(this.products);
  public products$ = this.productsSubj$.asObservable();

  private ordersSubj$ = new BehaviorSubject<IOrder[]>(this.orders);
  public orders$ = this.ordersSubj$.asObservable();

  constructor() {}
}
