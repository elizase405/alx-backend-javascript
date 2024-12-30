import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set code(newAmount) {
    this._amount = newAmount;
    return this._amount;
  }

  get currency() {
    return this._name;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
