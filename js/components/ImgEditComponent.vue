<template>
    <transition name="slide-fade2">
        <div class="img-edit_panel">
            <label 
                id="label-file"
                title="Upload picture">
                <input type="file" class="set-image" @change="onFileChange" @click="hideInputs">
            </label>
            
            <label 
                for="url-image" 
                id="url-icon" 
                title="Insert picture as url"
                @click="showInput">
            </label>
            <transition name="width">
            <input 
                type="text" 
                id="url-image" 
                placeholder="www.example.jpg"
                @change="urlchange" 
                v-show="seen">
            </transition>

            <label 
                for="href-image" 
                id="href-icon" 
                title="Add link"
                @click="showInputHref">
            </label>
            <transition name="width">
            <input 
                type="text" 
                id="href-image" 
                placeholder="www.example.com"
                @change="hrefchange" 
                v-show="seenHref">
            </transition>
            <label 
                id="remove-icon" 
                title="Remove item"
                @click="removeImage">
            </label>
        </div>
    </transition>
    <!-- https://codepen.io/Atinux/pen/qOvawK -->
</template>

<script>
    export default{
        data(){
            return {
                image: '',
                href: '',
                seen: false,
                seenHref: false
            }
        },
        methods: {
            hideInputs(){
                this.seen = false;
                this.seenHref = false;
            },
            showInput(){
                this.seen = !this.seen
                this.seenHref = false;
            },
            showInputHref(){
                this.seenHref = !this.seenHref;
                this.seen = false;
            },
            hrefchange(value){
                var vm = this;
                vm.href = value.srcElement.value;
                this.$emit('changeImgHrefEmit', vm.href);
                value.srcElement.value = '';
                this.seenHref = false;
            },
            urlchange(value){
                var vm = this;
                vm.image = value.srcElement.value;
                this.$emit('changeImgEmit', vm.image);
                value.srcElement.value = '';
                this.seen = false
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
                vm.image = e.target.result;

                // emit base64 to parent component
                this.$emit('changeImgEmit', vm.image);
                // consolelog data base64
                // console.log(vm.image)
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.$parent.$el.innerHTML = '';
            },
        },

        watch: {
            image: function watchProps (newVal){
                // console.log(this.image)
            }
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
</style>
