var categories = [
    {name:'laptops', selected: false},
    {name:'audifonos', selected: false},
    {name:'electronicas', selected: true}
  ]
  Vue.component('categoryLi', {
    template: '#categoryLi',
    data: function () {
      return {
         categories: categories
      }
    },
    methods: {
      
    }
  })

  new Vue({
    el: '#app',
    data: {
      categories: categories
    },
    methods: {
      toggleSelected: function (category) {
        category.selected = !category.selected
      }
    }
  })