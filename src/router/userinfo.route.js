const Router = require("koa-router");
const router = new Router({ prefix: "/Userinfo" });
const { auth } = require("../middleware/auth.middleware");
const {
  findData,
  queryuserinfo,
  createuserinfo,
  updatauserinfo,
  deleteuserinfo,
} = require("../controller/userinfo.controller");

//分页查询
router.get("/list", auth, queryuserinfo);

//查询s
router.get("/searse", auth, findData);

//删除
router.post("/delete", auth, deleteuserinfo);

//创建数据
router.post("/add", auth, createuserinfo);

//创建数据
router.post("/updata", auth, updatauserinfo);

module.exports = router;
