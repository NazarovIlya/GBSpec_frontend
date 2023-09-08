<template>
  <header-comp/>
  <router-view/>
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue';

export default ({
  name: 'App',
  components: {
    HeaderComp,
  },
});
</script>

<style lang="scss">
// * {
//     margin: 0;
//     padding: 0;
//   }

#app {
  font-family: 'DM Serif Display', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
}
</style>
