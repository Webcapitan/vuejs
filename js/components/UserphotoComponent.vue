<template>
    <table cellpadding="0" cellspacing="0" border="0"
            style="border-collapse:collapse;border:0;position: relative;border-spacing: 0;padding:0;position:relative"
            v-bind:style="ccsWidth,cssMaxWidth">
        <tr>
            <td style="padding:0">

                <label for="inputFile" ref="label" style="margin:0;padding:0">
                    <a  @click.prevent="trigger"style="z-index:2;position:relative;text-decoration:none;cursor: pointer !important;" @mouseover="imgHover" @mouseout="imgHoverOut">
                        <img :src="img.photo !== '' ? img.photo : defaultImg" alt="user photo" v-bind:style="ccsWidth,cssMaxWidth" v-bind:width="imgwidth">
                        <img src="/img/uploadimg.svg" alt="" class="uploadImg" :style="{display : uploadedImg}">
                    </a>
                </label>

                <input type="file" id="inputFile" class="set-image" style="display: none;" @change="onFileChange">
                
            </td>
        </tr>
    </table>
</template>

<script>
    export default{
        props: ['img', 'userphotoHref', 'imgwidth'],
        data(){
            return {
                imgShow: false,
                defaultImg : '/img/photo.jpg',
                hide:false,
                width: `${this.imgwidth}px`,
                ccsWidth: `width:${this.imgwidth}px`,
                cssMaxWidth : `width:${this.imgwidth}px`,
            }
        },
        computed: {
            uploadedImg () {
                return this.imgShow == false ? 'none' : 'block'
            }
        },
        methods : {
            imgHover(){
                this.imgShow = !this.imgShow
            },
            imgHoverOut(){
                this.imgShow = !this.imgShow
            },
            trigger (){
                this.$el.querySelector('.set-image').click()
            },
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
                    vm.$set(vm.img,'photo', e.target.result)
                    // vm.img.photo = e.target.result;
                };
                reader.readAsDataURL(file);
            },
        }
    }
</script>

<style>
    .img-edit_panel{
        position: absolute;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        background-color: #555;
        padding: 0 5px;
        border-radius: 5px;
        top: -35px;
        left: 0;
        z-index: 3;
    }
    .img-edit_panel label{
        margin: 0;
        margin: 5px 0;
    }
    .img-edit_panel input{
        background: rgba(255, 255, 255, 0.3);
        border: none;
        outline: none;
        max-width: 120px;
        color: #fff;
        padding: 0 5px;
    }
    .img-edit_panel input::placeholder{
        color: rgb(221, 221, 221);
        font-size: 12px;
    }
    .set-image{
        display: none;
    }
    #palette,
    #text-icon,
    #remove-icon,
    #url-icon,
    #href-icon,
    #label-file{
        padding: 10px;
        background-position: center;
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
        background-size: 75%;
        cursor: pointer;
        transition: transform 0.1s ease-in-out;
    }
    #palette:hover,
    #text-icon:hover,
    #remove-icon:hover,
    #url-icon:hover,
    #href-icon:hover,
    #label-file:hover{
        transform: scale(1.3);
    }
    
    .slide-fade2-enter-active {
    transition: all .3s ease;
    }
    .slide-fade2-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade2-enter, .slide-fade2-leave-to
    /* .slide-fade2-leave-active до версии 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
    }

    .slide-fade4-enter-active {
    transition: all 0.3s ease;
    }
    .slide-fade4-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade4-enter, .slide-fade4-leave-to
    /* .slide-fade4-leave-active до версии 2.1.8 */ {
    transform: translateX(-5px);
    opacity: 0;
    }


    .width-enter-active {
    transition: all 1s ease;
    }
    .width-enter {
    transition: all 1s ease;
    }
    .width-leave-active {
    transition: all 0s;
    }
    .width-enter, .width-leave-to
    /* .width-leave-active до версии 2.1.8 */ {
    width: 0;
    opacity: 0;
    padding: 0;
    }
    .width-enter-to, .width-leave{
        padding: 0;
    }
    .img-edit_panel.center{
        left: 50%;
        transform: translateX(-50%);
    }
    .class33{
        width: 100%;
        height: 113px;
    }
    .gall2{
        height: 120px;
    }
    .img-props{
        display: block;
        margin: 0 auto 8px;
        width: auto;
        max-width: 50px;
    }
    .img-social{
        max-width: 30px;
        height: 30px;
        display: inline-block;
    }
    .img-wrap{
        max-width: 30px;
        display: inline-block;
        margin-left: 5px;
    }
    .img-user{
        max-width: 100px;
    }
    .img-footer{
        min-width: 160px;
    }
    .img-props2{
        height: 50px;
        display: table;
        width: 100%;
        margin-bottom: 8px;
    }
    .img-props2 img{
        display: block !important;
        margin: 0 auto !important;
        width: auto !important;
        height: auto !important;
    }
</style>
