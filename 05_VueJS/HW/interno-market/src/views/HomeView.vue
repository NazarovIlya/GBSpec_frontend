<template>
  <div class="home">
    <h1 class="header__logo">Здесь будет контент!</h1>
    <product-details/>
  </div>
</template>

<script lang="ts">
import ProductDetails from '@/components/ProductDetails.vue';

export default ({
  name: 'HomeView',
  components: {
    ProductDetails,
  },
});
</script>
