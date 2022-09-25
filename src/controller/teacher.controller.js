const {
  TeacherUser,
  QueryTeacher,
  CreateTeacher,
  delebedate,
  updatedate,
} = require("../service/teacher.service");

class TeacherController {
  async createdate(ctx, next) {
    try {
      const {
        teache_name,
        teache_Introduction,
        teache_status,
        teache_dance_species,
        teache_sex,
        teache_date,
      } = ctx.request.body;
      const res = await CreateTeacher({
        teache_name,
        teache_Introduction,
        teache_status,
        teache_dance_species,
        teache_sex,
        teache_date,
      });
      ctx.body = {
        code: 0,
        data: null,
        message: "创建数据成功",
      };
    } catch (e) {}
  }

  //删除
  async delebeteacher(ctx, next) {
    try {
      const { teache_id } = ctx.request.body;
      const res = await delebedate(teache_id);
      ctx.body = {
        code: 0,
        data: res,
        message: "操作成功",
      };
    } catch (e) {
      console.error("用户登录失败", err);
    }
  }

  //查询数据
  async findData(ctx) {
    try {
      const res = await TeacherUser(ctx.request.query);
      ctx.body = {
        code: 0,
        data: res,
        message: "获取数据成功",
      };
    } catch (e) {
      console.error("获取数据失败", err);
    }
  }

  //查询数据分页
  async queryteacher(ctx) {
    try {
      const { pageNum = 1, pageSize = 10 } = ctx.query;
      const res = await QueryTeacher(pageNum, pageSize);
      ctx.body = {
        code: 0,
        total: res.total,
        data: res.data,
        message: "获取数据成功",
      };
    } catch (e) {
      console.error("用户登录失败", err);
    }
  }



  // 修改
  async updatedate(ctx) {
    try {
      const body = ctx.request.body;
      const res = await updatedate(body);
      ctx.body={
        code:0,
        data:null,
        message:'操作成功'
      }
    } catch {
      ctx.body={
        code:0,
        data:null,
        message:'操作失败'
      }
    }
  }
}

module.exports = new TeacherController();
