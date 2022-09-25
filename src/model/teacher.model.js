const { DataTypes } = require("sequelize");
// const Userinfo = require("../model/userinfo.mode");
const seq = require("../db/seq");

const Teacher = seq.define("Teacher", {
  teache_id: {
    type: DataTypes.BIGINT(20),
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
  teache_name: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "教师姓名",
    defaultValue:""
  },
  teache_Introduction: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "教师简介",
  },
  teache_status: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "状态",
  },

  teache_dance_species: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "舞种分类",
  },
  teache_sex: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "性别",
  },
  teache_date: {
    type: DataTypes.STRING,
    allowNull: null,
    content: "出生日期",
  }
})
//Teacher.sync({ force: true }); //如果之前有表则会删除,重新创建
module.exports = Teacher;
