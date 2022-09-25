const { createUser, getUerInfo } = require("../service/user.service");
const {
  userFormateError,
  userAlreadyExited,
  userDoesNotExited,
  userLoginError,
  invalidePassword,
} = require("../consitant/err.type");

// 账号密码不能相同
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;

  if (!user_name || !password) {
    return ctx.app.emit("error", userFormateError, ctx);
  }
  await next();
};

// 账号已存在
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;
  if (await getUerInfo({ user_name })) {
    return ctx.app.emit("error", userAlreadyExited, ctx);
  }
  await next();
};

//用户登录
const verifyLogin = async (ctx, next) => {
  //1.判断用户是否存在
  const { user_name, password } = ctx.request.body;
  
  const res = await getUerInfo({ user_name });
  try {
    if (!res) {
      ctx.app.emit("error", userDoesNotExited, ctx);
      return;
    }
    if (password !== res.password) {
      ctx.app.emit("error", invalidePassword, ctx);
      return;
    }
  } catch (err) {
    ctx.app.emit("error", userLoginError, ctx);
    return;
  }
  await next();
};
module.exports = {
  userValidator,
  verifyUser,
  verifyLogin,
};
//加密
// const crpyPassword = async (ctx, next) => {
//   const { password } = ctx.request.body;
//   const salt = bcrypt.genSaltSync(10);
//   //hash保存的是密文
//   const hash = bcrypt.hashSync("password", salt);
//   ctx.request.body.password = hash;
//   await next();
// };
