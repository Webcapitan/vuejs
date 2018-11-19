<template>
    <form class="text-field-wrap">
        <fieldset>

            <color-component :metadata="metadata" :colorVis="colorVis"></color-component>

            <logo-component :img="metadata"></logo-component>

            <text-editor 
                :defaultdata="metadata.title2.default" 
                :changeddata="metadata.title2"
                :hrefdata="metadata.title2.href"
                :templateid="templateid"
                titleField="Price">
            </text-editor>

            <text-editor
                v-if="templateid != 5 && templateid != 6"
                :defaultdata="metadata.title3.default" 
                :changeddata="metadata.title3" 
                :hrefdata="metadata.title3.href"
                :templateid="templateid"
                titleField="Main Header">
            </text-editor>

            <text-editor 
                :defaultdata="metadata.text1.default" 
                :changeddata="metadata.text1" 
                :hrefdata="metadata.img.href"
                :templateid="templateid"
                titleField="Property Description">
            </text-editor>

            <text-editor
                    v-if="templateid != 5"
                :defaultdata="metadata.title4.default" 
                :changeddata="metadata.title4" 
                :hrefdata="metadata.title4.href"
                :templateid="templateid"
                titleField="Specifications">
            </text-editor>

            <text-editor
                     v-if="templateid != 5"
                :defaultdata="metadata.listItem.item1.default" 
                :changeddata="metadata.listItem.item1" 
                :hrefdata="metadata.listItem.item1.href"
                :templateid="templateid"
                titleField="Bullet Point 1">
            </text-editor>

            <text-editor
                     v-if="templateid != 5"
                :defaultdata="metadata.listItem.item2.default" 
                :changeddata="metadata.listItem.item2" 
                :hrefdata="metadata.listItem.item2.href"
                :templateid="templateid"
                titleField="Bullet Point 2">
            </text-editor>
            
            <text-editor
                     v-if="templateid != 5"
                :defaultdata="metadata.listItem.item3.default" 
                :changeddata="metadata.listItem.item3" 
                :hrefdata="metadata.listItem.item3.href"
                :templateid="templateid"
                titleField="Bullet Point 3">
            </text-editor>

            
            <text-editor
                     v-if="templateid != 5"
                :defaultdata="metadata.listItem.item4.default" 
                :changeddata="metadata.listItem.item4" 
                :hrefdata="metadata.listItem.item4.href"
                :templateid="templateid"
                titleField="Bullet Point 4">
            </text-editor>

            <text-editor
                     v-if="templateid != 5"
                :defaultdata="metadata.listItem.item5.default" 
                :changeddata="metadata.listItem.item5" 
                :hrefdata="metadata.listItem.item5.href"
                :templateid="templateid"
                titleField="Bullet Point 5">
            </text-editor>

            <text-editor 
                v-if="templateid == 2 && templateid == 4 && templateid != 5"
                :defaultdata="metadata.listItem.item6.default" 
                :changeddata="metadata.listItem.item6" 
                :hrefdata="metadata.listItem.item6.href"
                :templateid="templateid"
                titleField="Bullet Point 6">
            </text-editor>

            <!--<text-editor -->
                <!--v-if="templateid == 1"-->
                <!--:defaultdata="metadata.title5.default" -->
                <!--:changeddata="metadata.title5" -->
                <!--:hrefdata="metadata.title5.href"-->
                <!--:templateid="templateid"-->
                <!--titleField="Property Description">-->
            <!--</text-editor>-->

            <text-editor 
                v-if="templateid == 1 || templateid == 2 || templateid == 4"
                :defaultdata="metadata.subtext1.default" 
                :changeddata="metadata.subtext1" 
                :hrefdata="metadata.subtext1.href"
                :templateid="templateid"
                titleField="Property 1">
            </text-editor>

            <text-editor 
                v-if="templateid == 1 || templateid == 2"
                :defaultdata="metadata.subtext2.default" 
                :changeddata="metadata.subtext2" 
                :hrefdata="metadata.subtext2.href"
                :templateid="templateid"
                titleField="Property 2">
            </text-editor>

            <text-editor 
                v-if="templateid == 1 || templateid == 2"
                :defaultdata="metadata.subtext3.default" 
                :changeddata="metadata.subtext3" 
                :hrefdata="metadata.subtext3.href"
                :templateid="templateid"
                titleField="Property 3">
            </text-editor>

            <text-editor 
                v-if="templateid == 1 || templateid == 2 || templateid == 4"
                :defaultdata="metadata.subtext4.default" 
                :changeddata="metadata.subtext4" 
                :hrefdata="metadata.subtext4.href"
                :templateid="templateid"
                titleField="Property 4">
            </text-editor>

            <!--<text-editor -->
                <!--:defaultdata="metadata.userOffered.default" -->
                <!--:changeddata="metadata.userOffered" -->
                <!--:hrefdata="metadata.userOffered.href"-->
                <!--:templateid="templateid"-->
                <!--titleField="OFFERED BY">-->
            <!--</text-editor>-->

            <label>Full Name</label>
            <text-editor 
                :defaultdata="metadata.name.default" 
                :changeddata="metadata.name" 
                :hrefdata="metadata.name.href"
                :templateid="templateid"
                titleField="USER NAME">
            </text-editor>

            <label>Designation</label>
            <user-editor
                    :addinginfo="addinginfo"
                    field="designations"
                    :metadata="metadata"
                    metalink="designationHref"
                    titleField="USER DESIGNATION"
            >
            </user-editor>
            <label>Phone Number</label>
            <user-editor
                    :addinginfo="addinginfo"
                    field="phone"
                    :metadata="metadata"
                    metalink="phoneHref"
                    titleField="USER PHONE"
            >
            </user-editor>
            <label>Email</label>
            <user-editor
                    :addinginfo="addinginfo"
                    field="email"
                    :metadata="metadata"
                    metalink="emailHref"
                    titleField="USER EMAIL"
            >
            </user-editor>

            <label>Property Address</label>
            <label class="field_wrap">
                <div>
                    <input ref="location"
                       @blur="onLocationInputBlur"
                       v-location="{callback: onLocationChanged}"
                       type="text" name="location"
                       class="form__text form__text_mod form-control">
                </div>
            </label>

            <label>Company Address</label>
            <label class="field_wrap">
                <div>
                    <input ref="location2"
                           @blur="onLocationInputBlur2"
                           v-location="{callback: onLocationChanged2}"
                           type="text" name="location"
                           class="form__text form__text_mod form-control">
                </div>
            </label>


            <soc-link
                :addinginfo="addinginfo"
                metalink="facebook"
                :obj="addinginfo.facebook">
                Facebook profile
            </soc-link>

            <soc-link
                :addinginfo="addinginfo"
                metalink="twitter"
                :obj="addinginfo.twitter">
                Twitter profile
            </soc-link>

            <soc-link
                :addinginfo="addinginfo"
                metalink="linkedin"
                :obj="addinginfo.linkedin">
                Linkedin profile
            </soc-link>

        </fieldset>

        <div>
            <strong>Links</strong>
            <link-component :metadata="metadata.link1" :count="metadata.linkCount" placeholername="Link 1"></link-component>
            <link-component :metadata="metadata.link2" :count="metadata.linkCount" placeholername="Link 2"></link-component>
            <link-component v-if="templateid == 5 || templateid == 6" :metadata="metadata.link3" :count="metadata.linkCount" placeholername="Link 3"></link-component>
        </div>

    </form>
</template>

<script>

Vue.component('link-component', {
    props : ['metadata','count','placeholername'],
    data: function () {
        return {
        }
    },
    computed:{
    },
    template: `
    <label class="field_wrap">
        <div>
            <input type="text"
                :placeholder="placeholername"
                @input="$set(metadata,'title', $event.target.value)"
            >
        </div>
        <div class="addlink">
            <input type="text"
                placeholder="http://example.com"
                v-model="metadata.href"
            >
        </div>
    </label>
`
})
Vue.component('soc-link', {
    props : ['addinginfo','metalink', 'obj'],
    data: function () {
        return {
            data : this.obj
        }
    },
    template: `
        <label class="field_wrap">
            <div>
                <slot></slot>
            </div>
            <div class="addlink">
                <input type="text"
                    placeholder="http://example.com"
                    v-model="addinginfo[metalink]"
                >
            </div>
        </label>
    `
})

Vue.component('user-editor', {
    props : ['addinginfo', 'field', 'metadata', 'metalink','titleField'],
    data: function () {
        return {
            seen: false,
            title: this.titleField
        }
    },
    methods : {
        showInp(){
            this.seen = !this.seen
        },
        setVal(e){
            this.$set(this.addinginfo,[this.field] ,e.target.value)
        },
        setLink(e){
            this.$set(this.metadata,[this.metalink] ,e.target.value)
        }
    },
    template: `
        <label class="field_wrap">
            <div>
                <input type="text"

                    :placeholder="title"
                    @input="setVal"
                >
                <!--<button type="button" title="Add link" @click="showInp"></button>-->
            </div>
            <div class="addlink" v-show="seen">
                <input type="text"
                    :value="metadata[metalink]"
                    placeholder="http://example.com"
                    @input="setLink"
                >
            </div>
        </label>
    `
});

Vue.component('text-editor', {
    props : ['defaultdata', 'changeddata', 'hrefdata', 'templateid', 'disable','titleField'],
    data: function () {
        return {
            seen: false,
            title: this.titleField
        }
    },
    methods : {
        showInp(){
            this.seen = !this.seen
        },
    },
    template: `
        <label class="field_wrap">
            <div>
                <input type="text"
                    :disabled="disable"
                    :value="changeddata.changed"
                    :placeholder="title"
                    @input="$set(changeddata,'changed' ,$event.target.value)"
                >
                <!--<button type="button" title="Add link" @click="showInp" style=""></button>-->
            </div>
            <div class="addlink" v-show="seen">
                <input type="text"
                    :value="hrefdata.changed != null ? hrefdata.changed : hrefdata.default"
                    placeholder="http://example.com"
                    @input="$set(hrefdata,'changed' ,$event.target.value)"
                >
            </div>
        </label>
    `
    });

    import {location} from '../directives/location.js';

    export default{
        props : ['metadata', 'addinginfo', 'templateid', 'formfields', 'colorVis'],
        directives: {
            location
        },
        data(){
            return{
                clearAddressField : ''
            }
        },
        computed:{
            // locationName(){
            //     return this.addinginfo.brokerage_address = this.formFields.location;
            // },
            location(){
                return this.metadata.brokerage_address = this.formfields.location
            },

            location2(){
                return this.addinginfo.brokerage_address = this.formfields.location
            },
        },
        methods: {
            onLocationChanged(data) {

                this.formfields.country_code = data.country_code;
                this.formfields.city = data.city;
                this.formfields.location = data.location;
                this.metadata.brokerage_address  = data.location;

                // this.location = data.location;
            },

            onLocationInputBlur(event) {


                    this.$emit('addressEmpty', event.target.value)
                    // this.$set(this.metadata,'brokerage_address',null)


                setTimeout(() => {

                    if (this.location !== this.formfields.location) {

                        this.formfields.location = this.location;
                    }
                }, 50);
            },
            onLocationChanged2(data) {

                this.formfields.country_code = data.country_code;
                this.formfields.city = data.city;
                this.formfields.location = data.location;
                this.metadata.company_address  = data.location;

                // this.location = data.location;
            },

            onLocationInputBlur2(event) {


                this.$emit('addressEmpty2', event.target.value)
                // this.$set(this.metadata,'brokerage_address',null)


                setTimeout(() => {

                    if (this.location2 !== this.formfields.location) {

                        this.formfields.location = this.location2;
                    }
                }, 50);
            },
        }
    }
</script>

<style lang="sass">
    .text-field-wrap
        width: 100%;
        padding: 0 25px;
    .field_wrap
        width: 100%
        margin-bottom: 15px
        div
            border-bottom: 1px solid #888
            display: flex
            justify-content: space-between
            align-items: center;
            input
                border: none
                background: transparent
                outline: none
                width: calc(100% - 20px)
                padding: 10px 15px 10px 0
            button 
                background-color: transparent
                border: none
                outline: none
                background-image : url(http://satisfact.isolly.com/esendz/build/img/chain.svg)
                background-size : 100%
                width: 15px
                height: 15px
                display: block
                cursor: pointer
        .addlink
            input
                padding: 10px 15px 10px 0
</style>
