<template>

    <form @submit.prevent="onFormSubmit" method="post" novalidate class="footer__subscribe">

        <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
            {{responseMessage}}
        </div>

        <div class="footer__subscribe-inner">

            <input v-model="formFields.email" v-validate="'required|email|max:255'" name="email" type="email" placeholder="Enter your email" required="required">
            <button :disabled="isStoring" type="submit" class="button">Subscribe</button>

        </div>

        <validation-errors :validation-errors="getErrors('email')"></validation-errors>

    </form>

</template>

<script>
    import {formMixin} from '../mixins/form-mixin';
    export default {
        mixins: [formMixin],
        methods: {

            onFormSubmit() {

                if (this.isStoring) {
                    return false;
                }

                this.$validator.validateAll().then((result) => {

                    if (result) {

                        this.beforeStoreHandler();

                        this.$store.dispatch('subscribe', this.formFields).then((response) => {

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
