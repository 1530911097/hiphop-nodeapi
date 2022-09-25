const Teacher = require("../model/teacher.model");

class TeacherServe {
  async CreateTeacher(
    teache_name,
    teache_Introduction,
    teache_status,
    teache_dance_species,
    teache_sex,
    teache_date
  ) {
    const res = await Teacher.create(
      teache_name,
      teache_Introduction,
      teache_status,
      teache_dance_species,
      teache_sex,
      teache_date
    );
    return res;
  }

  //查询所有
  async TeacherUser(params) {
    const res = await Teacher.findAll({
      where: params,
    });
    return res;
  }

  //分页查询
  async QueryTeacher(pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize;
    const { rows, count } = await Teacher.findAndCountAll({
      offset: offset,
      limit: pageSize * 1
    });

    return {
      pageNum,
      pageSize,
      data: rows,
      total: count,
    };
  }

  //删除
  async delebedate(id) {
    const res = await Teacher.destroy({
      where: {
        teache_id: id,
      },
    });
    return res;
  }

  //修改

  async updatedate({
    teache_id,
    teache_name,
    teache_Introduction,
    teache_status,
    teache_dance_species,
    teache_sex,
    teache_date,
  }) {
    const where = { teache_id };
    const newData = {};
    teache_name && Object.assign(newData, { teache_name });
    teache_Introduction && Object.assign(newData, { teache_Introduction });
    teache_status && Object.assign(newData, { teache_status });
    teache_dance_species && Object.assign(newData, { teache_dance_species });
    teache_sex && Object.assign(newData, { teache_sex });
    teache_date && Object.assign(newData, { teache_date });
    const res = await Teacher.update(newData, { where: where });

    return res;
  }
}

module.exports = new TeacherServe();
