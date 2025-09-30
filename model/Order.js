export default class Order {
  constructor(order_id, date, customer_id, total) {
    this._order_id = order_id;
    this._date = date;
    this._customer_id = customer_id;
    this._total = total;
  }

  get order_id() {
    return this._order_id;
  }
  set order_id(order_id) {
    this._order_id = order_id;
  }
  get date() {
    return this._date;
  }
  set date(date) {
    this._date = date;
  }
  get customer_id() {
    return this._customer_id;
  }
  set customer_id(customer_id) {
    this._customer_id = customer_id;
  }
  get total() {
    return this._total;
  }
  set total(total) {
    this._total = total;
  }
}
