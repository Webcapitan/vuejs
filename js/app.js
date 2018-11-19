
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import {store} from './store/store';

window.Vue = require('vue');
// var VueEasyTinyMCE = require('./plugins/tinymce/vue-easy-tinymce.min.js');
// import tinymce  from 'vue-easy-tinymce'
// Vue.use(tinymce);

var Sketch = require('./components/Sketch.vue');
// Vue.component('drag-it-dude', require('./plugins/DragItDude.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('pricing-component', require('./components/PricingTemplate.vue'));
Vue.component('block-component', require('./components/BlockComponent.vue'));
Vue.component('image-template', require('./components/TemplateListComponent.vue'));
Vue.component('email-template', require('./components/EmailTemplate.vue'));
// Vue.component('text-component', require('./components/TextComponent.vue'));
Vue.component('img-component', require('./components/ImgComponent.vue'));
Vue.component('img-edit', require('./components/ImgEditComponent.vue'));
Vue.component('color-component', require('./components/color-component.vue'));

// Vue.component('list-component', require('./components/ListComponent.vue'));
Vue.component('img-img', require('./components/img.vue'));
Vue.component('credits-component', require('./components/CreditsComponent.vue'));
Vue.component('userphoto-component', require('./components/UserphotoComponent.vue'));

Vue.component('logo-component', require('./components/LogoComponent.vue'));

Vue.component('unsubscribe-form', require('./components/UnsubscribeForm.vue'));

// CANADA
// Vue.component('canada-country', require('./components/countrys/CountryCanadaComponent.vue'));
// Vue.component('province-component', require('./components/countrys/canadaProvince.vue'));
// Vue.component('canada-cities', require('./components/countrys/canadaCities.vue'));


import VueRecaptcha from 'vue-recaptcha';

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import FBSignInButton from 'vue-facebook-signin-button';
Vue.use(FBSignInButton);

import { StripeCheckout } from 'vue-stripe'

Vue.component('registration-form', require('./components/RegistrationForm.vue'));
Vue.component('registration-modal', require('./components/RegistrationModal.vue'));
Vue.component('adding-info-modal', require('./components/AddingInfoModal.vue'));
Vue.component('login-modal', require('./components/LoginModal.vue'));
Vue.component('login-form', require('./components/LoginForm.vue'));
Vue.component('forgot-password-form', require('./components/ForgotPasswordForm.vue'));
Vue.component('reset-password-form', require('./components/ResetPasswordForm.vue'));
Vue.component('contact-form', require('./components/ContactForm.vue'));
Vue.component('subscribe-form', require('./components/SubscribeForm.vue'));
Vue.component('checkout-credit-form', require('./components/CheckoutCreditForm.vue'));
Vue.component('validation-errors', require('./components/ValidationErrors.vue'));
Vue.component('edit-profile-form', require('./components/EditProfileForm.vue'));
Vue.component('change-password-form', require('./components/ChangePasswordForm.vue'));
Vue.component('vue-recaptcha', VueRecaptcha);
Vue.component('stripe-checkout', StripeCheckout);
Vue.component('check-accept-coupon-form', require('./components/CheckAcceptCouponForm.vue'));

const app = new Vue({
    el: '#app',
    store,
    mounted(){

        this.$store.commit('setItem', {user: $(this.$el).data('user')});
        this.$store.commit('setItem', {userCredits: $(this.$el).data('user-credits')});

        let url = new URL(window.location.href);

        if (!this.$store.state.user){

            if (url.searchParams.get('register')){
                this.$store.commit('setItem', {'isRegistrationModalShown': true});
            }
        }
        else {

            if (url.searchParams.get('adding-info')){
                this.$store.commit('setItem', {'isAddingInfoModalShown': true});
            }
        }
    },
    watch: {
        '$store.state.isAddingInfoModalShown': function (val) {
            this.bodyClassHandler(val);
        },
        '$store.state.isLoginModalShown': function (val) {
            this.bodyClassHandler(val);
        },
        '$store.state.isRegistrationModalShown': function (val) {
            this.bodyClassHandler(val);
        },
    },
    methods: {
        bodyClassHandler(val){
            val ? $('body').addClass('body-fixed') : $('body').removeClass('body-fixed');
        },
    },
});
