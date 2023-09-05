<!-- eslint-disable max-len -->
<template>
  <div class="logotype">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
      </svg>
      <h2 class="logotype__title">Interno</h2>
  </div>
</template>

<script>

export default ({
  name: 'LogoComp',
});
</script>

<style lang="scss" scoped>
  .logotype{
    display: flex;
    align-items: center;
    flex-direction: row;

    & svg{
      margin-right: 10px;
    }

    &__title{
      color: #292F36;
      font-family: 'DM Serif Display';
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
   }
  }
</style>
