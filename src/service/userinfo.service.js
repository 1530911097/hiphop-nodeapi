const Userinfo = require("../model/userinfo.mode");



class UserinfoServe {
  // 创建数据
  async createUser(data) {
    const res = await Userinfo.create(data);
    return res;
  }

  // 删除数据
  async deleteUser(id) {
    const res = await Userinfo.destroy({
      where: {
        id: id,
      },
    });
    return res;
  }

  //查询所有
  async Finduserinfo(params) {
    const res = await Userinfo.findAll({
      where: params,
    });
    return res;
  }
  // 查询数据
  async queryUser(pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize;
    const { rows, count } = await Userinfo.findAndCountAll({
      offset: offset,
      limit: pageSize * 1,

    });
    return {
      pageNum,
      pageSize,
      data: rows,
      total: count,
    };
  }

  //修改数据
  async updatauserinfo({
    id,
    users_name,
    users_sex,
    users_date,
    users_species,
    users_introduction,
  }) {
    const whereOpt = { id };
    const newdata = {};
    users_name && Object.assign(newdata, { users_name });
    users_sex && Object.assign(newdata, { users_sex });
    users_date && Object.assign(newdata, { users_date });
    users_species && Object.assign(newdata, { users_species });
    users_introduction && Object.assign(newdata, { users_introduction });
    const res =  await Userinfo.update(newdata,{ where: whereOpt });
    return res[0] > 0 ? true : false;
  }
}
module.exports = new UserinfoServe();
