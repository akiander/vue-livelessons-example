<template>
    <div>
        <h1>User Info</h1>

        <div v-if="showValidationErrors">
            <div v-for="error in validationErrors" :key="error">
                {{ error }}
            </div>
        </div>

        <input placeholder="Name" v-model="name" />
        <input placeholder="Age" type="number" v-model.number="age" />
        <input placeholder="Address" v-model="address" />
        <button @click="displayData">Save</button>

        <div id="results">
            <p v-if="name">Name: {{ name }} </p>
            <p v-if="age > 0">Age: {{ age }} </p>
            <p v-if="address">Address: {{ address }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfoPage',
    props: ['userInfo'],
    emits: ['userInfoSaved'],
    data() {
        return {
            name: this.userInfo.name,
            age: this.userInfo.age,
            address: this.userInfo.address,
            showValidationErrors: false,
        };
    },
    methods: {
        displayData() {
            this.showValidationErrors = true;
            if (this.validationErrors.length < 1) {
                this.$emit( 'userInfoSaved', this.name, this.age, this.address );
                // tell the user we saved their data here
            }
        }
    },
    computed: {
        validationErrors() {
            let errors = [];

            if (this.name.length < 2) {
                errors.push("Please enter a name longer than 2 characters.");
            }

            if (this.age < 16) {
                errors.push("Age must be 16 or greater.");
            }

            if (this.address.length < 5) {
                errors.push("Please enter an address longer than 4 characters.");
            }

            return errors;
        }
    }
}
</script>