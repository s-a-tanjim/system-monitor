const axios = require('axios')

const TOTAL_REQ=5000
let BREAK = false

for(let i = 0; i < TOTAL_REQ && !BREAK; i++ ) {
  axios.get("http://localhost:4000/health")
    .then(res =>{
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
      BREAK = true
    })
}