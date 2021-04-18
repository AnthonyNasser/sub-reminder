
 import axios from 'axios'
 import { REQUEST_BASE_URL } from '../config/config'
 

 export default class Request {
     constructor(endpoint) {
         this.url = REQUEST_BASE_URL + endpoint
     }

     get(params = {}) {
         return new Promise((resolve, reject) => {
             axios
                 .get(this.url, { params: params })
                 .then((res) => {
                     resolve(res.data ? (res.data) : null)
                 })
                 .catch((error) => {
                     console.log(error)
                     if (error.response && error.response.data) {
                         resolve(error.response.data)
                     } else {
                         reject(error)
                     }
                 })
         })
     }
     post(body = {}, headers = {}, options = {}) {
         const defaultHeaders = {
             Accept: 'application/json',
             'Content-Type': 'application/json; charset=utf-8',
         }
 
         const actualHeaders = {
             ...defaultHeaders,
             ...headers,
         }
 
         return new Promise((resolve, reject) => {
             axios
                 .post(this.url, body, { headers: actualHeaders, withCredentials: true, ...options })
                 .then((res) => {
                     resolve(res.data ? (res.data ) : null)
                 })
                 .catch((error) => {
                     console.log(error)
                     if (error.response && error.response.data) {
                         resolve(error.response.data)
                     } else {
                         reject(error)
                     }
                 })
         })
     }

     put(body = {}, headers = {}, options = {}) {
        const defaultHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        }

        const actualHeaders = {
            ...defaultHeaders,
            ...headers,
        }

        return new Promise((resolve, reject) => {
            axios
                .put(this.url, body, { headers: actualHeaders, withCredentials: true, ...options })
                .then((res) => {
                    resolve(res.data ? (res.data ) : null)
                })
                .catch((error) => {
                    console.log(error)
                    if (error.response && error.response.data) {
                        resolve(error.response.data)
                    } else {
                        reject(error)
                    }
                })
        })
    }
 
     delete(body = {}, headers = {}, options = {}){
         const defaultHeaders = {
             Accept: 'application/json',
             'Content-Type': 'application/json; charset=utf-8',
         }
 
         const actualHeaders = {
             ...defaultHeaders,
             ...headers,
         }
 
         return new Promise((resolve, reject) => {
             axios
                 .delete(this.url, { headers: actualHeaders, withCredentials: true, data: body, ...options })
                 .then((res) => {
                     resolve(res.data ? (res.data) : null)
                 })
                 .catch((error) => {
                     console.log(error)
                     if (error.response && error.response.data) {
                         resolve(error.response.data)
                     } else {
                         reject(error)
                     }
                 })
         })
     }
 }