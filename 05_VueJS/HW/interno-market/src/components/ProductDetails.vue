<template>
  <div class="product">
    <h2 class="product__title">{{ this.product.name }}</h2>
    <p class="product__price">Price: {{ formattedPrice }}</p>
    <p class="text">Available status: {{ available }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Product from '@/models/Product';

export default defineComponent({
  name: 'ProductDetails',
  data() {
    return {
      product: new Product('Продукт_1', 99, true),
    };
  },
  computed: {
    formattedPrice(): string {
      return `\u0024 ${this.product.price.toString()}`;
    },
    available(): string {
      return this.product.available ? 'Available' : 'Out of stock';
    },
  },
});

</script>

<style lang="scss" scoped>

*{
  margin: 0;
  padding: 0;
}
.product{
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

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
