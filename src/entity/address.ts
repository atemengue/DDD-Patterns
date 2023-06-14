/** @format */

export default class Address {
  _id: string;
  _street: string = '';
  _number: number = 0;
  _zip: string = '';
  _city: string = '';
  _country: string = '';
  _active: boolean = false;

  constructor(
    id: string,
    street: string,
    number: number,
    zip: string,
    city: string,
    country: string
  ) {
    this._id = id;
    this._street = street;
    this._number = number;
    this._zip = zip;
    this._country = country;
    this._city = city;
    this.validate();
  }

  validate() {
    if (this._street.length === 0) {
      throw new Error('Street is required');
    }
    if (this._number) {
      throw new Error('Number is required');
    }
    if (this._city.length === 0) {
      throw new Error('City is required');
    }
    if (this._country.length === 0) {
      throw new Error('Country is required');
    }
  }
}
