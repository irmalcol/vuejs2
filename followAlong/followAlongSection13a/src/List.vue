<template>
    <div class="row">
        <h3>List Component</h3>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [ fruitMixin ],
        created() {
            console.log('created inside List');
        }
    }
</script>

<style>

</style>
