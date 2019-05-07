<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers @serverChosen="updateServerFocus($event)"></servers>
            <app-server-details :server="this.focusServer" :resetServer="resetFocusServer"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data() {
            return {
                focusServer: {
                    id: 0,
                    status: 'Unknown'
                }
            };
        },
        methods: {
            updateServerFocus(server) {
                this.focusServer = server;
            },
            resetFocusServer() {
                this.focusServer.status = 'Normal';
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
