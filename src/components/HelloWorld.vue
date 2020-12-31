<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>
            Ask a yes/no question:
            <input name="222" v-model="question"/>

        </p>
        <input v-focus/>
        <p>
            Ask a yes/no question:
            <input name="1111" v-model="question1"/>
        </p>
        <p>{{ answer }}</p>
    </div>
    <li v-for="(seat,index) in seats" :key="seat" :id="id" :index="index">
        {{ seat }}
    </li>
    {{repositories}}
    <input v-model.lazy="msg1"/>
</template>

<script>
    import useUserRepositories from '@/composables/useUserRepositories'
    import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
    import {toRefs} from 'vue'

    export default {
        name: 'hello world',
        props: {
            msg: String,
            direction: Number,
            user: {
                type: String,
                required: false
            }
        },
        data() {
            return {
                msg1: '1',
                // eslint-disable-next-line vue/no-dupe-keys
                msg: "122",
                question: '',
                question1: '',
                answer: 'Questions usually contain a question mark. ;-)',
                seats: [1, 2, 3]
            }
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            question1(newQuestion, oldQuestion) {
                if (newQuestion.indexOf('?') > -1) {
                    this.getAnswer(1)
                }
            },
            // eslint-disable-next-line no-unused-vars
            question(newQuestion, oldQuestion) {
                if (newQuestion.indexOf('?') > -1) {
                    this.getAnswer(0)
                }
            }
        },
        methods: {
            getAnswer(param) {
                this.answer = 'Thinking... ' + param
            }
        },
        setup(props) {
            const {user} = toRefs(props)

            const {repositories, getUserRepositories} = useUserRepositories(user)

            const {
                searchQuery,
                repositoriesMatchingSearchQuery
            } = useRepositoryNameSearch(repositories)

            return {
                // Since we don’t really care about the unfiltered repositories
                // we can expose the filtered results under the `repositories` name
                repositories: repositoriesMatchingSearchQuery,
                getUserRepositories,
                searchQuery,
            }
        },

    }
</script>
