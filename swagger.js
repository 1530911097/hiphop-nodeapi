const router = require("koa-router")();
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc"); //引入swagger-jsdoc
router.prefix("/swagger"); //设置路由，与app.js中的路由配置保持一致
const swaggerDefinition = {
  info: {
    title: "HIP HOP", //文档标题
    version: "1.0.0", //版本号
    host: "http://124.223.81.104:3006", //服务器地址
    basePath: "/", //访问地址，有些人喜欢在host:port/api/xxx这种格式，可以在此处配置为/api/.
    description: `简介 
    HipHop ApI 给前端提供接口。
    `,
  },
};
const options = {
  swaggerDefinition,
  //写有注解的router的存放地址, 最好使用path.join(),这里使用物理路径
  apis: [path.join(__dirname, "./src/rswagger/*.js")],
};
const swaggerSpec = swaggerJSDoc(options);

// 通过路由获取生成的注解文件
router.get("/swagger.json", async function (ctx) {
  ctx.set("Content-Type", "application/json");
  ctx.body = swaggerSpec;
});
module.exports = router;
