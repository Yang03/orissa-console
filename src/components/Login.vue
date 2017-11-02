<template>
    <div class="content">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名:">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
                <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form> 
    </div>
</template>

<script>
    import { request}  from '../Api'
    export default {
        data(){
           return {
                form: {
                    name: '',
                    password: ''
                }
           } 
        },
        methods: {
            onSubmit() {
                 request.post('/api/sigin', this.form).then(response => {
                    localStorage.setItem('x-access-token', response.data.token) 
                })
            }
        }
    }
</script>

<style>
    p {
        color:red
    }
</style>