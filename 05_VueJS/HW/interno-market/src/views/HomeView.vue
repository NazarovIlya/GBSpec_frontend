<template>
  <div class="home">
    <HeaderComp/>
    <h1 class="header__logo">Здесь будет контент!</h1>
  </div>
</template>

<script lang="ts">
import HeaderComp from '@/components/HeaderComp.vue';

export default ({
  name: 'HomeView',
  components: {
    HeaderComp,
  },
});
</script>
