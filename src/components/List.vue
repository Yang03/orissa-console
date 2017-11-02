<template>
    <div class="content">
        <p>{{message}}</p>
    </div>
</template>

<script>
    import { request}  from '../Api'

    export default {
        data(){
           return {
                message: 'List'
           } 
        },
        created () {
            this.fetchData()
        },
        watch: {
			'$route' (to, from) {
                console.log(this.$route.name)
				if (this.$route.name == 'list') {
					this.fetchData()
				}
			},
		},
        methods: {
            fetchData() {
                   request.get ('/api/hello').then(response => {
                       console.log(response)  
                   })
            }
        }
    }
</script>

<style>
    p {
        color:bule
    }
</style>