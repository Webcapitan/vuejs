<template>

    <form @submit.prevent="onFormSubmit" action="/password/reset" method="post" novalidate>
        <span class="form-title">Reset Password</span>

        <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
            {{responseMessage}}
        </div>

        <div class="form-field">

            <label class="required">Email</label>
            <input v-model="formFields.email" v-validate="'required|email|max:255'" type="email" name="email" required="required">

            <div v-show="errors.has('email') || (serverValidationErrors && serverValidationErrors.email)"
                 class="input-error-message ng-hide">
                <p v-show="errors.has('email')" class="error_message">
                    {{ errors.first('email') }}</p>
                <p v-if="serverValidationErrors" v-for="error in serverValidationErrors.email"
                   class="error_message">
                    {{ error }}</p>
            </div>

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

            <div v-show="serverValidationErrors && serverValidationErrors['g-recaptcha-response']">
                <p v-if="serverValidationErrors" v-for="error in serverValidationErrors['g-recaptcha-response']"
                   class="error_message">
                    {{ error }}</p>
            </div>

        </div>

        <button :disabled="isStoring" type="submit" class="button pink">Send Password Reset Link</button>
    </form>


</template>

<script>
    import {formMixin} from '../mixins/form-mixin';
    // import {EventBus} from './../components/event-bus';
    export default {
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

                if (this.isStoring || !this.formFields['g-recaptcha-response']) {
                    return false;
                }

                this.$validator.validateAll().then((result) => {

                    if (result) {

                        this.beforeStoreHandler();

                        this.$store.dispatch('resetPassword', this.formFields).then((response) => {
                            this.storeSuccessHandler(response);
                            this.formFields = {};
                            this.$validator.reset();
                            this.key++;

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
