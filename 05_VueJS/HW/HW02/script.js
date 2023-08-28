new Vue({
  el: '#app',

data() {
  return {
    products: [
      {
        photo: './img/no_photo.jpg',
        name: 'product_1',
        price: 35000,
      },
      {
        photo: './img/no_photo.jpg',
        name: 'product_2',
        price: 25000,
      },
      {
        photo: './img/no_photo.jpg',
        name: 'product_1',
        price: 50000,
      }
    ],
  };
},

  methods: {
    sort(bool) {
      if (bool) {
        this.products.sort((a, b) => a.price - b.price);
      } else {
        this.products.sort((a, b) => b.price - a.price);
      }
    }
  },
})