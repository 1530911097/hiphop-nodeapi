const Router = require("koa-router");

const {
  userValidator,
  verifyUser,
  verifyLogin,
} = require("../middleware/user.middleware");
const { auth } = require("../middleware/auth.middleware");
const {
  register,
  login,
  findData,
  repairpassword,
  putinfo,
  createdlogin,
  smsCodeinfo,
  wxlogin,
} = require("../controller/user.controller");
const router = new Router({ prefix: "/users" });

//就是验证一定要放在前面不然打印不出

//注册
router.post("/register", userValidator, verifyUser, register);
//登录
router.post("/login", userValidator, verifyLogin, login);

//修改用户
router.post("/putinfo", auth, putinfo);

//修改密码
router.patch("/repair", auth, repairpassword);
//查询
router.get("/info", auth, findData);

// 微信区（手机注册）
router.post("/smsCode", smsCodeinfo);
router.post("/plonelogin", createdlogin);
router.post("/wxlogin", wxlogin);

module.exports = router;
