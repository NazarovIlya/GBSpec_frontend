const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!',
    visibility: false
  },
  methods: {
    changedStatus() {
      this.visibility = !this.visibility;
    }
  },

})