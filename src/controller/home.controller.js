const { FindHome } = require("../service/home.service");

class FindHomeController {
  async findDate(ctx, next) {
    try {
      const data = await FindHome();
      ctx.body = {
        code: 0,
        data: data,
      };
    } catch {
      ctx.body = {
        code: -1,
        res: "null",
        message: "请求失败",
      };
    }
  }
}
module.exports = new FindHomeController();
