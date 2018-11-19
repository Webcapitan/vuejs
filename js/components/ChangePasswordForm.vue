<template>

    <form v-if="$store.state.user" @submit.prevent="onFormSubmit" method="post" novalidate class="block-container">

        <div class="block-table">

            <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
                {{responseMessage}}
            </div>

            <div class="form-field">
                <label class="required">password</label>
                <input v-model="formFields.password" v-validate="'required|min:6|confirmed:password_confirmation'" type="password" name="password" required="required">

                <validation-errors :validation-errors="getErrors('password')"></validation-errors>

            </div>

            <div class="form-field">

                <label class="required">Confirm Password</label>
                <input v-model="formFields.password_confirmation" data-vv-as="password" type="password" name="password_confirmation" required="required">

            </div>

        </div>

        <div class="button-container">
            <a :href="prevUrl" class="back"><i class="fas fa-arrow-left"></i>BACK</a>
            <button :disabled="isStoring" type="submit" class="checkout">save</button>
        </div>
    </form>

</template>

<script>
    import {formMixin} from '../mixins/form-mixin';
    import {urlMixin} from '../mixins/url-mixin';
    // import {EventBus} from './../components/event-bus';
    export default {
        mixins: [formMixin, urlMixin],
        //props: ['prevUrl'],
        data() {
            return {
                photo: null,
                prevUrl: document.referrer
            }
        },
        methods: {

            onFormSubmit() {

                if (this.isStoring) {
                    return false;
                }

                this.$validator.validateAll().then((result) => {

                    if (result) {

                        this.beforeStoreHandler();

                        this.$store.dispatch('changePassword', this.formFields).then((response) => {

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
