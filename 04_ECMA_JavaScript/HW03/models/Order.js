export class Order{

  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.products = []
  }

  addProduct = (product) => this.products.push(product);
  
  getTotalPrice = () => this.products.reduce((acc, element) => acc += element.price, 0);
  
}