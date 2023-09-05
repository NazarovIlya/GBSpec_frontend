<template>
  <div class="header">
    <div class="header__logo">
      <img src="" alt="">
      <h2 class="header__title">Interno</h2>
    </div>
    <nav class="header__navbar">
        <router-link class="header__link" to="/">Home</router-link>
        <router-link class="header__link" to="/about">About</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header{
  padding: 0 18.75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;

   &__logo{
  display: flex;
  flex-direction: row;
  padding:  44px 0;

    & svg{
  margin-right: 10px;
    }
   }

   &__title{
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
   }

   &__navbar{
    display: flex;
    gap: 25px;

   &__link {
      color: #292F36;
      text-align: center;
      font-family: 'Jost';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      transition: all .15s;
      font-weight: bold;
      color: #2c3e50;

    &:not(:last-child)::after{
      content: '|';
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
   }
  }
</style>
