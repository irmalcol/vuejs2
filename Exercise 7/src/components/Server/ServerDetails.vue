<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="server.id === 0">
            <p>Select a server to view and edit its status</p>
        </template>
        <template v-else>
            <p v-if="server.id !== 0">Server #{{ server.id }} - Status: {{ server.status }}</p>
            <button @click="resetHandler()">Reset Server</button>
        </template>
    </div>

</template>

<script>
export default {
    props: {
        server: Object,
        resetServer: Function
    },
    methods: {
        resetHandler() {
            this.resetServer();
        }
    }
}
</script>

<style>

</style>
