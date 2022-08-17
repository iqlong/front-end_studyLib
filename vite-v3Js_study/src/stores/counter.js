import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userStore = defineStore('userDat', () => {
    // state: () => {
    //     return {
        // }
    // },
    // actions: {

    // }
    const name = ref('zhl')
    function increment() {
        name.value += '慧龙'
    }

    return {
        name,
        increment
    }

})
