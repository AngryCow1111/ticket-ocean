import {createApp} from 'vue'
import App from './App.vue'

let app = createApp(App);
app.mixin({
    custom: 'goodbye!',
    created() {
        console.log(this.$options.custom) // => "goodbye!"
    }
})

// app.directive('focus', {
//     // When the bound element is mounted into the DOM...
//     mounted(el) {
//         // Focus the element
//         el.focus()
//     }
// })
// app.component('HelloWorld2', {
//     props: ['message'],
//     render() {
//         const Button = resolveComponent('MyButton')
//         const Icon = resolveComponent('MyIcon')
//         return h(
//             Button,
//             {
//                 // Use an arrow function to preserve the `this` value
//                 default: () => {
//                     // Reactive properties should be read inside the slot function
//                     // so that they become dependencies of the child's rendering
//                     return [
//                         h(Icon, {name: this.icon}),
//                         this.text
//                     ]
//                 }
//             }
//         )
//
//     }
//
//     // render() {
//     //     return h(
//     //         'h' + this.level, // tag name
//     //         {}, // props/attributes,
//     //         1111,// array of children,
//     //     ),
//     //
//     // }
//     // render() {
//     //     return h('div',
//     //         Array.of(1, 2, 3).map((a) => {
//     //             return h('p', 'hi' + a)
//     //         })
//     //     )
//     // }
//     // render() {
//     //     // eslint-disable-next-line no-undef
//     //     return h(ButtonCounter)
//     // }
// }),
    app.directive('pin', (el, binding) => {
        el.style.position = 'fixed'
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
    })
// {
//     mounted(el, binding) {
//         el.style.position = 'fixed'
//         // binding.value is the value we pass to directive - in this case, it's 200
//         const s = binding.arg || 'top'
//         el.style[s] = binding.value + 'px'
//         // el.style.top = binding.value + 'px'
//     },
//     updated(el, binding) {
//         const s = binding.arg || 'top'
//         el.style[s] = binding.value + 'px'
//     }
app.config.optionMergeStrategies.custom = (toVal, fromVal) => toVal || fromVal
app.mount('#app')
