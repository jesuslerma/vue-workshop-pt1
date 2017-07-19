<template>
	<section>
		<save-product-form 
			:product="productInForm"
			v-on:submit="onFormSave"></save-product-form>
		<product-list  	:products="products" 
						v-on:edit="onEditClicked"
						v-on:remove="onRemoveClicked"></product-list>
	</section>
</template>

<script>
	import uuid 			from 'uuid';
	import ProductList 		from './ProductList';
	import SaveProductForm 	from './SaveProductForm';
	import { mapGetters, mapActions } from 'vuex';

	const initialData = () => {
		return {
			productInForm: {
				id: null,
				name: '',
				description: '',
				price: null
			}
		}
	}

	export default {
		components: {
			ProductList,
			SaveProductForm
		},
		data: initialData,
		methods: {
			...mapActions([
				'saveProduct',
				'deleteProduct'
			]),
			onFormSave(product) {
				this.saveProduct(product);
				this.resetProductInForm();
			},
			resetProductInForm() {
				this.productInForm = initialData().productInForm;
			},
			onEditClicked(product) {
				this.productInForm = {... product };
			},
			onRemoveClicked(product) {
				this.deleteProduct(product.id);

				if (product.id === this.productInForm.id) {
					this.resetProductInForm();
				}
			},

		},
		computed: mapGetters({
			products: 'getProducts'
		})
	}
</script>