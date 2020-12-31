<template>
    <div>Hello, {{ name }}</div>
</template>

<script>
    export default {
        name: "ChildComponent",
        props: ['name']
    }
</script>

<style scoped>

</style>
