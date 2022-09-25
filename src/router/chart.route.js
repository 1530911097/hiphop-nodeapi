const Router = require("koa-router");
const router = new Router({ prefix: "/chart" });
const { auth } = require("../middleware/auth.middleware");
const {
  findData,
  queryChart,
  createChart,
  updatauChart,
  deleteChart,
} = require("../controller/chart.controller");

//分页查询
router.get("/list",auth,queryChart);

//查询s
router.get("/searse",auth, findData);

// //删除
router.post("/delete", auth, deleteChart);

// //创建数据
 router.post("/add", auth, createChart);

// //创建数据
 router.post("/updata",auth, updatauChart);

module.exports = router;
