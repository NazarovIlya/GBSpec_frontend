<!-- eslint-disable max-len -->
<template>
  <footer class="footer">
    <div class="footer__left">
      <logo-comp/>
      <p class='footer__text'>It is a long established fact that a reader will be distracted lookings. </p>
    </div>
    <div class="footer__center">
      <h3>Pages</h3>
      <navigation-bar type="footer"/>
    </div>
    <div class="footer__right">

    </div>
  </footer>
</template>

<script>
import LogoComp from './LogoComp.vue';
import NavigationBar from './NavigationBar.vue';

export default {
  name: 'FooterComp',
  components: {
    NavigationBar,
    LogoComp,
  },
};

</script>

<style lang="scss" scoped>
  .footer{
  padding: 0px 12.76%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:stretch;
  background-color: #ccc;
  gap: 101px;

  &__left{
    width: 393px;
  }

  &__text{
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    text-align: left;
  }
}
</style>
