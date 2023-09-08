<!-- eslint-disable max-len -->
<template>
  <nav :class="styles">
    <router-link class="navbar__link" v-for="item in links" :key="item.id" :to=item.path>{{ item.title }}</router-link>
  </nav>
</template>

<script>

export default ({
  name: 'NavigationBar',
  props: {
    type: String,
  },
  computed: {
    styles() {
      if (this.type === 'header') {
        return ['navbar_header'];
      }
      if (this.type === 'footer') {
        return ['navbar_footer'];
      }
      return 'style-class-none';
    },
  },
  data() {
    return {
      links: [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'Project',
          path: '/project',
        },
        {
          title: 'Blog',
          path: '/blog',
        },
        {
          title: 'Abuot Vue 3',
          path: '/about',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar{

  &_header{
  display: flex;
  gap: 20px;
  }

  &_footer{
    display: flex;
    flex-direction: column;
    gap: 20px; //!TODO
  }

  &__link {
  color: #292F36;
  text-align: center;
  font-family: 'Jost';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  transition: all .15s;
&.router-link-exact-active {
    color: #42b983;
  }
 }
}

</style>
