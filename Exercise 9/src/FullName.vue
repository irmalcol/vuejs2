<template>
    <div>
        <div class="form-group">
            <label for="firstname">First Name</label>
            <input type="text"
            id="firstname"
            class="form-control"
            :value="firstName"
            @input="updateFirst">
        </div>
        <div class="form-group">
            <label for="lastname">Last Name</label>
            <input type="text"
            id="lastname"
            :value="lastName"
            class="form-control"
            @input="updateLast">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            firstName: '',
            lastName: '',
        };
    },
    methods: {
        updateFirst( event ) {
            this.firstName = event.target.value;
            this.emitFullName();
        },
        updateLast( event ) {
            this.lastName = event.target.value;
            this.emitFullName();
        },
        emitFullName() {
            const fullName = this.firstName + ' ' + this.lastName;
            this.$emit('input', fullName);
        }
    },
    mounted () {
        this.firstName = this.value.split(' ')[0];
        this.lastName = this.value.split(' ')[1];
    }
}
</script>

