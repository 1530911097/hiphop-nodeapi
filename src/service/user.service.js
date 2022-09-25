const User = require("../model/user.model");

class UserService {
  //注册账号
  async createUser(user_name, password) {
    const res = await User.create(user_name, password);
    return res;
  }

  //登录账号
  async getUerInfo({ user_name }) {
    const whereOpt = {};
    user_name && Object.assign(whereOpt, { user_name });
    const res = await User.findOne({
      attributes: ["user_name", "password", "id"],
      where: whereOpt,
    });
    //如果可以查到就为空
    return res ? res.dataValues : null;
  }

  async Finduserinfo({ id }) {
    const res = await User.findOne({
      attributes: [
        "autograph",
        "name",
        "sex",
        "address",
        "birth",
        "emit",
        "plone",
        "wallet",
        "vip",
        "headlogo",
      ],
      where: {
        id: id,
      },
    });
    return res;
  }
  async updateinfo({
    id,
    user_name,
    password,
    name,
    sex,
    address,
    birth,
    emit,
    plone,
    wallet,
    vip,
    headlogo,
  }) {
    const whereOpt = { id };
    const newUser = {};
    user_name && Object.assign(newUser, { user_name });
    password && Object.assign(newUser, { password });
    name && Object.assign(newUser, { name });
    sex && Object.assign(newUser, { sex });
    address && Object.assign(newUser, { address });
    password && Object.assign(newUser, { password });
    birth && Object.assign(newUser, { birth });
    emit && Object.assign(newUser, { emit });
    plone && Object.assign(newUser, { plone });
    wallet && Object.assign(newUser, { wallet });
    vip && Object.assign(newUser, { vip });
    headlogo && Object.assign(newUser, { headlogo });
    const res = await User.update(newUser, { where: whereOpt });
    //如果可以查到就为空
    return res[0] > 0 ? true : false;
  }
  //修该密码
  async updatepasswork({ id, user_name, password }) {
    const whereOpt = { id };
    const newUser = {};
    user_name && Object.assign(newUser, { user_name });
    password && Object.assign(newUser, { password });
    const res = await User.update(newUser, { where: whereOpt });
    //如果可以查到就为空
    return res[0] > 0 ? true : false;
  }

  //创建账号

  async createPloneUser({id, plone,code}) {
    const whereOpt = {}
    //如果id存在就拷贝进whereOpt方法
    id && Object.assign(whereOpt, { id })
    plone && Object.assign(whereOpt, { plone })
    code && Object.assign(whereOpt, { code })
    const res = await User.findOrCreate({
       attributes: ["plone", "id"],
       where: whereOpt,
    });
   
    return JSON.stringify(res[0])
  }



  async createwxlogin({id,openid}) {
    const whereOpt = {}
    
    //如果id存在就拷贝进whereOpt方法
    id && Object.assign(whereOpt, { id })
    openid && Object.assign(whereOpt, { openid })
    const res = await User.findOrCreate({
       attributes: ["openid", "id"],
       where: whereOpt,
    });
  
     return JSON.stringify(res[0])

  }
   


}

module.exports = new UserService();
