<template>
    <!--    {{title}}-->
    <!--    <input v-focus1/>-->
    <div id="dynamic-arguments-example" class="demo full-page">
        <h2>Scroll down the page</h2>
        <input type="range" min="0" max="500" v-model="pinPadding">
        <p v-pin:[direction]="pinPadding">Stick me {{pinPadding}}px from the {{ direction }} of the page</p>

        <div v-demo="{ color: 'white', text: 'hello!' }"></div>
    </div>
<!--    <teleport to="#modals">-->
<!--        <div>A</div>-->
<!--    </teleport>-->
<!--    <teleport to="#modals">-->
<!--        <div>B</div>-->
<!--    </teleport>-->

<!--    &lt;!&ndash; result&ndash;&gt;-->
<!--    <div id="modals">-->
<!--        <div>A</div>-->
<!--        <div>B</div>-->
<!--    </div>-->
    <!--    <input/>-->
</template>

<script>

    const myMixin = {
        data() {
            return {
                message: 'hello',
                foo: 'abc',
                bar: 'def1'
            }
        },
        created() {
            console.log('mixin hook called')
        }
    }

    export default {
        mixins: [myMixin],
        name: "MyComponent",
        props: {
            title: String,
            direction: String,
        },
        directives: {
            focus1: {
                // directive definition
                mounted(el) {
                    el.focus()
                },
                beforeMount() {
                    console.log('beforeMount')
                },

            },
            demo: (el, binding) => {
                console.log(binding.value.color) // => "white"
                console.log(binding.value.text) // => "hello!"
            },
        },
        data() {
            return {
                message: 'goodbye',
                bar: 'def',
                pinPadding: 100
            }
        },
        emits: ['update:title'],
        template: `
            <input
                    type="text"
                    :value="title"
                    @input="$emit('update:title', $event.target.value)">
        `,
        created() {
            console.log(this.$data) // => { message: "goodbye", foo: "abc", bar: "def" }
        },
    }
</script>

<style scoped>

</style>
