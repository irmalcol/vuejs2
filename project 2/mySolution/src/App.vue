<template>
    <div class="container">
        <app-progress-bar
        :quoteCount="quoteList.length"
        :maxQuoteCount="maxQuoteCount"></app-progress-bar>
        <app-input-box :addQuote="addQuote"></app-input-box>
        <div class="quote-container">
            <app-quote
            v-for="(quote, index) in quoteList"
            :key="index"
            :index="index"
            :removeQuote="removeQuote">
                    {{ quote.text }}
            </app-quote>
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
                quoteList: [],
                maxQuoteCount: 10
            };
        },
        methods: {
            addQuote(quoteText) {
                if ( this.quoteList.length >= this.maxQuoteCount ) {
                    alert('You have reached the maximum number of allowed quotes. Remove quotes before adding more.');
                    return false;
                }
                this.quoteList.push({ text: quoteText });
            },
            removeQuote(quoteElement, quoteIndex) {
                this.quoteList.splice(quoteIndex,1);
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
    /* Global helper styling */
    .rounded {
        border-radius: 5px;
    }

    /* Compenent styling */
    .quote-container {
        margin: 50px auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-rows: auto;
        grid-gap: 60px 60px;
        justify-items: center;
        align-items: center;
    }
</style>
