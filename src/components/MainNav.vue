<script setup>
 import logo from "@/assets/logo.jpg";
 import farm from "@/assets/barn.jpg";
 import adopt from "@/assets/Buy.png";
 import sell from "@/assets/sell.png";
 import login from "@/assets/login.png";
 import signup from "@/assets/signup.jpg";
 
</script>


<template>
    <header class="navigation">
        <div class="mini-nav" style="margin-left: 20px;">
            <router-link class="alignment" to="/"> 
                <div style="align-items: center">
                    FarmHouse
                </div>
                <img class="logoAdded" :src="logo" width="50" height="50"/>
            </router-link>
            <router-link class="alignment" to="/farm"> 
                <img :src="farm" width="100" height="50"/>
            </router-link>
            <router-link class="alignment" to="/"> 
                <img :src="adopt" width="50" height="50"/>
            </router-link>
            <router-link class="alignment" to="/"> 
                <img :src="sell" width="50" height="50"/>
            </router-link>
        </div>
        
        <div class="login-signup" style="margin-right: 30px;">
            <router-link class="alignment" to="/login"> 
                    <img :src="login" width="80" height="50"/>
            </router-link>
            <router-link class="alignment" to="/signup">
                    <img :src="signup" width ="130" height="50"/>
            </router-link>
        </div>

    </header>
</template>

<style scoped>
.navigation{
    height: 64px;
    font-size:32px;
    width: 100%;
    font-family: 'Workbench';
    border: 1px solid lightgray; 
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
    align-items: center;
    text-decoration: null;
}

.mini-nav {
    display: flex;
    flex-direction: row;
    gap: 100px;
}

.login-signup {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.logoAdded{
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
}
.alignment{
    display: flex;
    flex-direction: row;  
}

</style>