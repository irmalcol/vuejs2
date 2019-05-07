<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>User name: {{ name }}</p>
        <p>User age: {{ age }}</p>
        <button @click="changeName">Change User Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :myName="name"
                    @nameChanged="name = $event"
                    :resetFn="resetName"
                    :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="age"
                    @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: function() {
            return {
                name: 'Ian',
                age: 28
            };
        },
        methods: {
            changeName() {
                this.name = 'Chuck';
            },
            resetName() {
                this.name = 'Ian';
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
