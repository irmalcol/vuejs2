<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h4>Exercise 1</h4>
                <input type="text" v-model="input1">
                <p>{{ input1 | reverseText }}</p>
                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h4>Exercise 2</h4>
                <input type="text" v-model="input2">
                <p>{{ input2 | appendCount }}</p>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h4>Exercise 3</h4>
                <input type="text" v-model="input3">
                <p>{{ reversedText }}</p>
                <p>{{ textWithCount }}</p>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h4>Exercise 4</h4>
                <input type="text" v-model="input4">
                <p>{{ textWithCountMixin }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { appendMixin } from './appendMixin';

    export default {
        mixins: [appendMixin],
        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
            };
        },
        filters: {
            reverseText: ( input => input.split('').reverse().join('') )
        },
        computed: {
            reversedText() {
                return this.input3.split('').reverse().join('');
            },
            textWithCount() {
                const count = this.input3.length;
                if ( count > 0 ) {
                    return this.input3 + ' (' + count + ')';
                }
                return this.input3;
            }
        }
    }
</script>

<style>
</style>
