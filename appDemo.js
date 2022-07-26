const axios = require('axios')
const moment = require('moment')



//axios intercept

// axios.interceptors.request.use((config) => {
//     console.log("Starting Request................................")
//     console.log(config)
//     console.log("End the Request..................................")

//     console.log(config.method + ' request is issued to url' + config.url + 'at' + new moment(new Date()).format('YYYY-MM-DD'))

//     return config
// }, (err) => {
//     Promise.reject(err)
// }
// )


// let todoPromis = axios.get('https://jsonplaceholder.typicode.com/todos/1');

// todoPromis.then((response) => {
//     console.log(response.data)
//     console.log(response.status)
//     console.log(response.statusText)
// })
//     .catch((error) => {
//         if (error.response) {
//             console.log(error.response.status)

//             console.log(error.statusText)
//         }
//         else if (error.require) {

//         }
//         else {

//             console.error("Error ->" + error)
//         }
//     }).finally(() => {
//         console.log("Fetch Complete")
//     })


// const getTodo = async () => {
//     try {
//         let promisResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//         console.log(promisResponse)
//     }
//     catch (error) {
//         console.log('Error ->' + error)
//     }
// }
// getTodo()


// //making post request 


// let newTodo = axios.post('https://jsonplaceholder.typicode.com/todos', { userId: 1, title: "nodeProject", complete: true, },
//     {
//         timeOut: 1000
//     }

// )
//     .then((response) => {
//         console.log(response.data)

//     })
//     .catch((error) => {
//         console.log('Error' + error)
//     })

//cancel

const cancelToken = axios.cancelToken;
const source = cancelToken.source()

let getTodoCancel = async () => {
    try {
        let todoResponse = await axios.get('https://jsonplaceholder.typicode.com/todos', { CancelToken: source.token })
        console.log(todoResponse.data)
    }
    catch(error){
        console.error('Error ->'+error)
    }
}
getTodoCancel()
source.cancel()//cancelling