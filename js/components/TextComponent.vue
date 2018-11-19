<template>
    <span style="display: inline-block; position:relative" @mouseover="mouseOver = true" @mouseleave="mouseOver = false">
        
        <span class="component-text" v-html="myModel" id="textEl" ref="changedText" :style="color">{{ postTitle }}</span>

        <transition name="slide-fade4">
            <div class="img-edit_panel" v-if="mouseOver" :class="postCenter">
                <label id="text-icon" title="Edit text" v-show="mouseOver" @click="onClickButton"></label>
                <label id="remove-icon" title="Remove item" v-show="mouseOver" @click="removeText"></label>
            </div>
        </transition>
        
        
        <!-- <transition name="slide-fade3">
        <div class="popup-edit" v-if="seen">
            <i class="icon-close" @click="closeEditor"></i>
            <tinymce
             v-model="myModel"
             :plugins="myPlugins" :toolbar1="myToolbar1" :toolbar2="myToolbar2"
             :other="myOtherOptions">
            </tinymce>
        </div>
        </transition> -->
    </span>
</template>

<script>
    // import VueEasyTinyMCE from '../plugins/tinymce/vue-easy-tinymce.min.js';
    

    export default{
        props: ['postTitle', 'postCenter', 'textcolor'],
        // components: {
        //     'tinymce': VueEasyTinyMCE
        // },
        data(){
            return{
                color: `color:${this.textcolor}`,
                mouseOver: false,
                seen: false,
                myModel: this.postTitle,
                myPlugins : [
                    'advlist autolink lists link image charmap print preview anchor textcolor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table contextmenu paste code directionality template colorpicker textpattern'
                ],
                myToolbar1: 'undo redo | bold italic strikethrough | forecolor backcolor | template link | bullist numlist | ltr rtl | removeformat',
                myToolbar2 : '',
                myOtherOptions : {
                    height: 200,
                    templates: [
                        {title: 'Test template 1', content: 'Test 1'},
                        {title: 'Test template 2', content: 'Test 2'}
                    ],
                    content_css: './../css/tinymce-content.css',
                    width:'100%',
                    theme: 'modern',
                    menubar: true
                }
            }
        },
        methods: {
            onClickButton () {
                this.seen = !this.seen;
            },
            closeEditor(){
                if (this.myModel !== this.postTitle){
                    this.$refs.changedText.children[0].setAttribute("style", "margin:0")
                }
                this.seen = !this.seen;
            },
            getModelValue: function () {
                this.$refs.details.$el.innerHTML = this.myModel;
                this.seen = !this.seen;
                
            },
            changeModelValue: function () {
                this.myModel = '<p>Change value programmability</p>';
            },
            clearModelValue: function () {
                this.myModel = '';
            },
            onClickChild (value) {
                this.myModel = value;
            },
            removeText(){
                this.$el.parentElement.outerHTML = '';
            }
        }
    }
</script>

<style>
    .component-text p {
        margin: 0;
    }
    #url-icon{
        padding: 10px;
        background-position: center;
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
        background-size: 75%;
    }
    .slide-fade3-enter-active {
    transition: all .3s ease;
    }
    .slide-fade3-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade3-enter, .slide-fade3-leave-to
    /* .slide-fade3-leave-active до версии 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
    }
</style>
