const { DataTypes } = require("sequelize");

//引用数据库
const seq = require("../db/seq");

//创建模型(根据数据库的表建立一个模型)
//DateTypes.String 代表数据库 VARCHAR(255)
//allowNull 设置(null)不能为空
//unique 字段唯一
const User = seq.define(
  "User",
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: null,
      // unique: true,
      comment: "用户名，唯一",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: null,
      // unique: false,
      comment: "密码",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: null,
      // unique: true,
      comment: "用户名，唯一",
      defaultValue:"青橘用户-694"
    },
    wallet: {
      type: DataTypes.CHAR(64),
      allowNull: null,
      // unique: false,
      comment: "钱包",
      defaultValue:0
    },

    sex: {
      type: DataTypes.CHAR(64),
      allowNull: null,
      // unique: false,
      comment: "性别",
      defaultValue:"未设置"
    },
    code: {
      type: DataTypes.CHAR(64),
      allowNull: null,
      // unique: false,
      comment: "验证码",
    },
    autograph: {
      type: DataTypes.STRING,
      allowNull: null,
      // unique: false,
      comment: "个性签名",
      defaultValue:"未设置"
    },
    address: {
      type: DataTypes.STRING,
      allowNull: null,
      // unique: false,
      comment: "地址",
      defaultValue:"未设置"
    },
    emit: {
      type: DataTypes.STRING,
      allowNull: null,
      // unique: false,
      comment: "邮箱",
      defaultValue:"未设置"
    },
    plone: {
      type: DataTypes.STRING,
      allowNull: null,
      unique: false,
      comment: "手机号",
      defaultValue:"未设置"
    },
    vip: {
      type: DataTypes.STRING,
      allowNull: null,
      // unique: false,
      comment: "会员",
      defaultValue:"普通用户"
    },
    birth: {
      type: DataTypes.STRING,
      allowNull: null,
      // unique: false,
      comment: "birth",

    },
    openid: {
      type: DataTypes.STRING,
      allowNull: null,
      unique: false,
      comment: "wxid",
    },
    headlogo: {
      type: DataTypes.STRING,
      allowNull: null,
      // unique: false,
      comment: "头像",
      defaultValue:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
    }
  }

  //去掉时间
);

//User.sync({ force: true }); //如果之前有表则会删除,重新创建
module.exports = User;
