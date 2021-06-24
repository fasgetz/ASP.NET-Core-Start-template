import { createApp } from 'vue';

const vueApp = createApp({
    data() {
        return { name: "Tom", age: 36, message: 'asd' }
    }
}).mount('#app');