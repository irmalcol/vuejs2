<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myon:click="myFunction" class="btn btn-primary">Test</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            myFunction() {
                console.log('Executing my function!');
            }
        }
    }
</script>

<style>
</style>
