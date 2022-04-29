<template>
    <div>
        <h2 v-flash="1000">Employee of the month</h2>
        <div v-if="personData">
            <h3>{{ personData.name.first }} {{ personData.name.last }}</h3>
        </div>
    </div>

</template>

<script>
import randomPersonMixin from '../mixins/randomPersonMixin';

export default {
    name: 'EmployeeOfTheMonthPage',
    mixins: [randomPersonMixin]
}
</script>