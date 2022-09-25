const Router = require("koa-router");
const router = new Router({ prefix: "/teacher" });
const {
  findData,
  queryteacher,
  createdate,
  delebeteacher,
  updatedate
} = require("../controller/teacher.controller");
const { auth } = require("../middleware/auth.middleware");


//新增
router.post("/add",auth,  createdate);

// 获取教师列表
//分页查询
router.get("/list",auth, queryteacher);

//查询
router.get("/searse", auth, findData);

//删除
router.post("/remove", auth, delebeteacher);

//修改数据
router.post("/updata",auth,  updatedate);


module.exports = router;
