<template>
    <div class="quote rounded" @click="hanldeClick">
        <slot>This is a default quote</slot>
    </div>
</template>

<script>
export default {
    props: {
        removeQuote: Function,
        index: Number
    },
    methods: {
        hanldeClick(event) {
            this.removeQuote(event.target, this.index);
        }
    }
}
</script>

<style>
    .quote {
        padding: 10px 20px;
        text-align: center;
        transition: 0.3s;
        font-family: cursive;
        font-size: 24px;
        background-color: #EEE;
        box-shadow: 0 0 20px 20px #EEE;
    }

    .quote:hover {
        background-color: #FFADAD;
        box-shadow: none;
        cursor: pointer;
    }
</style>
