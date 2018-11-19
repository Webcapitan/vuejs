<template>
    <form @submit.prevent="onFormSubmit" method="post" novalidate>
        <span class="form-title">Enter email to unsubscribe</span>

        <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
            {{responseMessage}}
        </div>

        <div class="form-field">

            <label class="required">Email</label>
            <input v-model="formFields.email" v-validate="'required|email|max:255'" type="email" name="email" required="required">

            <validation-errors :validation-errors="getErrors('email')"></validation-errors>

        </div>

        <button :disabled="isStoring" type="submit" class="button pink">Submit</button>
    </form>
</template>

<script>
    import {formMixin} from '../mixins/form-mixin';

    export default {
        mixins: [formMixin],
        props: ['token'],
        mounted() {
        },
        methods: {

            onFormSubmit() {

                if (this.isStoring) {
                    return false;
                }

                this.$validator.validateAll().then((result) => {

                    if (result) {

                        this.beforeStoreHandler();

                        this.$store.dispatch('dispatchesUnsubscribe', this.formFields).then((response) => {

                            this.storeSuccessHandler(response);
                            this.formFields = {};
                            this.$validator.reset();

                        }).catch((error) => {
                            this.storeErrorHandler(error);
                        });
                    }
                });
            },
        },
    }
</script>

<style>
    .section-login{
        align-items: center;
    }
</style>