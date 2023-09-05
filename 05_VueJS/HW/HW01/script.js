var app = new Vue({
      el: '#app',
      data: {
        id: 0,
        message: 'Перевернуть.',
        items: []
      },

      methods: {
        reverseWord(){
          this.message = this.message.split('').reverse().join('');
        },

        addItem(){
          this.id = this.items.length;
          
          this.items.push(`Новый элемент списка ${++this.id}`);
        },
        removeItem(index){
          this.items = this.items.filter((v, i) => i !== index)
        }
      }
    })