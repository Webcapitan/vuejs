<template>
    <div>
        <div class="colorPickerWrap">
            <button type="button" @click="togglePalette">Pick color</button>
            <button type="button" @click="defaultColor">Default color</button>
        </div>
        <sketch-picker v-show="colorVis.visible" style="position: absolute;top:83px;left: 26px;" :value="colors" @input="updateValue"/>
    </div>

</template>

<script>
    import Sketch from '../components/Sketch.vue'

    var colors = {
        hex: '#194d33',
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
    }
    export default {
        props: ['metadata', 'colorVis'],
        components: {
            'sketch-picker': Sketch
        },
        data(){
            return{
                paletteShow : false,
                seen: false,
                colors
            }
        },
        methods:{
            togglePalette(){
                this.$set(this.colorVis,'visible',  true)
            },
            defaultColor(){
                this.metadata.accentColor = '#01bbea';
                this.$set(this.colorVis,'visible',  false)
            },
            updateValue(value){
                this.metadata.accentColor = value.hex;
            },
        }
    }
</script>

<style lang="sass">
    .colorPickerWrap
        display: flex
        justify-content: space-between
        position: relative
        button
            width: 49%
            font-size: 14px
            min-height: 30px
            border: none
            color: #fff
            text-transform: uppercase
            cursor: pointer
            background-color: #999
</style>