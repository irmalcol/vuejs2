<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p>
        <p>Backwards: {{ reverseName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name with event</button>
        <button @click="resetFn()">Reset Name with callback</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
        myName: {
            type: String,
            required: true
        },
        userAge: Number,
        resetFn: {
            type: Function,
            default: function() {
                return;
            },
        }
    },
    methods: {
        reverseName() {
            return this.myName.split("").reverse().join("");
        },
        resetName() {
            this.myName = 'Ian';
            this.$emit('nameChanged', this.myName);
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
