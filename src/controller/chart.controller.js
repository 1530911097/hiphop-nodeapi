const {
  createChart,
  queryChart,
  FinduserChart,
  deleteChart,
  updatauserChart,
} = require("../service/chart.service");

class ChartController {
  //查询数据
  async findData(ctx) {
    try {
      const result = await FinduserChart(ctx.request.query);
      ctx.body = {
        code: 0,
        data: result,
        message: "获取数据成功",
      };
    } catch (e) {
      ctx.body = {
        code: -1,
        data: null,
        message: "获取数据失败",
      };
    }
  }
  //查询
  async queryChart(ctx, next) {
    try {
      const { pageNum = 1, pageSize = 10 } = ctx.query;
      const res = await queryChart(pageNum, pageSize);
      ctx.body = {
        code: 0,
        data: res.data,
        message: "查询数据成功",
        total: res.total,
      };
    } catch {
      // console.log(12)
      ctx.body = {
        code: -1,
        data: "nu1l",
        message: "请求失败",
      };
    }
  }
  //删除
  async deleteChart(ctx, next) {
    try {
      const res = ctx.request.body;
      await deleteChart(res.id);
      ctx.body = {
        code: 0,
        res: null,
        message: "操作成功",
      };
    } catch {
      ctx.body = {
        code: -1,
        res: "nu1l",
        message: "请求失败",
      };
    }
  }
  //创建
  async createChart(ctx, next) {
    try {
      const res = ctx.request.body;
      const data = await createChart(res);
      ctx.body = {
        code: 0,
        data: data,
        message: "创建数据成功",
      };
    } catch {}
  }

  //修改
  async updatauChart(ctx, next) {
    try {
      const res = ctx.request.body;
      const data = await updatauserChart(res);
      ctx.body = {
        code: 0,
        data: null,
        message: "操作成功",
      };
    } catch {
      ctx.body = {
        code: -1,
        data: "nu1l",
        message: "请求失败",
      };
    }
  }
}

module.exports = new ChartController();
