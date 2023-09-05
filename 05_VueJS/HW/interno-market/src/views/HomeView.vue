<template>
  <div class="home">
    <HeaderComp/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComp from '@/components/HeaderComp.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComp,
  },
});
</script>
