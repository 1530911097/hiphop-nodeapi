const Router = require('koa-router')
const router =new Router({prefix:'/home'})
const {findDate} =require('../controller/home.controller')
const { auth } = require("../middleware/auth.middleware");
router.get('/list',auth,findDate)

module.exports=router