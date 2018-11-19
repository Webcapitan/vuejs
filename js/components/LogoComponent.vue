<template>
    <div class="logowrap">

        <span class="logowrap_title">AGENCY LOGO</span>

        <label for="inputFile">
            <span class="logoButton">
                Upload Logo
            </span>
        </label>

        <input type="file" id="inputFile" class="set-image" @change="onFileChange">

    </div>
</template>

<script>
    export default {
        props: ['img'],
        methods:{
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
                e.srcElement.value = '';
            },
            createImage(file,event) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;

                reader.onload = (e) => {
                    this.$set(vm.img,'logo', e.target.result)
                };
                reader.readAsDataURL(file);
            },
        }
    }
</script>

<style>
    .logowrap{
        width: 100%;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .logowrap label{
        width: 100%;
    }
    .logowrap_title{
        display: block;
        font-weight: 500;
        margin-bottom: 10px;
    }
    .logoButton{
        font-size: 14px;
        min-height: 30px;
        border: none;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        background-color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        width: 100%;
    }
</style>