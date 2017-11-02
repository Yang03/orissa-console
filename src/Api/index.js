import axios from 'axios'
import qs from 'qs'
import router from '../routes'

export const request = axios.create({
	timeout: 5000,
	transformRequest: [function (data) {
		return qs.stringify(data)
	}],
	headers: {'x-access-token': localStorage.getItem('x-access-token')}
})

request.interceptors.response.use(response => {
	
	return Promise.resolve(response)
}, error => {
	console.log(error.response)
	console.log(error)
	if(error.response.status == 403) { 
		router.push({ path: 'login' })
	} else {
		// Do something with response error
		return Promise.reject(error)
	}
	
})