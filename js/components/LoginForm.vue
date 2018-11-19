<template>

    <form @submit.prevent="onFormSubmit" method="post" novalidate>
        <span class="form-title">Sign in to {{siteName}}</span>

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
            <input v-model="formFields.password" v-validate="'required|min:6'" type="password" name="password" required="required">

            <validation-errors :validation-errors="getErrors('password')"></validation-errors>

        </div>

        <div class="form-field">
            <a href="/password/reset" class="form-link">Lost your password?</a>
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

        <div class="form-field">
            <span class="center-text">OR</span>
        </div>

        <div class="form-field">

            <fb-signin-button class="fb-btn"
                              :params="fbSignInParams"
                              @success="onSignInSuccess"
                              @error="onSignInError">
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
                log in via facebook
            </fb-signin-button>
        </div>

        <button :disabled="isStoring" type="submit" class="button pink">Sign in</button>
    </form>

</template>

<script>
    import {formMixin} from '../mixins/form-mixin';
    export default {
        mixins: [formMixin],
        props: ['siteName'],
        data() {
            return {

                key: 0,

                fbSignInParams: {
                    scope: 'email',
                    return_scopes: true
                }
            }
        },
        mounted() {

            window.fbAsyncInit = function () {
                FB.init({appId: '202383963793865', cookie: true, xfbml: true, version: 'v2.8'});
            };
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
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

                        this.$store.dispatch('login', this.formFields).then((response) => {

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

            onSignInSuccess (response) {

                FB.api('/me', dude => {

                    this.$store.dispatch('login', {driver: 'facebook', token: FB.getAuthResponse().accessToken}).then((response) => {

                        this.responseStatus = 'success';

                        if (response && response.message) {
                            this.responseMessage = response.message;
                        }

                        if (response && response.redirectUrl) {
                            window.location.replace(response.redirectUrl);
                        }

                    }).catch((error) => {

                        this.responseStatus = 'error';

                        if (error.response && error.response.data && error.response.data.message) {
                            this.responseMessage = error.response.data.message;
                        }
                    });
                })
            },

            onSignInError (error) {

                if (error.response && error.response.data && error.response.data.message) {
                    this.serverError = error.response.data.message;
                }
            }
        },
    }
</script>
