<!-- eslint-disable max-len -->
<template>
  <footer class="footer">
    <div class="footer__left">
      <logo-comp/>
      <p class='footer__text'>
        It is a long established fact that a reader will be distracted lookings.
      </p>
    </div>
    <div class="footer__center">
      <h3 class="footer__title">Pages</h3>
      <navigation-bar type="footer"/>
    </div>
    <div class="footer__right">
      <div>
        <h3 class="footer__title">Contact</h3>
        <p class="footer__text">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p class="footer__text footer__text_email">
          contact@interno.com
        </p>
        <p class="footer__text">
           +7 (123) 456 - 7890
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import LogoComp from './LogoComp.vue';
import NavigationBar from './NavigationBar.vue';

export default ({
  name: 'FooterComp',
  components: {
    NavigationBar,
    LogoComp,
  },
});

</script>

<style lang="scss" scoped>
  .footer{
  padding: 0px 12.76%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  background-color: #ccc;
  gap: 101px;

  &__title{
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
  }

  &__left{
    display: flex;
    flex-direction: column;
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

    &_email{
      line-height: 300%;
    }
  }

  &__center{
    width: 238px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  &__right{
    width: 258px;
    align-items: center;
    margin-top: 20px;
    text-align: left;
  }
}
</style>
