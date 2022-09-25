const Home = require("../model/home.model");
const Teacher = require("../model/teacher.model");
const Student = require("../model/student.model");
const Userinfo = require("../model/userinfo.mode");
const User = require("../model/user.model");

class HomeServe {
  async FindHome() {
    const teachers = await Teacher.findAndCountAll();
    const students = await Student.findAndCountAll();
    const useriunfos = await Userinfo.findAndCountAll();
    const Users = await User.findAndCountAll();

    return {
      teacherNum: teachers.count,
      studentNum: students.count,
      userNum: useriunfos.count,
      UserinfoNum: Users.count,
    };
  }
}

module.exports = new HomeServe();
