// export
class Order {
  constructor(price, city, type) {
    this.id = +(Math.random() * 1e10).toFixed(0);
    this.price = +price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = String(city).trim();
    this.type = String(type).trim();
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

// ===check===
console.log(String('          city'));
console.log(String('          city').trim());
console.log(+(Math.random() * 1e10).toFixed(0));

const order1 = new Order(1200, 'Kyiv', 'Buy');
console.log('dateConfirmed order1: ', typeof order1.dateConfirmed);
console.log('start order1: ', order1);
console.log('order1.isConfirmed: ', order1.isConfirmed);
console.log('order1.checkPrice: ', order1.checkPrice());
console.log('order1.confirmOrder: ', order1.confirmOrder());
console.log('order1.isValidType: ', order1.isValidType());
console.log('finish order1: ', order1);
// console.log('order1.isConfirmed: ', order1.isConfirmed);
console.log('dateCreated order1: ', typeof order1.dateCreated);
console.log('dateConfirmed order1: ', typeof order1.dateConfirmed);
console.log('-----------------------------------------------------');
const order2 = new Order(528, 'London', null);
console.log('start order2: ', order2);
console.log('order2.isConfirmed: ', order2.isConfirmed);
console.log('order2.checkPrice: ', order2.checkPrice());
console.log('order2.confirmOrder: ', order2.confirmOrder());
console.log('order2.isValidType: ', order2.isValidType());
console.log('order2.isConfirmed: ', order2.isConfirmed);
console.log('finish order2: ', order2);
console.log('-----------------------------------------------------');

console.log((this.id = (Math.random() * 1e10).toFixed(0)));
console.log(typeof (this.id = (Math.random() * 1e10).toFixed(0)));

console.log(String('city'));
console.log(typeof String('city'));

console.log(new Date());
console.log(typeof new Date());
console.log(Date.now());
console.log(typeof Date.now());
console.log(Date(Date.now()));
console.log(typeof Date(Date.now()));

console.log(false);
console.log(typeof false);
console.log(Boolean('false'));
console.log(typeof Boolean('false'));
