const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
const Student = seq.define(
  "Student",
  {
    student_number: {
      type: DataTypes.STRING,
       unique: true,
      allowNull: false,
      comment: "学号",
    },
    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "学生姓名",
    },
    student_sex: {
      type: DataTypes.STRING(1234),
      allowNull: false,
      comment: "学生性别",
    },
    student_date: {
      type: DataTypes.STRING,
      allowNull: null,
      content: "出生日期",
    },
    student_species: {
      type: DataTypes.STRING,
      allowNull: null,
      content: "舞种分类",
    },
    student_introduction: {
      type: DataTypes.STRING,
      allowNull: null,
      content: "学生简介",
    }
  }

);
//Student.sync({ force: true });
module.exports = Student;
