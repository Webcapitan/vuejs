<template>
    <div>
        <div @click.prevent="$store.commit('setItem', {isRegistrationModalShown: false})" class="popup-bg" style="display: block;"></div>
        <div class="popup" style="display: block;">
            <registration-form :roles="roles" button-text="get started" title="Get started in few clicks"></registration-form>
        </div>
    </div>
</template>

<script>
    export default {
         props: ['roles']
    }
</script>