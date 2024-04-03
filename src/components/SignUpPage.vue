<script setup>
import { ref } from 'vue'
    import profile from '@/assets/signupBackground.png'

    const username = ref('')
    const password = ref('')
    const show = ref(false)
    var hasClickedSubmit = ref(false);
    var signedUp = ref(false);
    var isSuitable = ref(false);
    function submit(){
        hasClickedSubmit.value = true;
        if (isSuitablePassword()){
            signedUp.value = true;
        }
    }
    function isSuitablePassword(){
       isSuitable = this.password.length > 5;
       if (!isSuitable){
        this.hasClickedSubmit = false;
       }
       return isSuitable;
    }
</script>

<template>
    <div class = "center">
        <img class="logoAdded" :src="profile" width="350" height="350" style="margin-top: 100px;"/>
        <div> Sign up </div>
        <div class="groupedItem resize">
            Enter A Username:
            <input v-model="username"/>
        </div>

        <div class="groupedItem resize">
            Enter A Password:
            <div>
                <input v-model="password" :type = "show == false ? 'password':'text'" style="width:90%">
                <input id="password"  v-model="show" type="checkbox">
            </div>
            <div v-if=" !isSuitablePassword() " style="font-size: 12px; margin-top: 5px; color: red;">
                Password should be longer than 5 characters.
            </div>
            <div v-if=" isSuitablePassword() && hasClickedSubmit" style="font-size: 12px; margin-top: 5px; color: red;">
                Account created!
            </div>

        </div>
        <div>
            <button @click="submit">Submit</button>
        </div>
    </div>
    


</template>

<style scoped>
    .logoAdded{
        border-radius: 50%;
    }
    .center{
        height: 64px;
        font-size:32px;
        width: 100%;
        font-family: 'Workbench';
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
    .groupedItem{
        display: flex;
        flex-direction: column;
        font-size:16px;
    }
    .resize{
        width: 20%;
    }
</style>
