const {
  CreateStudent,
  FindStudent,
  RemoveStudent,
  FindpageStudent,
  UpdataStudent,
} = require("../service/student.service");

class StudentController {
  // 创建数据
  async createdata(ctx, next) {
    try {
      const data = ctx.request.body;
      const result = await CreateStudent(data);
      ctx.body = {
        code: 0,
        data: result,
        message: "创建数据成功",
      };
    } catch (e) {
      ctx.body = {
        code: -1,
        data: null,
        message: "创建数据失败",
      };
    }
  }

  //查询数据
  async findData(ctx) {
    try {
      const result = await FindStudent(ctx.request.query);
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

  //删除数据
  async removeData(ctx) {
    try {
      const { id } = ctx.request.body;
      const result = await RemoveStudent(id);
      ctx.body = {
        code: 0,
        data: null,
        message: "操作数据成功",
      };
    } catch (e) {
      ctx.body = {
        code: -1,
        data: null,
        message: "操作数据失败",
      };
    }
  }

  //分页查询
  async findpageData(ctx) {
    try {
 
      const { pageNum = 1, pageSize = 10 } = ctx.query;
      const res = await FindpageStudent(pageNum, pageSize);
     
      ctx.body = {
        code: 0,
        data: res.data,
        message: "数据获取成功",
        total: res.total,
      };
    } catch (e) {
      ctx.body = {
        code: -1,
        data: null,
        message: "数据获取失败",
      };
    }
  }
  //修改数据
  async upData(ctx) {
    try {
      const body = ctx.request.body;
      const res = await UpdataStudent(body);
      ctx.body = {
        code: 0,
        data: null,
        message: "操作成功",
      };
    } catch {
      ctx.body = {
        code: -1,
        data: null,
        message: "操作失败",
      };
    }
  }
}

module.exports = new StudentController();
