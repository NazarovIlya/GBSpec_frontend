<template>
  <div class="about">
    <!-- <HeaderComp/> -->
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import HeaderComp from '@/components/HeaderComp.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    // HeaderComp,
  },
});
</script>
