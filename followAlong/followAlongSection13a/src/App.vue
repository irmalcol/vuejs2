<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>Unfiltered: {{ text }}</p>
                <p>Filtered: {{ text | toUppercase }}</p>
                <p>Filtered: {{ text | to-lowercase }}</p>
                <p>Filtered: {{ text | to-lowercase | toUppercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add Berries</button>
                <hr>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [ fruitMixin ],
        data() {
            return {
                text: 'Some Text',
            };
        },
        filters: {
            toUppercase(input) {
                return input.toUpperCase();
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
