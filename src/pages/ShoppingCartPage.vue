<template>
    <div>
        <h1>Shopping Cart Page</h1>

        <div v-if="!shoppingCartLoaded"><h4>Your shopping cart is empty.</h4></div>

        <div v-for="product in shoppingCart" :key="product.key">
            <h4>{{ product.name }}</h4>
            <p>{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShoppingCartPage",
    props: ['shoppingCart'],
    computed: {
        shoppingCartLoaded() {
            var exists = this.shoppingCart;
            var hasItems = this.shoppingCart.length > 0;
            var loaded = (exists && hasItems);
            return loaded;
        }
    }
}
</script>