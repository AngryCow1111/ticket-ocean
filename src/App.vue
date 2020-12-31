<template>
    <div>
        <SetupComponent></SetupComponent>
    </div>
<!--    <HelloWorld user=""></HelloWorld>-->
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
    import {ref, onMounted, toRefs, watch, computed} from 'vue'
    import SetupComponent from "./components/SetupComponent";

    const counter = ref(0)

    console.log(counter) // { value: 0 }
    console.log(counter.value) // 0

    counter.value++
    console.log(counter.value)
    export default {
        name: 'App',
        components: {
            SetupComponent
            // MyComponent,
        },
        props: {
            user: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                direction: 'right',
                pinPadding: 200,
            }
        },
        setup(props) {
            const {user} = toRefs(props)
            const twiceTheCounter = computed(() => counter.value * 2)
            console.log(twiceTheCounter.value)
            const repositories = ref([])
            const getUserRepositories = async () => {
                repositories.value = await fetchUserRepositories(user)
            }
            onMounted(getUserRepositories) // on `mounted` call `getUserRepositories`
            watch(user, getUserRepositories)
            const searchQuery = ref('')
            const repositoriesMatchingSearchQuery = computed(() => {
                return repositories.value.filter(
                    repository => repository.name.includes(searchQuery.value)
                )
            })
            return {
                repositories,
                getUserRepositories, // functions returned behave the same as methods
                searchQuery,
                repositoriesMatchingSearchQuery
            }

        },
        computed: {
            filteredRepositories(user) {
                return user

            }, // 3
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
