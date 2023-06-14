/** @format */

import Address from './entity/address';
import Customer from './entity/customer';
import Order from './entity/order';
import OrderItem from './entity/order_item';

let customer = new Customer('1234', 'Regis Atemengue');
const address = new Address(
  '1',
  'Yaounde Mendong',
  1231234,
  '93L12',
  'YAOUNDE',
  'CRM'
);

customer.Address = address;

const item1 = new OrderItem('1', 'Item1', 10);
const item2 = new OrderItem('2', 'Item1', 15);

const order = new Order('1', '1234', [item1, item2]);

console.log(customer);
console.log(order);
