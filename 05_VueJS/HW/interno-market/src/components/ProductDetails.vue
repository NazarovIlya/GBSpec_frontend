<template>
  <div class="product">
    <h1 class="product__title">{{ product.name }}</h1>
    <p class="product__price">Price: {{ formattedPrice }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">

export default ({
  name: 'ProductDetails',
  data() {
    return {
      product: {
        name: 'Product_1',
        price: 99,
        available: true,
      },
    };
  },
  computed: {
    formattedPrice() {
      return `\u0024 ${this.product.price}`;
    },
  },
});

</script>

<style lang="scss" scoped>
.product{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-style: bold;

  transition: all 0.3s;

  &__title{
    font-size: 2rem;
  }

  &__price{
    font-size: 1.4rem;

    &:hover{
      color: red;
    }
  }
}

</style>
