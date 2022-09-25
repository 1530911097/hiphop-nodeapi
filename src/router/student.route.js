const Router = require("koa-router");
const router = new Router({ prefix: "/student" });
const { verifyStudentnumber } = require("../middleware/student.middleware");
const {
  createdata,
  findData,
  removeData,
  findpageData,
  upData,
} = require("../controller/student.controller");

const { auth } = require("../middleware/auth.middleware");

//获取数据
router.get("/newlist", auth,  findData);

//新增数据
router.post("/add", auth,createdata);

//分页数据
router.get("/list",auth, findpageData);

//删除数据
router.post("/remove",auth,  removeData);

//修改数据
router.post("/updata", auth,  upData);

module.exports = router;
