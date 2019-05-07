<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-single-server
                v-for="server in servers"
                :key="server.id"
                :id="server.id"
                :status="server.status"
                @serverChosen="updateServerFocus($event)"></app-single-server>
        </ul>
    </div>
</template>

<script>
import SingleServerVue from './SingleServer.vue';

export default {
    data() {
        return {
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Unknown'},
                {id: 4, status: 'Normal'},
                {id: 5, status: 'Critical'},
            ]
        };
    },
    methods: {
        updateServerFocus(id) {
            this.focusServer = this.servers[id - 1];
            this.$emit('serverChosen', this.focusServer);
        }
    },
    components: {
        'app-single-server': SingleServerVue
    }
}
</script>

<style>

</style>
