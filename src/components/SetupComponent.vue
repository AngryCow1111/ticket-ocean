<template>
    <div></div>
</template>

<script>

    import {ref, reactive} from "@vue/reactivity";
    import {h} from "@vue/runtime-core";

    export default {
        name: "SetupComponent",
        setup() {
            const readersNumber = ref(0)
            const book = reactive({title: 'Vue 3 Guide'})
            // Please note that we need to explicitly expose ref value here
            return () => h('div', [readersNumber.value, book.title])
        }
    }
</script>

<style scoped>

</style>
