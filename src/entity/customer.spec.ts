/** @format */

import Customer from './customer';

describe('Customer unit tests', () => {
  it('Should throw error when id is empty', () => {
    expect(() => {
      let customer = new Customer('', 'John');
    }).toThrowError('Id is required');
  });

  it('Should change name', () => {
    // Arrange
    const customer = new Customer('1234', 'Regis');

    // Arrange
    customer.changeName('regis');

    // Assert
    expect(customer.name).toBe('regis');
  });
});
