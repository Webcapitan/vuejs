<template>
    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border:0;position: relative;border-spacing: 0;padding:0"
           v-bind:style="ccsWidth,cssMaxWidth" @mouseover="mouseOver = true" @mouseleave="mouseOver = false" v-bind:class="wrapperImgClass">
        <tr>
            <td style="padding:0">
                <a 
                    v-bind:href="dataHref" 
                    :class="postClass"
                    v-bind:style="ccsWidth,cssMaxWidth"
                    style="display:table;padding:0"
                    target="_blank"
                    @click.prevent="checkUrl">

                        <img 
                        v-bind:src="img"
                        v-bind:class="postClass"
                        v-bind:style="ccsWidth,cssMaxWidth"
                        style="padding:0"
                        alt="img"
                        v-bind:width="imgwidth">
                </a>
            </td>
        </tr>

        <img-edit 
            v-if="mouseOver" 
            @changeImgEmit="customChildEvent" 
            @changeImgHrefEmit="hrefChildEvent"
            :class="postCenter">
        </img-edit>

    </table>
</template>

<script>
    export default{
        props: ['postImg', 'postCenter', 'postClass', 'wrapperImgClass','maxh','imgwidth'],
        data(){
            return{
                mouseOver: false,
                dataHref: '',
                maxHeight : `max-height: ${this.maxh}px`,
                img : this.postImg,
                width: `${this.imgwidth}px`,
                ccsWidth: `width:${this.imgwidth}px`,
                cssMaxWidth : `width:${this.imgwidth}px`,
            }
        },
        methods: {
            checkUrl(){
                if( this.dataHref !== ''){
                    window.open(this.dataHref);
                }
            },
            customChildEvent: function (value) {
                // get data base64 from child component
                // console.log(value);
                this.img = value;
            },

            hrefChildEvent: function (value) {
                this.dataHref = value
            }
        }
    }
</script>

<style>
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

