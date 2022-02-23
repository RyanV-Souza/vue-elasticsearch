<template>
    <div class="container">
        <h2>Oi</h2>
        <AutoComplete :items="streets"
        v-model="search"></AutoComplete>
    </div>
</template>

<script>
    import axios from 'axios'
    import AutoComplete from './AutoComplete.vue'
    export default{
    data() {
        return {
            streets: [],
            search: "",
        };
    },
    watch: {
        search() {
            return this.getSearch();
        }
    },
    methods: {
        getSearch() {
            axios.get(`http://localhost:3000/search?text=${this.search}`)
                .then(response => {
                this.streets = response.data;
            });
        }
    },
    components: { AutoComplete }
}
</script>