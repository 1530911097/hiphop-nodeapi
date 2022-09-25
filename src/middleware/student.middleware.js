const { invalidStudentnumber} = require('../consitant/err.type')
const { FindStudent } = require("../service/student.service");

// 学号不能相同
const verifyStudentnumber = async (ctx, next) => {
    const { student_number } = ctx.request.body;
    
    if (await FindStudent({ student_number })) {
      return ctx.app.emit("error", invalidStudentnumber, ctx);
    }
    await next();
  };

module.exports = {
    verifyStudentnumber,
};