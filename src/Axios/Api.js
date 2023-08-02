// import axios from 'axios'
// // export default axios.create({
// //    // baseURL:"https://ecommerce-ahmadjemel.vercel.app/api"
// //     baseURL:"https://backend-ecommerce-2023.vercel.app/api" 
// //     import axios from "axios";

//     axios.defaults.baseURL = 'import axios from axios'

//     axios.defaults.baseURL = 'https://backend-ecommerce-2023.vercel.app/api';
//     axios.interceptors.request.use(
//     config => {
//     const token = localStorage.getItem("CC_Token")
//     if (token) {
//     config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     return config;
//     },
//     error => {
//     Promise.reject(error)
//     });
    
//     export default axios;
import axios from "axios";
//export const urlimage="http://localhost:3001/images/"
axios.defaults.baseURL = 'https://backend-ecommerce-2023.vercel.app/api';
//simple request sans header
export function getAxiosInstance() {
if (axios === null) {
axios = axios.create({
baseURL: axios.defaults.baseURL,
});
}
}
// Add a request interceptor
axios.interceptors.request.use(

config => {
const token=localStorage.getItem("CC_Token");
if (token) {
config.headers['Authorization'] = 'Bearer ' + token;
}
return config;
},
error => {
Promise.reject(error)
});

//Response interceptor
axios.interceptors.response.use((response) => {
return response
},
function (error) {
const originalRequest = error.config;
if (error.response.status === 403 && !originalRequest._retry) {

originalRequest._retry = true;
let refreshToken = localStorage.getItem('refresh_token');
if(refreshToken && refreshToken !== ""){
return axios
.post('http://localhost:3001/api/users/refreshToken/', {refreshToken:refreshToken})
.then(res => {

if (res.status === 200) {
// 1) put tokens to LocalStorage
localStorage.setItem('CC_Token', res.data.token);
localStorage.setItem('refresh_token', res.data.refreshToken);
// 2) Change Authorization header
axios.defaults.headers.common['Authorization'] = 'Bearer ' +

localStorage.getItem('CC_Token');

// 3) return originalRequest object with Axios.
return axios(originalRequest);
}
})
}
}
}
);
export default axios;