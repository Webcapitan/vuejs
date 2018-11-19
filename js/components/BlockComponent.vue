<template>
    <table cellpadding="0" cellspacing="0" border="0"
           style="border-collapse:collapse;border:0;border-collapse: collapse;border-spacing:0;height: 100%;position:relative; width: 600px; background-size: 600px;background-position: center;"
           :style="{'backgroundImage': `url(${metadata.bgimg})`}"
            @click="trigger">
        <tr>
            <td style="padding: 0" @mouseover="imgHover" @mouseout="imgHoverOut">
                <slot></slot>
                <img src="/img/uploadimg.svg" alt="" class="uploadImg" :style="{display : uploadedImg}">
            </td>
        </tr>

        <input type="file" id="inputFile" style="display: none;" class="set-image" @change="onFileChange">

    </table>
</template>

<script>

    export default{
        props: ['metadata'],
        data(){
            return {
                imgShow: false,
            }
        },
        computed: {
            uploadedImg () {
                return this.imgShow == false ? 'none' : 'block'
            }
        },
        methods: {
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
                    vm.$set(vm.metadata,'bgimg', e.target.result)
                };
                reader.readAsDataURL(file);
            },
        }
    }
</script>
