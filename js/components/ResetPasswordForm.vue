<template>

    <form @submit.prevent="onFormSubmit" action="/password/reset" method="post" novalidate>
        <span class="form-title">Reset Password</span>

        <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
            {{responseMessage}}
        </div>

        <div class="form-field">

            <label class="required">Email</label>
            <input v-model="formFields.email" v-validate="'required|email|max:255'" type="email" name="email" required="required">

            <validation-errors :validation-errors="getErrors('email')"></validation-errors>

        </div>

        <div class="form-field">
            <label class="required">password</label>
            <input v-model="formFields.password" v-validate="'required|min:6|confirmed:password_confirmation'" type="password" name="password" required="required">

            <validation-errors :validation-errors="getErrors('password')"></validation-errors>

        </div>

        <div class="form-field">
            <label class="required">password confirmation</label>
            <input v-model="formFields.password_confirmation" type="password" name="password_confirmation" required="required">
        </div>

        <div class="form-field">
            <div id="example2">

                <vue-recaptcha
                        @verify="onCaptchaVerify"
                        @expired="formFields['g-recaptcha-response'] = null"
                        @render="formFields['g-recaptcha-response'] = null"
                        :sitekey="$store.state.captchaKey"
                        :key="key">
                </vue-recaptcha>

            </div>

            <validation-errors :validation-errors="getErrors('g-recaptcha-response')"></validation-errors>

        </div>

        <button :disabled="isStoring" type="submit" class="button pink">Reset Password</button>
    </form>

</template>

<script>
    import {formMixin} from '../mixins/form-mixin';
    // import {EventBus} from './../components/event-bus';
    export default {
        props: ['token'],
        mixins: [formMixin],
        data() {
            return {
                key: 0,
            }
        },
        methods: {
            onCaptchaVerify(response){
                this.formFields['g-recaptcha-response'] = response;
            },

            onFormSubmit() {

                if (this.isStoring
                    || !this.formFields['g-recaptcha-response']
                ) {
                    return false;
                }

                this.$validator.validateAll().then((result) => {

                    if (result) {

                        this.beforeStoreHandler();

                        this.formFields.token = this.token;

                        this.$store.dispatch('resetPassword', this.formFields).then((response) => {
                            this.storeSuccessHandler(response);
                            this.formFields = {};
                            this.$validator.reset();
                            this.key++;
                            window.location.replace("/");

                        }).catch((error) => {
                            this.storeErrorHandler(error);
                            this.key++;
                        });
                    }
                });
            },
        },
    }
</script>
