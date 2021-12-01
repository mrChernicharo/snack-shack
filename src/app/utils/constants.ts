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

export const initialClients: IClient[] = [
  { id: 1, name: 'Zé' },
  { id: 2, name: 'Maru' },
  { id: 3, name: 'Jana' },
];
export const initialProducts: IProduct[] = [
  { id: 1, name: 'Taco', price: 10 },
  { id: 2, name: 'Pizza', price: 18 },
  { id: 3, name: 'Soda', price: 3 },
];
export const initialOrders: IOrder[] = [
  { id: 1, clientId: 1, productsIds: [1, 3] },
  { id: 2, clientId: 2, productsIds: [2, 3] },
  { id: 3, clientId: 3, productsIds: [1] },
  { id: 4, clientId: 1, productsIds: [1, 2, 3, 3] },
];

const ids = { client: 3, product: 3, order: 4 };

export function* idGen(type: 'client' | 'product' | 'order') {
  while (true) {
    ids[type] += 1;

    yield ids[type];
  }
}
