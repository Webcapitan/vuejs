<template>
    <form @submit.prevent="onFormSubmit" action="/register" method="post" novalidate>
        <span class="form-title">{{title}}</span>
        <div class="form-field"><label>Are you</label>
            <select v-model="formFields.role_id" name="role_id">

                <option v-for="role of roles" :value="role.id">{{role.name}}</option>

            </select>
        </div>
        <div class="form-field">

            <label class="required">Name</label>
            <input v-model="formFields.name" v-validate="'required|max:255'" type="text" name="name" required="required">

            <validation-errors :validation-errors="getErrors('name')"></validation-errors>

        </div>
        <div class="form-field">

            <label class="required">Email</label>
            <input v-model="formFields.email" v-validate="'required|email|max:255'" type="email" name="email" required="required">

            <validation-errors :validation-errors="getErrors('email')"></validation-errors>

        </div>
        <div class="form-field">
            <label class="required">password</label>
            <input v-model="formFields.password" v-validate="'required|min:6'" type="password" ref="pw_confirm" name="password" required="required">

            <validation-errors :validation-errors="getErrors('password')"></validation-errors>

        </div>
        <div class="form-field">
            <label class="required">Confirm password</label>
            <input v-model="formFields.password_confirmation" v-validate="'confirmed:password'" name="pw_confirm" type="password">

            <validation-errors :validation-errors="getErrors('pw_confirm')"></validation-errors>

        </div>

        <div class="form-field"><span class="mandatory">Mandatory</span></div>
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
        <button :disable='isStoring' type="submit" class="button pink">{{buttonText}}</button>
    </form
     >
</template>

<script>
    import {formMixin} from '../mixins/form-mixin';
    // import {EventBus} from './../components/event-bus';
    export default {
        props: ['roles', 'title', 'buttonClass', 'buttonText'],
        mixins: [formMixin],
        data() {
            return {

                key: 0,
            }
        },
        created() {
            if (this.roles && this.roles.length){
                this.formFields.role_id = this.roles[0].id;
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

                        this.$store.dispatch('register', this.formFields).then((response) => {
                            this.storeSuccessHandler(response);
                            this.formFields = {};
                            this.$validator.reset();
                            this.key++;
                            // EventBus.$emit('showAddingInfoModal');

                            this.$store.commit('setItem', {'isRegistrationModalShown': false});
                            this.$store.commit('setItem', {'isAddingInfoModalShown': true});

                            if (response && response.redirectUrl) {
                                window.location.replace(response.redirectUrl);
                            }

                            //window.location.replace("/?adding-info=1");

                        }).catch((error) => {
                            this.storeErrorHandler(error);
                            this.key++;
                        });
                    }
                });
            }
        },
    }
</script>
