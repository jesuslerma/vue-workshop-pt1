https://github.com/jesuslerma/vue-workshop-pt1
var categories = [
    {name:'laptops', selected: false},
    {name:'audifonos', selected: false},
    {name:'electronicas', selected: true}
  ]
  Vue.component('categoryLi', {
    template: '#categoryLi',
    props: ['categorias', 'name'],
    methods: {
      toggleSelected: function (category) {
        category.selected = !category.selected
      }
    }
  })

  new Vue({
    el: '#app',
    data: {
      categories: categories,
      myName: 'Bely'
    },
    methods: {
      
    }
  })