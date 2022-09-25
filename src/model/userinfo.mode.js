const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
// const Teacher = require("../model/teacher.model");
const Users = seq.define("Userinfo", {
  // users_id: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   comment: "id",
  // },
  users_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "用户姓名",
  },
  users_sex: {
    type: DataTypes.STRING(1234),
    allowNull: false,
    comment: "用户性别",
  },
  users_date: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "用户出生日期",
  },
  users_species: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "用户舞种分类",
  },
  users_introduction: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "用户个性签名",
  },
});
//Users.sync({ force: true });
//同步表(关联表)

module.exports = Users;
