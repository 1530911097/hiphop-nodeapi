
const {APP_PORT} = require('./config/default')
const app =require('../src/app/index')
app.listen(APP_PORT,()=>{
    console.log('服务器开启')
})
