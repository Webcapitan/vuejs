<template>
    <div>
        <div @click.prevent="$store.commit('setItem', {isLoginModalShown: false})" class="popup-bg" style="display: block;"></div>
        <div class="popup" style="display: block;">
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

                    <div v-show="errors.has('name') || (serverValidationErrors && serverValidationErrors.name)"
                         class="input-error-message ng-hide">
                        <p v-show="errors.has('name')" class="error_message">
                            {{ errors.first('name') }}</p>
                        <p v-if="serverValidationErrors" v-for="error in serverValidationErrors.name"
                           class="error_message">
                            {{ error }}</p>
                    </div>

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
                    <label class="required">password</label>
                    <input v-model="formFields.password" v-validate="'required|min:6'" type="password" name="password" required="required">

                    <div v-show="errors.has('password') || (serverValidationErrors && serverValidationErrors.password)"
                         class="input-error-message ng-hide">
                        <p v-show="errors.has('password')" class="error_message">
                            {{ errors.first('password') }}</p>
                        <p v-if="serverValidationErrors" v-for="error in serverValidationErrors.password"
                           class="error_message">
                            {{ error }}</p>
                    </div>

                </div>
                <div class="form-field"><span class="mandatory">Mandatory</span></div>
                <div class="form-field">
                    <div id="example2">

                        <vue-recaptcha @verify="onCaptchaVerify" @expired="onCaptchaExpired" sitekey="6LehkGIUAAAAAMN4o-UWmG6HzDkpl3GDQaaHvU3i"></vue-recaptcha>

                    </div>

                    <div v-show="serverValidationErrors && serverValidationErrors['g-recaptcha-response']">
                        <p v-if="serverValidationErrors" v-for="error in serverValidationErrors['g-recaptcha-response']"
                           class="error_message">
                            {{ error }}</p>
                    </div>

                </div>
                <button :disable='isStoring' type="submit" class="button pink">{{buttonText}}</button>
            </form
            >
        </div>
    </div>
</template>

<script>
    import {formMixin} from '../mixins/form-mixin';
    export default {
        props: ['roles', 'title', 'buttonClass', 'buttonText'],
        mixins: [formMixin],
        created() {
            if (this.roles && this.roles.length){
                this.formFields.role_id = this.roles[0].id;
            }
        },
        methods: {
            onCaptchaVerify(response){
                this.formFields['g-recaptcha-response'] = response;
            },

            onCaptchaExpired(){
                this.formFields['g-recaptcha-response'] = null;
            },

            onFormSubmit() {

                if (this.isStoring || !this.formFields['g-recaptcha-response']) {
                    return false;
                }

                this.$validator.validateAll().then((result) => {

                    if (result) {

                        this.serverValidationErrors = {};
                        this.serverError = null;
                        this.isStoring = true;

                        this.$store.dispatch('register', this.formFields).then((response) => {
                            this.isStoring = false;
                            this.$validator.reset();
                            // EventBus.$emit('showAddingInfoModal');

                            // this.$store.commit('setItem', {'isRegistrationModalShown': false});
                            this.$store.commit('setItem', {'isAddingInfoModalShown': true});
                        }).catch((error) => {
                            this.storeErrorHandler(error);
                        });
                    }
                });
            }
        },
    }
</script>