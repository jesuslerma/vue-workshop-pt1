// https://github.com/jesuslerma/vue-workshop-pt1
var categories = [
    {name:'laptops', selected: false},
    {name:'audifonos', selected: false},
    {name:'electronicas', selected: true}
  ]
  
  categoryMixin = {
    props: ['categorias'],
    methods: {
      toggleSelected: function (category) {
        category.selected = !category.selected
        this.$emit('toggleselected', category)
      }
    }
  }

  Vue.component('categoryLi', {
    template: '#categoryLi',
    mixins: [categoryMixin]
  })

  Vue.component('categoryTable', {
    template: '#categoryTable',
    mixins: [categoryMixin]
  })

  new Vue({
    el: '#app',
    data: {
      categories: categories,
      newCategory: {
        name: '',
        selected: false
      },
      header: 'Un Encabezado'
    },
    methods: {
      onToggle: function (category) {
        alert(category.name)
      },
      saveNewCategory: function () {
        this.categories.push(this.newCategory)

        this.newCategory = {
          name: '',
          selected: false
        }
      }
    }
  })