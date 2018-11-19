<template>

    <form @submit.prevent="onFormSubmit" action="/feedback" method="post" novalidate class="message-form">

        <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
            {{responseMessage}}
        </div>

        <div class="fields-group">
            <div class="form-field col-6">
                <label class="required">Name</label>
                <input v-model="formFields.name" v-validate="'required|max:255'" type="text" name="name" required="required">

                <validation-errors :validation-errors="getErrors('name')"></validation-errors>

            </div>
            <div class="form-field col-6">
                <label class="required">Email</label>
                <input v-model="formFields.email" v-validate="'required|email|max:255'" type="email" name="email" required="required">

                <validation-errors :validation-errors="getErrors('email')"></validation-errors>

            </div>
        </div>
        <div class="form-field">
            <label class="required">message</label>
            <textarea v-model="formFields.message" v-validate="'required|max:3000'" name="message"></textarea>

            <validation-errors :validation-errors="getErrors('message')"></validation-errors>

        </div>

        <div class="submit-container">
            <div id="example3">

                <vue-recaptcha
                        @verify="onCaptchaVerify"
                        @expired="formFields['g-recaptcha-response'] = null"
                        @render="formFields['g-recaptcha-response'] = null"
                        :sitekey="$store.state.captchaKey"
                        :key="key">
                </vue-recaptcha>

            </div>
            <button :disabled="isStoring" type="submit" class="button">contact us</button>
        </div>
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

                        this.$store.dispatch('storeFeedbackData', this.formFields).then((response) => {

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
