const path = require("path");
const Koa = require("koa");
const KoaBody = require("koa-body");
const cors = require("koa-cors");
const KoaStatic = require("koa-static");
const { koaSwagger } = require("koa2-swagger-ui");
const parameter = require("koa-parameter");
const errHandler = require("./errHandler");
const router = require("../router");
const app = new Koa();

app.use(cors());
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, "../upload"),
      keepExtensions: true,
    }, //中间件
    parsedMethods: ["POST", "PUT", "PATCH", "DELETE"],
  })
);

const swagger = require('../../swagger')
app.use(swagger.routes(), swagger.allowedMethods())
app.use(
  koaSwagger({
    routePrefix: "/swagger", // 这里配置swagger的访问路径
    swaggerOptions: {
      url: '/swagger/swagger.json', // 这里配置swagger的文档配置URL，也就是说，我们展示的API都是通过这个接口生成的。
    },
  })
);


app.use(KoaStatic(path.join(__dirname, "../upload")));
app.use(parameter(app));
app.use(router.routes());

app.on("error", errHandler);
module.exports = app;
