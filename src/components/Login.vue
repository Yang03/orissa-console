<template>
    <div class="content">
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        data(){
           return {
                message: 'login'
           } 
        }
    }
</script>

<style>
    p {
        color:red
    }
</style>