/** @format */

class Customer {
  _id: string;
  _name: string = '';
  _address: string = '';

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error('Name is required');
    }
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }
  }

  public get id(): string {
    return this._id;
  }

  public get address(): string {
    return this._address;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set id(id: string) {
    this._id = id;
  }
  public set address(address: string) {
    this._address = address;
  }
}
