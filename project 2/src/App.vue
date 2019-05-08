<template>
    <div class="container">
        <app-progress-bar></app-progress-bar>
        <app-input-box :addQuote="addQuote"></app-input-box>
        <div class="quote-container">
            <app-quote v-for="(quote, index) in quoteList" :key="index">{{ quote.text }}</app-quote>
        </div>
        <app-info></app-info>
    </div>
</template>

<script>
    import Info from './components/Info.vue';
    import InputBox from './components/InputBox.vue';
    import Quote from './components/Quote.vue';
    import ProgressBar from './components/ProgressBar.vue';

    export default {
        data() {
            return {
                quoteList: []
            };
        },
        methods: {
            addQuote(quoteText) {
                console.log('From App.vue: ' + quoteText);
                this.quoteList.push({ text: quoteText });
            }
        },
        components: {
            appInfo: Info,
            appInputBox: InputBox,
            appQuote: Quote,
            appProgressBar: ProgressBar
        }
    }
</script>

<style>
    .quote-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>
