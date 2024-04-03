
<script>
import MainNav from './components/MainNav.vue';

export default {
    name: "App",
    components: {
        MainNav:MainNav
    }
};
</script>

<template>
    <MainNav />
    <router-view></router-view>
</template>

<style>
body {
    margin: 0;
}
</style>