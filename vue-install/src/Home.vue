<template>
    <div>
        <mood-status v-for="status in 5"></mood-status>
    </div>
</template>
<script>
import MoodStatus from './MoodStatus.vue';

export default {
    components: {
        'mood-status': MoodStatus
    }
}
</script>