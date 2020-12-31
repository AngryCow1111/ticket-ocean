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
    <input v-model.lazy="msg1"/>
</template>

<script>
    export default {
        name: 'hello world',
        props: {
            msg: String,
            direction: Number
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
        }

    }
</script>
