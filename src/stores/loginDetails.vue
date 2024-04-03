<setup>
    import {defineStore} from 'pinia'

    export const storeDetails = defineStore('yes', {
        state: () => {
            return { count: 0 }
        },

        actions:{
            increment(){
                this.count++
            }
        }
    })
</setup>