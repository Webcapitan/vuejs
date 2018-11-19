<template>
    <div v-if="credits && $store.state.isCreditsModalShown">
        <div class="popup__bg" @click="closeModal"></div>
        <div class="popup-edit pricing">
            <i class="icon-close" @click="closeModal"></i>
            <span class="popuptitle">Buy Credits</span>

            <div class="countries">
                <div class="usa_description">
                    <strong class="country_title">USA</strong>

                    <div class="pricing_row" v-for="value, key in {city: 'City', county: 'County', state: 'State', country: 'Elite list'}" v-if="findPricing('usa', key)">
                        <span class="pricing_name">{{value}}</span>
                        <span class="pricing_value">{{findPricing('usa', key).credits}} CREDITS</span>
                    </div>

                </div>
                <div class="canada_description">
                    <strong class="country_title">Canada</strong>

                    <div class="pricing_row" v-for="value, key in {city: 'City', province: 'Province', country: 'Elite list'}" v-if="findPricing('canada', key)">
                        <span class="pricing_name">{{value}}</span>
                        <span class="pricing_value">{{findPricing('canada', key).credits}} CREDITS</span>
                    </div>

                </div>
            </div>

            <div class="priceContainer">

                <div v-for="credit of _.pickBy(credits, c => +c.amount !== 1 && +c.is_sale !== 1)">

                    <div class="plan_wrapper">
                        <span>BUY<br>{{credit.amount}} CREDITS</span>
                        <strong>{{credit.price}}</strong>
                        <a :href="`/credits/${credit.id}/checkout?back-url=${backUrl}`">buy now</a>
                    </div>

                </div>

                <div v-if="_.find(credits, c => +c.amount === 1)" class="custom-credit">

                    <div  class="plan_wrapper">
                        <span>BUY<br>CUSTOM CREDITS</span>
                        <strong>Get in touch for BULK credit pricing</strong>
                        <!--<a :href="`/credits/${_.find(credits, c => +c.amount === 1).id}/checkout?back-url=${backUrl}`">buy now</a>-->
                        <a :href="`mailto:${mailFromAddress}`">Email</a>
                    </div>

                </div>

            </div>

            <!--<div class="elitlist modal">-->
                <!--<span>ELITE LIST: top 1000 real estate professionals</span>-->
                <!--<span>1500 credits (coming soon)</span>-->
            <!--</div>-->

            <div v-for="credit of _.pickBy(credits, (c) => +c.amount !== 1 && +c.is_sale === 1)" class="specialOffer">
                <div class="sale">SALE</div>
                <div class="offer">
                    <span class="title">Special offer</span>
                    <strong class="value">{{credit.amount}} CREDITS</strong>
                </div>
                <div class="buyCredit">
                    <strong class="price">{{credit.price}}</strong>
                    <a :href="`/credits/${credit.id}/checkout?back-url=${backUrl}`" class="buy">BUY NOW</a>
                </div>
            </div>

            <!--<div class="region_type">-->
                <!--<div class="price_title">-->
                    <!--<span>Pricing</span>-->
                <!--</div>-->
                <!--<div class="headers">-->
                    <!--<span>USA</span>-->
                    <!--<span>Canada</span>-->
                <!--</div>-->
                <!--<div class="pricing">-->

                    <!--<span v-if="_.find(pricings, {type: 'city'})">City: <small>{{_.find(pricings, {type: 'city'}).credits}}</small></span>-->
                    <!--<span v-if="_.find(pricings, {type: 'county'})">County: <small>{{_.find(pricings, {type: 'county'}).credits}}</small></span>-->
                    <!--<span v-if="_.find(pricings, {type: 'state'})">State: <small>{{_.find(pricings, {type: 'state'}).credits}}</small></span>-->
                    <!--<span v-if="_.find(pricings, {type: 'city'})">City: <small>{{_.find(pricings, {type: 'city'}).credits}}</small></span>-->
                    <!--<span v-if="_.find(pricings, {type: 'state'})">Province: <small>{{_.find(pricings, {type: 'state'}).credits}}</small></span>-->
                    <!--<span v-if="_.find(pricings, {type: 'country'})">Country: <small>{{_.find(pricings, {type: 'country'}).credits}}</small></span>-->
                <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        props: ['credits', 'pricings', 'mailFromAddress'],
        data(){
            return {
                backUrl: encodeURIComponent(window.location.href.split('?')[0]),
            }
        },
        computed:{
            _(){
                return _;
            }
        },
        created () {

            if ( (new URL(window.location.href)).searchParams.get('is-credits-modal-shown') ){

                this.$store.commit('setItem', {isCreditsModalShown: true});
            }
        },
        methods : {
            closeModal(){
                this.$store.commit('setItem', {isCreditsModalShown: false});
            },

            findPricing(country, type){
                return _.find(this.pricings, {country, type});
            }
        },
    }
</script>

<style lang="sass" scoped>
    .pricing_row
        display: flex
        .pricing_name
            font-size: 18px
            font-family: "Open Sans",Sans-Serif
            font-weight: 900
            color: #333
            line-height: 30px
            min-width: 130px
            text-transform: uppercase
        .pricing_value
            font-size: 18px
            font-family: "Open Sans",Sans-Serif
            font-weight: 900
            color: #01bbea
            line-height: 30px
            text-transform: uppercase

    .countries
        display: flex
        .country_title
            font-size: 36px
            font-family: 'Open Sans', Sans-Serif
            font-weight: 900
            font-size: 36px
            color: #333
            line-height: 30px
            margin-bottom: 15px
            display: block
        .usa_description
            width: 50%
            padding: 35px
            background-image: url(/img/backing.jpg)
            display: flex
            flex-direction: column
        .canada_description
            width: 50%
            padding: 35px
            background-image: url(/img/flag.jpg)
            display: flex
            flex-direction: column
    .region_type
        display: flex
        flex-direction: column
        width: 100%
        background-color: #e2e8ea
        padding: 15px
        .price_title
            display: flex
            justify-content: center
            margin: 10px 0
            span
                font-family: 'Open Sans',sans-serif
                font-weight: 700
                font-size: 24px
        .headers
            display: flex
            justify-content: space-around
            margin-bottom: 10px
            span
                font-family: 'Open Sans',sans-serif
                font-weight: 700
                font-size: 18px
        .pricing
            display: flex
            justify-content: space-between
            span
                font-family: 'Open Sans',sans-serif
                font-weight: 400
            small
                color: #01bbea
                font-size: 18px
                font-weight: 600
    .popup__bg
        position: fixed
        content: ''
        width: 100vw
        height: 100vh
        background: rgba(0,0,0,0.5)
        left: 0
        top: 0
        display: block
        z-index: 200
    .specialOffer
        padding: 25px 30px 25px 0
        background-color: #fff
        display: flex
        align-items: center
        flex-wrap: wrap
        .sale
            background-color: #e10000
            align-items: center
            justify-content: center
            text-align: center
            height: 50px
            padding: 0 25px 0 15px
            font-size: 22px
            font-weight: 400
            color: #fff
            position: relative
            display: flex
            margin-right: 30px
            font-family: 'Open Sans',sans-serif
            margin-left: -5px
            &:after
                position: absolute
                content: ''
                right: 0
                top: 0
                width: 0
                height: 0
                border-style: solid
                border-width: 25px 10px 25px 0
                border-color: transparent #ffffff transparent transparent
        .offer
            display: flex
            flex-direction: column
            .title
                font-family: 'Open Sans',sans-serif
                font-weight: 800
                font-size: 20px
                line-height: 26px
                color: #333
                text-transform: uppercase
            .value
                font-family: 'Open Sans',sans-serif
                font-weight: 800
                font-size: 24px
                line-height: 26px
                color: #01bbea
                text-transform: uppercase
        .buyCredit
            margin-left: auto
            display: flex
            align-items: center
            .price
                font-family: 'Open Sans',sans-serif
                font-weight: 700
                font-size: 48px
                line-height: 26px
                color: #01bbea
                text-transform: uppercase
                position: relative
                &:before
                    content: '$'
                    font-size: 20px
                    position: absolute
                    top: -10px
                    left: -10px
            .buy
                width: 200px
                height: 50px
                background-color: #01bbea
                border: none
                outline: none
                font-family: 'Montserrat',sans-serif
                font-size: 16px
                font-weight: 800
                display: flex
                justify-content: center
                align-items: center
                text-transform: uppercase
                margin-left: 30px
                text-decoration: none
                color: #fff
                transition: ease 0.3s
                &:hover
                    cursor: pointer
                    background-color: #0185a6
    .priceContainer>div:nth-of-type(1)
        .plan_wrapper
            strong
                position: relative
                margin: auto
                &:before
                    content: '$'
                    font-size: 20px
                    position: absolute
                    top: 0
                    left: -10px
    .priceContainer>div:nth-of-type(2)
        .plan_wrapper
            background: #e2e8ea
            strong
                position: relative
                margin: auto
                &:before
                    content: '$'
                    font-size: 20px
                    position: absolute
                    top: 0
                    left: -10px
            a
                background-color: #01bbea
    .priceContainer>div:nth-of-type(3)
        .plan_wrapper
            background: #d8e1e3
            strong
                position: relative
                margin: auto
                &:before
                    content: '$'
                    font-size: 20px
                    position: absolute
                    top: 0
                    left: -10px
            a
                background-color: #01a0c8
    .priceContainer>div:nth-of-type(4)
        .plan_wrapper
            background: #c5d1d4
            span
                font-weight: 100
            strong
                font-size: 20px
                font-weight: 700
                color: #333
                line-height: 1.5
            a
                background-color: #0185a6
    .popup-edit.pricing
        position: absolute
        display: flex
        flex-direction: column
        z-index: 250
        width: auto
        .popuptitle
            font-family: 'Montserrat',sans-serif
            font-size: 30px
            color: #333
            font-weight: 800
            display: block
            text-align: center
            position: relative
            top: -5px
            margin-bottom: 20px
        .priceContainer
            display: flex
        .plan_wrapper
            display: flex
            flex-direction: column
            width: 200px
            min-height: 260px
            background-color: #ecf0f1
            align-item: center
            padding-top: 20px
            span
                color: #333
                font-size: 20px
                font-weight: 700
                font-family: "Open Sans",sans-serif
                text-transform: uppercase
                display: block
                text-align: center
                line-height: 30px
            strong
                display: block
                text-align: center
                color: #01bbea
                font-size: 48px
                line-height: 1
                margin: 15px 0
            a
                display: block
                width: 100%
                min-height: 50px
                line-height: 50px
                text-align: center
                color: #fff
                font-size: 16px
                font-weight: 800
                font-family: Montserrat,sans-serif
                text-transform: uppercase
                background-color: #00d2ff
                margin-top: auto
                &:hover
                    text-decoration: none
    @media (min-width: 801px) and (max-width: 1366px)
        .popup-edit.pricing .popuptitle
            margin-bottom: 10px
            font-size: 25px
        .countries .usa_description
            padding: 25px
        .countries .country_title
            line-height: 25px
            margin-bottom: 10px
            font-size: 30px
        .pricing_row .pricing_name
            line-height: 25px
            font-size: 16px
        .pricing_row .pricing_value
            line-height: 25px
            font-size: 16px

    @media (max-width: 800px)
        .popup-edit.pricing
            overflow: auto
            max-height: 100vh
            top: 0
            transform: translateY(0)
            left: 0
            position: absolute
        .priceContainer
            flex-wrap: wrap
            justify-content: center
        .plan_wrapper
            width: 260px !important
        .specialOffer
            display: block
            order: -1
        .canada_description,.usa_description
            padding: 15px
        .pricing_row .pricing_name,
        .pricing_row .pricing_value
            font-size: 14px
        .pricing_row .pricing_name
            min-width: 90px
    @media (max-width: 520px)
        .countries
            display: block
            .usa_description,.canada_description
                width: 100%

</style>

