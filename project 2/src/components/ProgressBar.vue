<template>
    <div>
        <h3>Quotes Added</h3>
        <div class="progress-bar-container rounded">
            <div :style="{'width': computedWidth + '%'}" class="progress-bar rounded">
                <p>{{ quoteCount }}/{{ maxQuoteCount }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quoteCount: Number,
        maxQuoteCount: Number
    },
    computed: {
        computedWidth() {
            return Math.round(this.quoteCount / this.maxQuoteCount * 100);
        }  
    }
}
</script>


<style>
    .progress-bar-container {
        display: flex;
        width: 100%;
        border: 1px solid #CCC;
        margin: 10px auto;
    }

    .progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        /* Border radius needs to be slightly less than
        container radius, since container has a border */
        border-radius: 4px;
        font-size: 16px;
        min-width: 50px;
    }

    .progress-bar > p {
        margin: 0;
    }
</style>
