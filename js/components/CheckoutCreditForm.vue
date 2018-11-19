<template>

    <form @submit.prevent="onFormSubmit" method="post" novalidate class="message-form">

        <div class="block-container">
            <div class="block-table">

                <!--<div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">-->
                    <!--{{responseMessage}}-->
                <!--</div>-->

                <div v-if="+credit.amount === 1" class="form-field">
                    <label>Enter credits amount</label>
                    <input v-model="formFields.amount" name='amount' type="number" class="credit-input">

                    <validation-errors :validation-errors="getErrors('amount')"></validation-errors>
                </div>

                <div class="radio__container">
                    <div class="control-group">
                        <label class="control control-radio">
                            <img src="/img/svg/pay_stripe-card-logo.svg" alt="">
                            <input v-model="formFields.service" value="stripe" type="radio" name="service" />
                            <div class="control_indicator"></div>
                        </label>
                        <!--<label class="control control-radio">-->
                            <!--<img src="/img/svg/pay_paypal.svg" alt="">-->
                            <!--<input v-model="formFields.service" v-validate="'required'" value="paypal" type="radio" name="service" />-->
                            <!--<div class="control_indicator"></div>-->
                        <!--</label>-->
                    </div>

                    <validation-errors :validation-errors="getErrors('service')"></validation-errors>

                    <div class="total">
                        <div class="regions__col1">
                            <span>TOTAL</span>
                        </div>
                        <div class="regions__col2">
                            <span>${{totalPrice / 100}} - {{+credit.amount === 1 ? formFields.amount : credit.amount}} Credits Purchase</span>
                        </div>
                    </div>

                </div>

                <div class="button-container">
                    <a class="back" :href="prevUrl"><i class="fas fa-arrow-left"></i>BACK</a>

                    <button v-if="(formFields.service !== 'stripe') || ($store.state.coupon && $store.state.coupon.type === 'credits')" :disabled="isStoring || !formFields.service" class="checkout" id="show-form">checkout</button>

                    <div v-else :class="{disabled: isStoring}" class="stripe-form-wrap">

                        <stripe-checkout
                                :stripe-key="stripeKey"
                                button="checkout"
                                button-class="checkout _width_full"
                                on-success="broadcast"
                                :product="{
                                    name: 'Credits',
                                    description: `Buy ${+formFields.amount * +credit.amount} credit${+formFields.amount * +credit.amount > 1 ? 's' : ''}`,
                                    amount: totalPrice,
                                }">
                            ></stripe-checkout>

                    </div>

                </div>

            </div>

        </div>

    </form>

</template>

<script>
    import {formMixin} from '../mixins/form-mixin';
    import { Bus } from 'vue-stripe';
    export default {
        mixins: [formMixin],
        props: ['credit', 'stripeKey',
            // 'message'
        ],
        data() {
            return {
                prevUrl: document.referrer,
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

                        if (this.$store.state.coupon){
                            this.formFields.coupon = this.$store.state.coupon.value;
                        }

                        this.$store.dispatch(this.$store.state.coupon && this.$store.state.coupon.type === 'credits' ? 'creditsByCoupon' :'payCredit', Object.assign(_.cloneDeep(this.formFields), {id: this.credit.id})).then((response) => {

                            this.storeSuccessHandler(response);
                            this.formFields = {};
                            this.$validator.reset();

                            if (response && response.message){

                                this.$store.commit('setItem', {fullscreenMessage: response.message});
                            }

                            this.init();

                        }).catch((error) => {
                            this.storeErrorHandler(error);

                            if (error.response && error.response.data && error.response.data.message) {
                                this.$store.commit('setItem', {fullscreenMessage: error.response.data.message});
                            }

                            delete this.formFields.stripeToken;
                            this.key++;
                        });
                    }
                });
            },
            init(){

                this.formFields = Object.assign(_.cloneDeep(this.formFields), {amount: 1});
            },
        },
        computed: {

            totalPrice () {

                return Math.round(this.formFields.amount * this.credit.price
                    * (this.$store.state.coupon && this.$store.state.coupon.type === 'discount'
                        ? (100 - this.$store.state.coupon.amount)/100
                        : 1)
                    * 100);
            }
        },
        created(){

            this.formFields.service = 'stripe';


            let url = new URL(window.location.href);

            if (url.searchParams.get('message')){
                this.$store.commit('setItem', {fullscreenMessage: url.searchParams.get('message')});
            }

            this.init();

            Bus.$on('vue-stripe.success', payload => {


                this.formFields.stripeToken = payload.token;
                this.onFormSubmit();
            });
        },
        watch: {

            formFields: {
                handler: function (val, oldVal) {

                    if(+val.amount < 1){
                        val.amount = 1;
                    }
                },
                deep: true
            },

            '$store.state.fullscreenMessage'(val, oldVal) {

                if (oldVal && !val){

                    let url = new URL(window.location.href);

                    let backUrl = url.searchParams.get('back-url');

                    if (backUrl){

                        window.location.replace(backUrl);
                    }
                }
            },
            //
            // '$store.state.fullscreenMessage'(val, oldVal) {
            //
            //     if (oldVal && !val){
            //
            //         let url = new URL(window.location.href);
            //
            //         let backUrl = url.searchParams.get('back-url');
            //
            //         if (backUrl){
            //
            //             window.location.replace(backUrl);
            //         }
            //     }
            // }
        }
    }
</script>
