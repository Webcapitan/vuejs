<template>

    <form v-if="$store.state.user" @submit.prevent="onFormSubmit" method="post" novalidate class="block-container">

        <div class="block-table">

            <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
                {{responseMessage}}
            </div>

            <div class="img-container">
                <div v-if="photo || formFields.photo" class="img-wrap">
                    <img :src="(photo && photo.src) ? photo.src : getThumbnail(formFields.photo, 100, 100)" alt="">
                </div>

                <label class="change-img">
                    Upload image
                    <input @change="onPhotoSelected" type="file" name="photo" accept="image/jpeg,image/png,image/bmp,image/gif,image/svg">
                </label>

                <validation-errors :validation-errors="getErrors('photo')"></validation-errors>

            </div>

            <div class="form-field">
                <label>Name</label>
                <input v-model="formFields.name" v-validate="'required|max:255'" type="text" name="name" required="required">

                <validation-errors :validation-errors="getErrors('name')"></validation-errors>
            </div>

            <div class="form-field">
                <label>Email</label>
                <input v-model="formFields.email" v-validate="'required|email|max:255'" type="email" name="email" required="required">

                <validation-errors :validation-errors="getErrors('email')"></validation-errors>
            </div>

            <!--<div class="form-field">-->
            <!--<label>password</label>-->
            <!--<input v-model="formFields.password" v-validate="'required|min:6'" type="password" name="password" required="required">-->

            <!--<validation-errors :validation-errors="getErrors('password')"></validation-errors>-->
            <!--</div>-->

            <div class="form-field">
                <label>Phone Number</label>
                <input v-model="formFields.phone" v-validate="'min:8|max:16'" type="tel" name="phone">

                <validation-errors :validation-errors="getErrors('phone')"></validation-errors>
            </div>

            <div class="form-field">
                <label>Designations</label>
                <input v-model="formFields.designations" v-validate="'max:255'" type="text" name="designations">

                <validation-errors :validation-errors="getErrors('designations')"></validation-errors>
            </div>

            <div class="form-field">
                <label>Brokerage Address</label>
                <input v-model="formFields.brokerage_address" v-validate="'max:255'" type="text" name="brokerage_address">

                <validation-errors :validation-errors="getErrors('brokerage_address')"></validation-errors>
            </div>

            <div class="form-field">
                <label>Facebook</label>
                <input v-model="formFields.facebook" v-validate="'max:255'" type="text" name="facebook">

                <validation-errors :validation-errors="getErrors('facebook')"></validation-errors>
            </div>

            <div class="form-field">
                <label>Twitter</label>
                <input v-model="formFields.twitter" v-validate="'max:255'" type="text" name="twitter">

                <validation-errors :validation-errors="getErrors('twitter')"></validation-errors>
            </div>

            <div class="form-field">
                <label>LinkedIn</label>
                <input v-model="formFields.linkedin" v-validate="'max:255'" type="text" name="linkedin">

                <validation-errors :validation-errors="getErrors('linkedin')"></validation-errors>
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
        data() {
            return {
                photo: null,
                formFields: _.cloneDeep(this.user),
                prevUrl: document.referrer
            }
        },
        watch: {
            '$store.state.user': function (val) {
                this.formFields = _.cloneDeep(val)
            },
        },
        methods: {

            onFormSubmit() {

                if (this.isStoring) {
                    return false;
                }

                this.$validator.validateAll().then((result) => {

                    if (result) {

                        this.beforeStoreHandler();

                        let formData = new FormData;

                        for (let key in _.pickBy(this.formFields, (value, key) => value && key !== 'photo')) {

                            formData.append(key, this.formFields[key]);
                        }

                        if (this.photo && this.photo.file){
                            formData.append('photo', this.photo.file);
                        }

                        this.$store.dispatch('updateProfile', formData).then((response) => {

                            this.storeSuccessHandler(response);
                            this.photo = null;
                            this.$validator.reset();

                        }).catch((error) => {
                            this.storeErrorHandler(error);
                        });
                    }
                });
            },

            onPhotoSelected(event) {

                let images = event.target.files || event.dataTransfer.files;
                if (!images || !images.length) {
                    return;
                }

                let reader = new FileReader();

                let that = this;
                reader.onload = (e) => {
                    that.photo = {
                        file: images[0],
                        src: e.target.result
                    };
                };
                reader.readAsDataURL(images[0]);
            },
        },
    }
</script>
