const request = require("request");
var AppID = "wx78ac33e0c217b976";
var AppSecret = "2ffffd8414eff940e2877ed86a9e0021";
const WXBizDataCrypt = require("../config/WXBizDataCrypt");
const {
  createUser,
  getUerInfo,
  updatepasswork,
  Finduserinfo,
  updateinfo,
  createPloneUser,
  createwxlogin,
} = require("../service/user.service");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/default");
const tencentcloud = require("tencentcloud-sdk-nodejs");

//短信
const randomFns = () => {
  // 生成6位随机数
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += parseInt(Math.random() * 10);
  }
  return code;
};
var TemplateParamSet = randomFns();
const smsClient = tencentcloud.sms.v20210111.Client;
const client = new smsClient({
  credential: {
    /* 必填：腾讯云账户密钥对secretId，secretKey。 * 你也可以直接在代码中写死密钥对，但是小心不要将代码复制、上传或者分享给他人， * 以免泄露密钥对危及你的财产安全。* SecretId、SecretKey 查询: https://console.cloud.tencent.com/cam/capi */
    secretId: "AKID86sPgjXNzOaYHkMlzEJAnTyDF2ZqsfDV",
    secretKey: "5vZz9sOgkbJp68IG0VnrkQr23ta54sTs",
  },
  /* 必填：地域信息，可以直接填写字符串ap-guangzhou，支持的地域列表参考 https://cloud.tencent.com/document/api/382/52071#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8 */
  region: "ap-guangzhou",
  /* 非必填: * 客户端配置对象，可以指定超时时间等配置 */
  profile: {
    /* SDK默认用TC3-HMAC-SHA256进行签名，非必要请不要修改这个字段 */
    signMethod: "HmacSHA256",
    httpProfile: {
      /* SDK默认使用POST方法。* 如果你一定要使用GET方法，可以在这里设置。GET方法无法处理一些较大的请求 */
      reqMethod: "POST",
      /* SDK有默认的超时时间，非必要请不要进行调整 * 如有需要请在代码中查阅以获取最新的默认值 */
      reqTimeout: 30,
      /*** 指定接入地域域名，默认就近地域接入域名为 sms.tencentcloudapi.com ，也支持指定地域域名访问，例如广州地域的域名为 sms.ap-guangzhou.tencentcloudapi.com */
      endpoint: "sms.tencentcloudapi.com",
    },
  },
});

class UserController {
  //注册
  async register(ctx, next) {
    //验证通过
    try {
      const { user_name, password } = ctx.request.body;
      const res = await createUser({ user_name, password });
      ctx.body = {
        code: 0,
        data: res,
        message: "用户注册成功",
      };
    } catch (e) {
      console.log(e);
    }
  }

  //登录
  async login(ctx, next) {
    console.log(123)
    const { user_name } = ctx.request.body;
    try {
      const { password, ...res } = await getUerInfo({ user_name });
      ctx.body = {
        code: 0,
        message: "用户登录成功",
        data: {
          token: jwt.sign(res, JWT_SECRET, {
            expiresIn: "1d",
          }),
        },
      };
    } catch (e) {
      console.error("用户登录失败", err);
    }
  }
  async findData(ctx, next) {
    try {
      const id = ctx.state.user.id;
      const result = await Finduserinfo({ id });
      ctx.body = {
        code: 0,
        data: result,
        message: "获取数据成功",
      };
    } catch (e) {
      ctx.body = {
        code: -1,
        data: null,
        message: "获取数据失败",
      };
    }
  }

  //修改用户信息
  async putinfo(ctx, next) {
    const id = ctx.state.user.id;
    const password = ctx.request.body.password;
    const name = ctx.request.body.name;
    const sex = ctx.request.body.sex;
    const address = ctx.request.body.address;
    const birth = ctx.request.body.birth;
    const emit = ctx.request.body.emit;
    const plone = ctx.request.body.plone;
    const wallet = ctx.request.body.wallet;
    const vip = ctx.request.body.vip;
    const headlogo = ctx.request.body.headlogo;

    if (
      await updateinfo({
        id,
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
      })
    ) {
      ctx.body = {
        code: 0,
        data: null,
        message: "操作成功",
      };
    } else {
      ctx.body = {
        code: 0,
        data: null,
        message: "操作失败",
      };
    }
  }
  //修改密码
  async repairpassword(ctx, next) {
    const id = ctx.state.user.id;
    const password = ctx.request.body.password;

    if (await updatepasswork({ id, password })) {
      ctx.body = {
        code: 0,
        data: null,
        message: "操作成功",
      };
    } else {
      ctx.body = {
        code: 0,
        data: null,
        message: "操作失败",
      };
    }
  }

  async smsCodeinfo(ctx, next) {
    console.log(TemplateParamSet);
    const { plone } = ctx.request.body;
    const params = {
      /* 短信应用ID: 短信SmsSdkAppId在 [短信控制台] 添加应用后生成的实际SmsSdkAppId，示例如1400006666 */
      SmsSdkAppId: "1400676895",
      /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名，签名信息可登录 [短信控制台] 查看 */
      SignName: "街舞协会",
      PhoneNumberSet: ["+86" + plone],
      TemplateId: "1402011",
      TemplateParamSet: [TemplateParamSet, "30"],
    };
    client.SendSms(params, function (err, response) {
      // 请求异常返回，打印异常信息
      if (err) {
        return;
      }
      // 请求正常返回，打印response对象
    });
    ctx.body = {
      code: 0,
      message: "获取短信成功",
      data: plone,
    };
  }

  //新增账号（手机号）
  async createdlogin(ctx, next) {
    try {
      const { plone, code } = ctx.request.body;

      if (TemplateParamSet !== code) {
        ctx.body = {
          code: 200,
          message: "验证码错误",
        };
        return;
      }
      const res = await createPloneUser({ plone, code });

      ctx.body = {
        code: 0,
        data: {
          token: jwt.sign(res, JWT_SECRET),
        },
        message: "操作成功",
      };
    } catch (e) {
      console.log(e);
    }
  }
  //wxlogin
  async wxlogin(ctx, next) {
    const res = ctx.request.body;
    const wxlogininfo = new Promise((resolve, reject) => {
      request.get(
        {
          url:
            "https://api.weixin.qq.com/sns/jscode2session?appid=" +
            AppID +
            "&secret=" +
            AppSecret +
            "&js_code=" +
            res.code +
            "&grant_type=authorization_code",
        }, // 请求获取令牌
        async function (error, response, body) {
          if (error) {
            return reject(error);
          } else {
            if (response.statusCode == 200) {
              const { session_key, openid } = JSON.parse(body);

              return resolve(openid);
            }
          }
        }
      );
    });
    const loginInfo = await wxlogininfo;
    const Info = {
      openid: loginInfo,
    };
    const newOpenid = await createwxlogin(Info);
    ctx.body = {
      code: 0,
      message: "登录成功",
      token: jwt.sign(newOpenid, JWT_SECRET),
    };
  }
}
module.exports = new UserController();
