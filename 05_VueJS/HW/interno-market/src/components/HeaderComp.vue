<!-- eslint-disable max-len -->
<template>
  <div class="header">
    <logo-comp/>
    <navigation-bar type="header"/>
  </div>
</template>

<script>
import LogoComp from './LogoComp.vue';
import NavigationBar from './NavigationBar.vue';

export default ({
  name: 'HeaderComp',
  components: {
    LogoComp,
    NavigationBar,
  },
});
</script>

<style lang="scss" scoped>
.header{
  padding: 44px 18.75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;

  }
</style>
