<template>
    <div>

        <div class="popup-bg"></div>
        <div class="popup" style="display: block;">
            <form @submit.prevent="onFormSubmit" method="post" novalidate>
                <span class="form-title">additional information</span>

                <div v-if="responseMessage" :class="{'alert-success': responseStatus === 'success', 'alert-warning': responseStatus === 'error'}" class="alert" role="alert">
                    {{responseMessage}}
                </div>

                <p class="form-text">These information will be used to automatically generate parts of your email. If you make a mistake here or if you want to skip it, don’t worry you will be able to edit it in the next step directly in the editor.</p>

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

                    <label>Company Address</label>
                    <input v-model="formFields.brokerage_address" v-validate="'max:255'" type="text" name="brokerage_address">

                    <validation-errors :validation-errors="getErrors('brokerage_address')"></validation-errors>

                </div>

                <div class="form-field">

                    <img v-if="photo && photo.src" :src="photo.src" class="user-photo-preview" style="width: 100%; height: auto">

                    <label v-else >Upload photo</label>
                    <label for="input-photo" class="upload-btn">upload</label>
                    <input @change="onPhotoSelected" type="file" name="photo" id="input-photo" accept="image/jpeg,image/png,image/bmp,image/gif,image/svg">

                    <validation-errors :validation-errors="getErrors('photo')"></validation-errors>

                </div>

                <div class="confirm-wrap">
                    <!--<button @click="skip" type="button" class="button grey">skip</button>-->
                    <button :disabled="isStoring" type="submit" class="button pink" style="width:100%">confirm</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    import {formMixin} from '../mixins/form-mixin';

    export default {
        mixins: [formMixin],
        data() {
            return {
                photo: null
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

                        let formData = new FormData;

                        for (let key of Object.keys(this.formFields)) {

                            if (this.formFields[key]){
                                formData.append(key, this.formFields[key]);
                            }
                        }

                        if (this.photo && this.photo.file){
                            formData.append('photo', this.photo.file);
                        }

                        this.$store.dispatch('storeAdditionalInfo', formData).then((response) => {

                            this.storeSuccessHandler();
                            this.formFields = {};
                            this.$validator.reset();

                            this.$store.commit('setItem', {'isAddingInfoModalShown': false});

                            if (response && response.redirectUrl) {
                                window.location.replace(response.redirectUrl);
                            }

                        }).catch((error) => {
                            this.storeErrorHandler(error);
                        });
                    }
                });
            },

            skip(){
                this.$store.commit('setItem', {'isAddingInfoModalShown': false});
                window.location.replace(this.redirectUrl);
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




