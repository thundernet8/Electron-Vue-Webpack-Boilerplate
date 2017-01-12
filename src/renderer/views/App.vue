<template>
    <div class="app">
        <div class="header">
            <h1>Hello Electron&Vue2!</h1>
            <p>
                <router-link to="/">Go to Home</router-link>
                <router-link to="/single">Go to Single</router-link>
            </p>
        </div>
        <div class="page">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style>
    p {margin: 10px; line-height: 1.5;}
</style>
