<template>
    <div style="" class="pt-wrap">
        <!--calc(100vh - 217px)-->
        <span class="title">Which regions are you sending your listing to?</span>

        <div class="search-wrapper">
            <form action="">
                <i class="fas fa-search"></i>
                <input v-model="searchString" type="text" placeholder="Type to search">
            </form>
            <span class="searchResult">

                <a class="searchCurrent" v-for="region of searchResult" @click.prevent="addRegionToSelected(region)">
                    <div class="fakeBox" :class="{'active': isRegionSelected(region), '': !isRegionSelected(region)}"></div>
                    {{convertSearchResultItem(region)}} <br>
        <!--<i :class="{'fa-plus': isRegionSelected(region), 'fa-minus': !isRegionSelected(region)}" class="fas"></i>-->
                </a>

            </span>
        </div>

        <form action="">

            <div class="regions-container">
                <div class="control-group">

                    <i v-if="regions == null" class="fa fa-circle-o-notch fa-spin"></i>

                    <ul v-if="regions" class="countysWrap">

                        <li>
                            <span v-if="usa.isShown" class="listItemWrap">
                                <div @click="toggleRegionSelection({country: usa.name})" class="region-input-wrap"></div>
                                <label class="control control-checkbox">
                                    <input :checked="isRegionSelected({country: usa.name})" hidden type="checkbox"/>
                                    <div class="control_indicator"></div>
                                </label>
                                <span @click="toggleChildrenVisibility({country: usa.name})" class="listPlace">
                                    <i :class="{'fa-plus': isRegionSelected({country: usa.name}), 'fa-minus': !isRegionSelected({country: usa.name})}" class="fas fa-plus"></i>
                                    <span class="toUppercase2">{{usa.name}}</span>
                                    <small class="credits">{{!isRegionDenied({country: usa.name}) ? `credits: ${getCredits('usa', 'country')} ,` : ``}}
                                        contacts: {{usa.emails_count}}</small>
                                </span>
                            </span>
                            <ul>
                                <!--states-->
                                <li v-if="state.isShown" v-for="state of usa.states">
                                    <span class="listItemWrap">
                                        <div @click="toggleRegionSelection({country: usa.name, state: state.name})" class="region-input-wrap"></div>
                                        <label class="control control-checkbox">
                                            <input :checked="isRegionSelected({country: usa.name, state: state.name})" hidden type="checkbox"/>
                                            <div class="control_indicator"></div>
                                        </label>

                                        <span @click="toggleChildrenVisibility({country: usa.name, state: state.name})" class="listPlace">
                                            <i :class="{'fa-plus': isRegionSelected({country: usa.name, state: state.name}), 'fa-minus': !isRegionSelected({country: usa.name, state: state.name})}" class="fas fa-plus"></i>
                                            {{state.name}} <small class="credits">credits: {{getCredits('usa', 'state')}} , contacts: {{state.emails_count}}</small>
                                        </span>
                                    </span>
                                    <ul>
                                        <!--counties-->
                                        <li v-if="county.isShown" v-for="county of state.counties">
                                            <span class="listItemWrap">
                                                <div @click="toggleRegionSelection({country: usa.name, state: state.name, county: county.name})" class="region-input-wrap"></div>
                                                <label class="control control-checkbox">
                                                <input :checked="isRegionSelected({country: usa.name, state: state.name, county: county.name})" hidden type="checkbox"/>
                                                <div class="control_indicator"></div>
                                            </label>

                                            <span @click="toggleChildrenVisibility({country: usa.name, state: state.name, county: county.name})" class="listPlace">
                                                    <i :class="{'fa-plus': isRegionSelected({country: usa.name, state: state.name, county: county.name}), 'fa-minus': !isRegionSelected({country: usa.name, state: state.name, county: county.name})}" class="fas fa-plus"></i>
                                                    {{county.name}} <small class="credits">credits: {{getCredits('usa', 'county')}} , contacts: {{county.emails_count}}</small>
                                                </span>
                                            </span>
                                            <ul>
                                                <!--cities-->
                                                <li v-if="city.isShown" v-for="city of county.cities">
                                                    <span class="listItemWrap">
                                                        <div @click="toggleRegionSelection({country: usa.name, state: state.name, county: county.name, city: city.name})" class="region-input-wrap"></div>
                                                        <label class="control control-checkbox">
                                                        <input :checked="isRegionSelected({country: usa.name, state: state.name, county: county.name, city: city.name})" hidden type="checkbox"/>
                                                        <div class="control_indicator"></div>
                                                    </label>
                                                    <span class="listPlace">
                                                            {{city.name}} <small class="credits">credits: {{getCredits('usa', 'city')}} , contacts: {{city.emails_count}}</small>
                                                        </span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <span v-if="canada.isShown" class="listItemWrap">
                                <div @click="toggleRegionSelection({country: canada.name})" class="region-input-wrap"></div>
                                <label class="control control-checkbox">
                                    <input :checked="isRegionSelected({country: canada.name})" hidden type="checkbox"/>
                                    <div class="control_indicator"></div>
                                </label>

                                <span @click="toggleChildrenVisibility({country: canada.name})" class="listPlace">
                                    <i :class="{'fa-plus': isRegionSelected({country: canada.name}), 'fa-minus': !isRegionSelected({country: canada.name})}" class="fas fa-plus"></i>
                                    <span class="toUppercase2">{{canada.name}}</span> <small class="credits">credits: {{getCredits('canada', 'country')}} , contacts: {{canada.emails_count}}</small>
                                </span>
                            </span>
                            <ul>
                                <!--provincies-->
                                <li v-if="province.isShown" v-for="province of canada.provincies">
                                    <span class="listItemWrap">
                                        <div @click="toggleRegionSelection({country: canada.name, province: province.name})" class="region-input-wrap"></div>
                                        <label class="control control-checkbox">
                                            <input :checked="isRegionSelected({country: canada.name, province: province.name})" hidden type="checkbox"/>
                                            <div class="control_indicator"></div>
                                        </label>

                                        <span @click="toggleChildrenVisibility({country: canada.name, province: province.name})" class="listPlace">
                                             <i :class="{'fa-plus': isRegionSelected({country: canada.name, province: province.name}), 'fa-minus': !isRegionSelected({country: canada.name, province: province.name})}" class="fas fa-plus"></i>
                                            {{province.name}} <small class="credits">credits: {{getCredits('canada', 'province')}} , contacts: {{province.emails_count}}</small>
                                        </span>
                                    </span>
                                    <ul>
                                        <!--cities-->
                                        <li v-if="city.isShown" v-for="city of province.cities">
                                            <span class="listItemWrap">
                                                <div @click="toggleRegionSelection({country: canada.name, province: province.name, city: city.name})" class="region-input-wrap"></div>
                                             <label class="control control-checkbox">
                                                <input :checked="isRegionSelected({country: canada.name, province: province.name, city: city.name})" hidden type="checkbox"/>
                                                <div class="control_indicator"></div>
                                            </label>

                                            <span class="listPlace">
                                                    <i class="fas fa-plus"></i>
                                                    {{city.name}} <small class="credits">credits: {{getCredits('canada', 'city')}} , contacts: {{city.emails_count}}</small>
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>

            </div>

            <div>
            </div>

            <div class="total-container">
                <span>Total Credits: {{totalCredits}}</span>
                <span>Total Contacts: {{totalEmailsCount}}</span>
            </div>
                <!-- <button type="button" @click.prevent="getHTML">getHTML</button> -->
            <div class="buttons-container">
                <button :disabled="isStoring" id="save" @click.prevent="submitData(true)">SAVE DRAFT</button>
                <button :disabled="!selectedRegions.length || isStoring" type="button" id="send" @click.prevent="submitData(false)">SEND</button>
            </div>

        </form>
    </div>
</template>


<script>

import { EventBus } from './event-bus.js';


    export default{
        props: ['pricings', 'dispatch'],
        data(){
            return{
                regions : null,
                selectedRegions: [],

                searchResult: [],
                searchString: null,

                total: 0,
                contacts: 0,

                usa: null,
                canada: null,

                // -----------------------------------
                isOpened: true,
                isClosed: false,

                // countryPricing: '',
                // statePricing: '',
                // countyPricing: '',
                // cityPricing: '',

                // ------------------------------------
                usaState: [],
                usaCounty: [],
                usaCity: [],

                // ------------------------
                CountryList : [],

                postObject : {
                        regions : [],
                        html : '',
                        isDraft : false,
                        template_id : 0,
                        metadata : {},
                        adding_info : {},
                },

                postRegions : [
                ],

                isStoring: false,

                deniedRegions: [
                    {country: 'usa'}
                ]
            }
        },

        computed:{
            // _(){
            //     return _;
            // },
            totalCredits () {

                let count = 0;

                for (let region of this.selectedRegions) {

                    count += +this.getCredits( region.country, this.getRegionType(region));
                }

                return count;
            },
            totalEmailsCount (){

                let count = 0;

                for (let region of this.selectedRegions) {

                    count += +this.getTargetRegion(region).emails_count;
                }

                return count;
            }
        },
        methods: {
            // getHTML(){
            //     EventBus.$emit('getTemplate', this.flag);
            //     this.postObject.html = this.postObject.html.replace(/&quot;/g, `'`)
            //     console.log(this.postObject)
            //     console.log(this.postObject.html)

            // },
            init(){
                // this.UsaList = this.regions.countries[0]
                // this.CountryList = []
                // for(var k in this.regions){
                //     let tempArr = this.regions[k]
                //     for(var k2 in tempArr){
                //         this.CountryList.push(tempArr[k2])
                //     }
                // }

            },


            toggleRegionSelection(region){

                if (this.isRegionDenied(region)) {
                    return;
                }

                if (!this.isRegionSelected(region)){

                    this.addRegionToSelected(region);

                    this.hideRegions(this.getChildRegions(this.getTargetRegion(region)));
                }

                else {

                    this.removeChildOrParentRegionsFromSelected(region);

                    for (let index in this.selectedRegions) {

                        if (_.isEqual(region, this.selectedRegions[index])) {

                            this.selectedRegions.splice(index, 1);

                            break;
                        }
                    }
                }
            },

            addRegionToSelected(region){

                if (this.isRegionSelected(region)) {
isRegionDenied
                    return;
                }

                this.removeChildOrParentRegionsFromSelected(region);

                this.selectedRegions.push(region);
            },

            getChildRegions(region){
                return region.cities || region.counties || region.states || region.provincies;
            },

            isRegionSelected(rgn) {

                for (let region of this.selectedRegions) {

                    if (_.isEqual(rgn, region)) {

                        return true
                    }
                }

                return false;
            },

            isRegionDenied(rgn) {

                for (let region of this.deniedRegions) {

                    if (_.isEqual(rgn, region)) {

                        return true
                    }
                }

                return false;
            },

            removeChildOrParentRegionsFromSelected(region) {

                this.selectedRegions = Object.values(_.pickBy(this.selectedRegions, rgn => {

                        if (Object.keys(region).length < Object.keys(rgn).length){

                            for (let key in region){

                                if (key && region[key] !== rgn[key]){
                                    return true;
                                }
                            }

                            return false;
                        }

                        else if (Object.keys(region).length > Object.keys(rgn).length){

                            for (let key in rgn){

                                if (key && region[key] !== rgn[key]){
                                    return true;
                                }
                            }

                            return false;
                        }

                        return true;

                    })
                );
            },

            toggleChildrenVisibility(region){

                if (this.isRegionSelected(region)) {
                    return;
                }

                for (let rgn of this.getChildRegions(this.getTargetRegion(region))) {

                    rgn.isShown = !rgn.isShown;
                }
            },

            hideRegions(regions){

                if (!regions || !regions.length) {
                    return;
                }

                for (let region of regions) {

                    region.isShown = false;
                }
            },

            getTargetRegion(region){

                let target = _.find(this.regions.countries, ['name', region.country]);

                if (region.state) {
                    target = _.find(target.states, ['name', region.state]);
                }
                if (region.county) {
                    target = _.find(target.counties, ['name', region.county]);
                }
                if (region.province) {
                    target = _.find(target.provincies, ['name', region.province]);
                }
                if (region.city) {
                    target = _.find(target.cities, ['name', region.city]);
                }

                return target;
            },

            getRegionType(region) {

                if (region.city) {
                    return 'city';
                }
                if (region.county){
                    return 'county';
                }
                if (region.state){
                    return 'state';
                }
                if (region.province){
                    return 'province';
                }
                return 'country';
            },

            convertSearchResultItem(region) {


                // console.log(`${
                //         region.country ? region.country.toUpperCase() : ''
                //     }${
                //         region.state ? `, ${region.state}` : ''
                //     }${
                //         region.province ? `, ${region.province}` : ''
                //     }${
                //         region.county ? `, ${region.county}` : ''
                //     }${
                //         region.city ? `, ${region.city}` : ''
                //     }`);

                return `${
                    region.country ? region.country.toUpperCase() : ''
                }${
                    region.state ? `, ${region.state}` : ''
                }${
                    region.province ? `, ${region.province}` : ''
                }${
                    region.county ? `, ${region.county}` : ''
                }${
                    region.city ? `, ${region.city}` : ''
                }`;
            },

            isInSearchCriteria(regionName){

                return regionName.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1;
            },

            getCredits(country, type) {

                let pricing = _.find(this.pricings, {country, type});

                return pricing ? +pricing.credits : 0;
            },

            addIsShownFlags() {

                let regions = _.cloneDeep(this.$store.state.regions);

                for (let country of regions.countries){

                    country.isShown = true;
                }

                for (let state of _.find(regions.countries, ['name', 'usa']).states){

                    state.isShown = false;

                    for (let county of state.counties){

                        county.isShown = false;

                        for (let city of county.cities){

                            city.isShown = false;
                        }
                    }
                }

                for (let province of _.find(regions.countries, ['name', 'canada']).provincies){

                    province.isShown = false;

                    for (let city of province.cities){

                        city.isShown = false;
                    }
                }

                this.usa = _.find(regions.countries, ['name', 'usa']);
                this.canada = _.find(regions.countries, ['name', 'canada']);

                this.regions = regions;
            },

            submitData(isDraft = false) {

                if (this.isStoring || (!isDraft && !this.selectedRegions.length)) {
                    return;
                }

                EventBus.$emit('getTemplate', this.flag);
                    this.postObject.isDraft = isDraft;
                    this.postObject.regions = this.selectedRegions;

                    this.postObject.html = this.postObject.html.replace(/&quot;/g, `'`);



                    if(!this.dispatch){

                        this.$store.dispatch('storeDispatch', this.postObject).then((response) => {

                            if (response && response.redirectUrl) {
                                window.location.replace(response.redirectUrl);
                            }

                            this.isStoring = false;

                        }).catch((error) => {

                            this.isStoring = false;

                        });
                    }
                    else{

                        this.postObject.id = this.dispatch.id;

                        this.$store.dispatch('updateDispatch', this.postObject).then((response) => {

                            if (response && response.redirectUrl) {
                                window.location.replace(response.redirectUrl);
                            }

                            this.isStoring = false;

                        }).catch((error) => {

                            this.isStoring = false;
                        });
                    }
                },
        },
        mounted() {
            // GET PRICE FOR COUNTRY

            // this.countryPricing = this.pricings[3].credits;
            // this.statePricing = this.pricings[2].credits;
            // this.countyPricing = this.pricings[1].credits;
            // this.cityPricing = this.pricings[0].credits;

            if ( this.regions  ) {

                this.init()
            }
            else{
                this.$store.dispatch('getRegions');
            }
        },
        created () {
            // get Template
             EventBus.$on('evPostTemplate', selectedTemplate => {
                 let html = selectedTemplate.html
                 this.postObject.html = html.outerHTML + selectedTemplate.banner
                 this.postObject.template_id = selectedTemplate.id
                 this.postObject.metadata = selectedTemplate.data
                 this.postObject.adding_info = selectedTemplate.adding_info
             })

        },

        watch: {
            '$store.state.regions': function (val) {
                this.regions = val;
                // this.init()
                this.addIsShownFlags();

                if (this.dispatch && this.dispatch.regions){

                    for (let region of this.dispatch.regions){

                        this.addRegionToSelected(

                            Object.assign(!Array.isArray(region.region_info)
                                ? _.cloneDeep(region.region_info)
                                : {},
                                {country: region.country.toLowerCase()}
                            )
                        );
                    }

                    this.deniedRegions = _.filter(this.deniedRegions, r => !this.isRegionSelected(r));
                }
            },
            searchString(val) {

                this.searchResult = [];

                if (!val) {
                    return;
                }

                for (let country of this.regions.countries){

                    if (this.isInSearchCriteria(country.name)) {
                        this.searchResult.push({country: country.name});
                    }
                }

                for (let state of this.usa.states){

                    if (this.isInSearchCriteria(state.name)) {
                        this.searchResult.push({country: this.usa.name, state: state.name});
                    }

                    for (let county of state.counties){

                        if (this.isInSearchCriteria(county.name)) {
                            this.searchResult.push({country: this.usa.name, state: state.name, county: county.name});
                        }

                        for (let city of county.cities){

                            if (this.isInSearchCriteria(city.name)) {
                                this.searchResult.push({country: this.usa.name, state: state.name, county: county.name, city: city.name});
                            }
                        }
                    }
                }

                for (let province of this.canada.provincies){

                    if (this.isInSearchCriteria(province.name)) {
                        this.searchResult.push({country: this.canada.name, province: province.name});
                    }

                    for (let city of province.cities){

                        if (this.isInSearchCriteria(city.name)) {
                            this.searchResult.push({country: this.canada.name, province: province.name, city: city.name});
                        }
                    }
                }
            }
        },
    }
</script>

<style>
div .listItemWrap .control_indicator{
    top: 2px;
}
    .countysWrap{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .countysWrap li{
        font-size: 12px;
        color: #333;
        font-family: sans-serif;
    }
    .countysWrap ul{
        list-style-type: none;
        padding: 0;
        margin: 0 0 0 15px;
    }
    .listItemWrap{
        display: flex;
        margin-bottom: 3px;
    }
    .listItemWrap .control{
        margin-bottom: 0;
        padding-top: 0;
    }
    .listItemWrap .control_indicator{
        top: 0;
    }
    .listItemWrap .fas{
        margin-right: 5px;
    }
    .listPlace{
        cursor: pointer;
        color: #333;
        font-weight: 600;
        font-size: 14px;
        font-family: "Open Sans",sans-serif;
    }
    .credits{
        color: #777;
        font-weight: 400;
        font-size: 14px;
        font-family: "Open Sans",sans-serif;
    }
    .listItemWrap{
        position: relative;
    }
    .region-input-wrap{
        width: 16px;
        height: 16px;
        background-color: transparent;
        display: inline-block;
        position: absolute;
        top: 2px;
        z-index: 2;
    }
    .search-wrapper{
        position: relative;
    }
    .searchResult{
        position: absolute;
        left: 0;
        top: 35px;
        background: #efefef;
        z-index: 2;
        max-height: 300px;
        overflow: auto;
        width: 100%;
        z-index: 3;
    }
.searchResult a{
    transition: ease 0.2s;
    display: block;
    width: 100%;
    cursor: pointer;
    padding-left: 15px;
}
.searchResult a:hover{
    background-color: #ccc;
}
    .searchCurrent .fa-plus:before,
    .searchCurrent .fa-minus:before{
        color: rgb(1, 187, 234);
        font-size: 12px;
        margin-right: 5px;
    }
    .fakeBox{
        width: 16px;
        height: 16px;
        background-color: transparent;
        display: inline-block;
        position: relative;
        top: 2px;
        z-index: 2;
        border: 1px solid #ccc;
    }
.fakeBox.active:after{
    position: absolute;
    content: '';
    left: 5px;
    top: 2px;
    width: 5px;
    height: 9px;
    border: solid #01bbea;
    border-width: 0 2px 2px 0px;
    transform: rotate(45deg);
}
    .toUppercase2{
        text-transform: uppercase;
    }
    .pt-wrap{
        width: 100%;
    }
.fa.fa-circle-o-notch{
    font-size: 24px;
    display: block;
    width: 35px;
    height: 35px;
    border: 3px dashed #333;
    border-radius: 50%;
    margin: 20px auto;
}
</style>