export const formMixin = {
    data () {
        return {
            isStoring: false,
            serverValidationErrors: {},
            responseMessage: null,
            responseStatus: null,
            formFields: {},
        }
    },

    created() {


    },
    methods: {

        resetFlags(){

            for (let key of Object.keys(this.fields)){

                this.$validator.flag(key, {
                    "untouched": true,
                    "touched": false,
                    "dirty": false,
                    "valid": true,
                    "invalid": false,
                    "validated": false
                });
            }
        },
        beforeStoreHandler(){
            this.serverValidationErrors = {};
            this.serverError = null;
            this.isStoring = true;
            this.responseMessage = null;
            this.responseStatus = null;
        },
        storeErrorHandler(error){
            this.isStoring = false;

            this.responseStatus = 'error';

            if (error.response && error.response.data && error.response.data.errors) {
                this.serverValidationErrors = error.response.data.errors;
            }

            if ((error.response && error.response.data && error.response.data.message) || error.message) {

                this.responseMessage = error.response.data.message || error.message;
            }
        },
        storeSuccessHandler(response){
            this.isStoring = false;

            this.responseStatus = 'success';

           // this.formFields = {};

            if (response && response.message) {
                this.responseMessage = response.message;
            }

            if (response && response.redirectUrl) {
                window.location.replace(response.redirectUrl);
            }
        },
        getErrors(name){
            let errors = [];

            if (this.errors.has(name)){
                errors.push(this.errors.first(name));
            }

            if (this.serverValidationErrors[name]){

                for (let index in this.serverValidationErrors[name]){
                    errors.push(this.serverValidationErrors[name][index]);
                }
            }

            return errors;
        }
    },
};