<template>
    <div>
    </div>
    <!--    <HelloWorld msg="i just"/>-->
    <!--    <MyComponent direction="left"></MyComponent>-->
    <!--    <HelloWorld2></HelloWorld2>-->
    <!--    <ButtonCounter></ButtonCounter>-->
    <!--    <ModalButton>-->
    <!--        <ChildComponent name="john"></ChildComponent>-->
    <!--    </ModalButton>-->
</template>

<script>

    // const component1 = {
    //     name: 'component1',
    //     render(){
    //         // eslint-disable-next-line no-undef
    //         return <p>112</p>
    //     },
    //     data() {
    //         return {
    //             style: {
    //                 width: '200px',
    //                 height: '200px',
    //                 border: '1px solid #aaa'
    //             },
    //             value: 'component value'
    //         }
    //     }
    // }
    import {fetchUserRepositories} from "@/api/respositories/fetchUserRepositories";
    import {ref} from 'vue'

    const counter = ref(0)

    console.log(counter) // { value: 0 }
    console.log(counter.value) // 0

    counter.value++
    console.log(counter.value)
    export default {
        props: {
            user: {
                type: String,
                required: true
            }
        },
        name: 'App',
        components: {
            // HelloWorld,
            // MyComponent,
        },
        data() {
            return {
                direction: 'right',
                pinPadding: 200,
            }
        },
        setup(props) {
            const repositories = ref([])
            const getUserRepositories = async () => {
                repositories.value = await fetchUserRepositories(props.user)
            }
            return {
                repositories,
                getUserRepositories // functions returned behave the same as methods
            }
        },
        computed: {
            filteredRepositories(user) {
                return user

            }, // 3
            repositoriesMatchingSearchQuery(user) {
                return user
            }, // 2
        },
        watch: {
            user: 'getUserRepositories' // 1
        },
        methods: {
            updateFilters() {
            }, // 3
        },
        mounted() {
            this.getUserRepositories() // 1
        }
    }
</script>
<style>
    .demo {
        font-family: sans-serif;
        border: 1px solid #eee;
        border-radius: 2px;
        padding: 20px 30px;
        margin-top: 1em;
        margin-bottom: 40px;
        user-select: none;
        overflow-x: auto;
    }

    .full-page {
        height: 100vh
    }
</style>
