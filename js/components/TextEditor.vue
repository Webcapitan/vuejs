<template>
    <div>
        <input type="text" v-model="title">
    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>