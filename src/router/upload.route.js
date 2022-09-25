const Router =require('koa-router')
const router = new Router({prefix:"/down"})
const {addImage} = require('../controller/add.controller')
const { auth } = require("../middleware/auth.middleware");

router.post('/img',addImage)


module.exports=router
