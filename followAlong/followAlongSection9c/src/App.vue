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
                <hr>
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import New from './components/New.vue';
    import Author from './components/Author.vue';

    export default {
        data() {
            return {
                title: 'The Quote',
                selectedComponent: 'appQuote'
            };
        },
        components: {
            appQuote: Quote,
            appNew: New,
            appAuthor: Author
        }
    }
</script>

<style>
</style>
