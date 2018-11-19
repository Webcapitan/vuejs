<template>

    <form @submit.prevent="onFormSubmit" method="post" novalidate class="coupon-checkout-form">

        <div class="block-container">
            <div class="block-table">

                <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
                    {{responseMessage}}
                </div>

                <div class="form-field">

                    <div class="coupon-checkout">

                        <label>Do you have a coupon code? Enter it below</label>
                        <input v-model="formFields.coupon" v-validate="'required|max:255'" name='coupon' type="text" class="credit-input">

                        <validation-errors :validation-errors="getErrors('coupon')"></validation-errors>

                    </div>

                    <button :disable="!formFields.coupon || isStoring" class="checkout">Check</button>

                </div>

            </div>

        </div>

    </form>

</template>

<script>

    import {formMixin} from '../mixins/form-mixin';

    export default {

        mixins: [formMixin],

        data() {
            return {
            }
        },
        methods: {

            onFormSubmit() {

                if (!this.formFields.coupon || this.isStoring) {
                    return false;
                }

                this.beforeStoreHandler();

                this.$store.dispatch('checkOrAcceptCoupon', this.formFields).then((response) => {

                    this.storeSuccessHandler(response);

                    if (response.is_accepted){

                        this.$store.commit('setItem', {fullscreenMessage: response.message});

                        if (response.user_credits){
                            this.$store.commit('setItem', {userCredits: response.user_credits});
                        }

                        this.responseMessage = null;
                    }

                }).catch((error) => {

                    this.storeErrorHandler(error);
                    this.$store.commit('unsetItem', 'coupon');
                });
            }
        },

        watch: {
            'formFields.coupon': function (val) {
                this.responseMessage = null;
                this.responseStatus = null;
                this.$store.commit('unsetItem', 'coupon');
            },
        },
    }
</script>
