<template>
  <div>
    <NavBar :numberOfItems="numberOfItems" />
    <router-view
      :shoppingCart="shoppingCart"
      :products="products"
      :userInfo="userInfo"
      @addToCart="onAddToCart"
      @userInfoSaved="onUserInfoSaved"></router-view>

  </div>
</template>

<script>
import products from './pages/products';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
      NavBar
  },
  data() {
    return {
      shoppingCartIds: [],
      products,
      userInfo: { name: '', age: 0, address: '' }
    }
  },
  computed: {
    shoppingCart() {
      return this.shoppingCartIds.map( id => {
        return this.products.find(p => p.id === id);
      })
    },
    numberOfItems() {
      return this.shoppingCartIds.length;
    }
  },
  methods: {
    onAddToCart(id) {
      this.shoppingCartIds.push(id);
    },
    onUserInfoSaved(name, age, address) {
      this.userInfo = {
        name, age, address
      };
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
