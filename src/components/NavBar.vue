<template>
    <ul>
        <li>
            <router-link to="/">Products</router-link>
        </li>
        <li>
            <router-link to="/cart">Shopping Cart <span>({{ numberOfItems }})</span></router-link>
        </li>
        <li>
            <router-link to="/user-info">Edit My Info</router-link>
        </li>
        <li>
            <router-link to="/employee">Employee of the Month</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['numberOfItems']
}
</script>
