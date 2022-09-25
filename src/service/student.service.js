const Students = require("../model/student.model");

class StudentService {
  // 创建数据
  async CreateStudent(data) {
    const result = await Students.create(data);
    return result;
  }
  // 查询数据
  async FindStudent(params) {
    const whereOpt = {};
    student_number && Object.assign(whereOpt, { student_number });
    const res = await Students.findOne({
      where: whereOpt,
    });
    //如果可以查到就为空
    return res ? res.dataValues : null;

//   const result = await Students.findAll({
//     where: params,
//   });
    // return result
  }

  //删除数据
  async RemoveStudent(id) {
    const result = await Students.destroy({
      where: {
        id: id,
      },
    });
    return result;
  }

  //修改数据
  async UpdataStudent({id,student_number,student_name,student_sex,student_date,student_species,student_introduction}) {
    const whereOpt = { id };
    const newdata = {};
    student_number && Object.assign(newdata,{student_number});
    student_name && Object.assign(newdata,{student_name});
    student_sex && Object.assign(newdata,{student_sex});
    student_date && Object.assign(newdata,{student_date});
    student_species && Object.assign(newdata,{student_species});
    student_introduction && Object.assign(newdata,{student_introduction});
    const res = await Students.update(newdata,{ where: whereOpt })
    
    return res[0] > 0 ? true : false;
  }

  //分页查询
  async FindpageStudent(pageNum,pageSize) {
    const offset = (pageNum - 1) * pageSize;
    const { count, rows } = await Students.findAndCountAll({
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
}

module.exports = new StudentService();
