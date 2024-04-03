<script setup>
    import { ref } from 'vue'
    import profile from '@/assets/LoginBackground.png'

    const username = ref('')
    const password = ref('')
    const show = ref(false)
    var loggedIn = ref(false);
    var hasClickedSubmit = ref(false);
    function submit(){
        hasClickedSubmit.value = true;
        if (username.value == "Ryashuel" && password.value == "ArielLikesChickens"){
            loggedIn.value = true;
        }
        else{
            loggedIn.value = false;
        }
        
    }
    
</script>

<template>
    <div class = "center">
        <img class="logoAdded" :src="profile" width="350" height="250" style="margin-top: 100px;"/>
        <div> Login</div>
        <div class="groupedItem resize">
            Username
            <input v-model="username" placeholder="Mr English"/>
        </div>

        <div class="groupedItem resize">
            Password
            <div>
                <input v-model="password" :type = "show == false ? 'password':'text'" style="width:90%">
                <input id="password"  v-model="show" type="checkbox">
            </div>
            <div style="font-size: 13px; margin-top: 10px; color: black;">
                Don't have an account? 
                <router-link to="/signup">
                    Sign up!
                </router-link>
            </div>
            <div v-if=" loggedIn == false && hasClickedSubmit == true" style="font-size: 10px; margin-top: 5px; color: red;">
                Incorrect username and/or password
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
