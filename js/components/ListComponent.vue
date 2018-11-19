<template>
    <tr @mouseover="mouseOver = true" @mouseleave="mouseOver = false" style="vertical-align: top;display: block;width: 100%;position:relative">

        <td style="padding:0 0 10px 0">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                <tr>
                    <td style="padding: 3px 0 0 0;width:15px;line-height: 19px;height: 20px;display: inline-block;">
                        <table align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px;width: 15px;">
                            <tr style="display: inline-block;vertical-align: sub;padding:0;">
                                <td style="padding: 0">
                                    <img :src="postImg" alt="postImg" :width="imgwidth" style="width: 15px;display: inline-block;vertical-align: top;">
                                </td>
                            </tr>
                        </table>
                    </td>

                    <td style="padding:0;display: inline-block;">
                        <table  cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px;">
                            <tr>
                                <td style="padding:0 0 0 10px;" align="left" :style="{'width':`${width}`}">
                                    <span v-html="myModel" ref="changedText" style="line-height: 22px;font-weight: 400;text-align:left;font-family: sans-serif;font-size:14px;">
                                        <slot></slot>
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>

        <transition name="slide-fade2">
            <div class="img-edit_panel" v-if="mouseOver">
                <label 
                    id="label-file"
                    title="Upload picture"
                    v-show="mouseOver">
                    <input type="file" class="set-image" @change="onFileChange" @click="hideInputs">
                </label>
                
                <label 
                    for="url-image" 
                    id="url-icon" 
                    title="Insert picture as url"
                    v-show="mouseOver"
                    @click="showInput">
                </label>
                <input 
                    type="text" 
                    id="url-image" 
                    placeholder="www.example.jpg"
                    @change="urlchange" 
                    v-show="seen2">
                <label id="text-icon" title="Edit text" v-show="mouseOver" @click="onClickButton"></label>
                <label id="remove-icon" title="Remove item" v-show="mouseOver" @click="removeText"></label>
            </div>
        </transition>

        <div class="popup-edit" v-if="seen">
            <i class="icon-close" @click="onClickButton"></i>
            <tinymce
                v-model="myModel"
                :plugins="myPlugins" :toolbar1="myToolbar1" :toolbar2="myToolbar2"
                :other="myOtherOptions">
            </tinymce>
        </div>
    </tr>
</template>

<script>

    import VueEasyTinyMCE from '../plugins/tinymce/vue-easy-tinymce.min.js';

    export default{
        props: ['postImg','customwidth','imgwidth'],
        components: {
            'tinymce': VueEasyTinyMCE
        },
        data(){
            return {
                width: `${this.customwidth}px`,
                image: '',
                mouseOver: false,
                seen: false,
                seen2: false,
                mouseOver: false,
                // myModel: this.$slots.default[0].text,
                myModel: this.$slots.default["0"].text,
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
                    content_css: './css/tinymce-content.css',
                    width:'100%',
                    theme: 'modern',
                    menubar: true
                }
            }
        },
        methods: {
            onClickButton () {
                this.seen = !this.seen;
                this.seen2 = false;

                if(this.myModel  !== this.$slots.default[0].text){
                    this.$refs.changedText.children[0].setAttribute("style", "margin:0")
                }
                 
            },
            removeText(){
                this.$options._parentVnode.elm.outerHTML = '';
                this.seen2 = false;
            },
             hideInputs(){
                this.seen2 = false;
            },
            showInput(){
                this.seen2 = !this.seen2;
            },
            urlchange(value){
                var vm = this;
                vm.postImg = value.srcElement.value;
                value.srcElement.value = '';
                this.seen2 = false
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
                vm.postImg = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
    }
</script>

<style>
    span p{
        margin: 0;
    }
</style>

