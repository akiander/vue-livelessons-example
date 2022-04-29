import axios from 'axios';

export default {
    data() {
        return {
            personData: null,
        };
    },
    created() {
        axios.get('https://randomuser.me/api/')
            .then(response => this.personData = response.data.results[0]);
        // fetch('https://randomuser.me/api/')
        //     .then(response => response.json())
        //     .then(data => this.personData = data.results[0]);
    }
}