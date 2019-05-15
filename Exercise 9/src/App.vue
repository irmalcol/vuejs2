<template>
    <div class="container">
        <form>
            <div class="row" v-if="! submitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h3>Exercise 1: Form</h3>
                    <!-- <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" v-model.lazy="firstName" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" v-model.lazy="lastName" class="form-control">
                    </div> -->
                    <!-- <full-name v-bind:value="fullName" v-on:input="fullName = $event"></full-name> -->
                    <full-name v-model="fullName"></full-name>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" v-model.lazy="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model.lazy="password" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="storedata">Store Data?</label>
                        <input type="checkbox" id="storedata" v-model.lazy="shouldStore">
                    </div>
                        
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button type="submit" @click.prevent="submitAction">Submit</button>


                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <!-- See <full-name> tag above -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }} </p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ shouldStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue"

    export default {
        data() {
            return {
                fullName: 'First Last',
                email: '',
                password: '',
                shouldStore: false,
                submitted: false,
            };
        },
        methods: {
            submitAction() {
                this.submitted = true;
            }
        },
        components: {
            'full-name': FullName
        }
    }
</script>

<style>
</style>
