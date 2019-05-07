<template>
    <li class="list-group-item" @click="updateServerFocus">
        Server #{{ id }} - Status: {{ status }}
    </li>
</template>

<script>
export default {
    props: {
        id: Number,
        status: String
    },
    methods: {
        updateServerFocus() {
            this.$emit('serverChosen', this.id);
        },
    }
}
</script>
