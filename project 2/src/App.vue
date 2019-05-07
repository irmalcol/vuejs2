<template>
    <div class="container">
        <app-progress-bar></app-progress-bar>
        <app-input-box></app-input-box>
        <app-quote v-for="(quote, index) in quoteList" :key="index">{{ quote.text }}</app-quote>
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
                quoteList: [
                    {
                        text: 'Pithy phrase',
                    },
                    {
                        text: 'Words of wisdom'
                    }
                ]
            };
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
</style>
