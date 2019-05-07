<template>
    <div class="container">
        <app-title></app-title>
        <hr>
        <app-body></app-body>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Title from './components/shared/Title.vue';
import Footer from './components/shared/Footer.vue';
import Body from './components/server/Body.vue';

export default {
    components: {
        'app-body': Body,
        'app-footer': Footer,
        'app-title': Title,
    }
};
</script>
