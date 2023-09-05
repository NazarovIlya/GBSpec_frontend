<!-- eslint-disable max-len -->
<template>
  <div class="header">
    <logo-comp/>
    <navigation-bar/>
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

  //  &__logo{
  //   display: flex;
  //   align-items: center;
  //   flex-direction: row;

  //   & svg{
  //     margin-right: 10px;
  //   }
  //  }

  //  &__title{
  //   color: #292F36;
  //   font-family: DM Serif Display;
  //   font-size: 40px;
  //   font-style: normal;
  //   font-weight: 400;
  //   line-height: 125%;
  //  }
  }
</style>
