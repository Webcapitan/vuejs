<template>

    <div v-if="validationErrors && validationErrors.length" class="input-error-message ng-hide">
        <p v-for="error of validationErrors" class="error_message">{{error}}</p>
    </div>

</template>

<script>
    export default {
        props: ['validationErrors'],
    }
</script>
