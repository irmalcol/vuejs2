<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h2 slot="title">{{ title }}</h2>
                   <!-- <span slot="subtitle">Injected Subtitle</span> -->
                   <p slot="content">This quote is a great quote from the parent</p>
                   <p>This content is in an unnamed slot</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

    export default {
        data() {
            return {
                title: 'The Quote'
            };
        },
        components: {
            appQuote: Quote
        }
    }
</script>

<style>
</style>
