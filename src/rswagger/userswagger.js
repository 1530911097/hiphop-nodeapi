//(普通注册)router.post("/register", userValidator, verifyUser, register)
// #region
/**
 * @swagger
 * /users/register:
 *    post:
 *      tags:
 *      - 用户
 *      summary: 注册账号
 *      consumes:
 *        - application/json
 *      parameters:
 *      - name: register
 *        in: body
 *        description: 普通注册
 *        schema:
 *          type: object
 *          required:
 *            - user_name
 *            - password
 *          properties:
 *                user_name:
 *                  type: string
 *                  description: 用户账号
 *                password:
 *                  type: string
 *                  description: 用户密码
 *      responses:
 *        200:
 *          description: Success
 * */
// #endregion

//(普通登录)router.post("/login", userValidator, verifyLogin, login);
// #region
/**
 * @swagger
 * /users/login:
 *    post:
 *      tags:
 *      - 用户
 *      summary: 用户登录
 *      consumes:
 *        - application/json
 *      parameters:
 *      - name: login
 *        in: body
 *        description: 用户登录
 *        schema:
 *          type: object
 *          required:
 *            - user_name
 *            - password
 *          properties:
 *                user_name:
 *                  type: string
 *                  description: 用户账号
 *                password:
 *                  type: string
 *                  description: 用户密码
 *      responses:
 *        200:
 *          description: Success
 * */
// #endregion

//(用户修改)router.post("/putinfo", userValidator, verifyLogin, login);
// #region
/**
 * @swagger
 * /users/putinfo:
 *    post:
 *      tags:
 *      - 用户
 *      summary: 用户信息修改
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: login
 *        in: body
 *        description: 用户信息修改
 *        schema:
 *          type: object
 *          required:
 *            - password
 *            - name
 *            - sex
 *            - address
 *            - birth
 *            - emit
 *            - plone
 *            - wallet
 *            - vip
 *            - headlogo
 *          properties:
 *                name:
 *                  type: string
 *                  description: 名称
 *                sex:
 *                  type: string
 *                  description: 性别
 *                address:
 *                  type: string
 *                  description: 地址
 *                birth:
 *                  type: string
 *                  description: 出生年月
 *                emit:
 *                  type: string
 *                  description: 邮箱
 *                plone:
 *                  type: string
 *                  description: 手机号
 *                wallet:
 *                  type: string
 *                  description: 钱包
 *                vip:
 *                  type: string
 *                  description: vip
 *                headlogo:
 *                  type: string
 *                  description: 头像
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(修改密码)router.patch("/repair", auth, repairpassword);
// #region
/**
 * @swagger
 * /users/repair:
 *    patch:
 *      tags:
 *      - 用户
 *      summary: 用户密码修改
 *      consumes:
 *        - application/json
 *      parameters:
 *      - name: repair
 *        in: body
 *        description: 用户密码修改
 *        schema:
 *          type: object
 *          required:
 *            - password
 *          properties:
 *                password:
 *                  type: string
 *                  description: 用户密码
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(查询用户)router.get("/info", auth, findData);
// #region
/**
 * @swagger
 * /users/info:
 *    get:
 *      tags:
 *      - 用户
 *      summary: 用户信息
 *      consumes:
 *        - application/json
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(用户注册发送短信)router.post("/smsCode", smsCodeinfo);
// #region
/**
 * @swagger
 * /users/smsCode:
 *    post:
 *      tags:
 *      - 用户
 *      summary: 注册发送短信
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: plone
 *        in: body
 *        description:  发送短信
 *        schema:
 *          type: object
 *          required:
 *            - plone
 *          properties:
 *                plone:
 *                  type: string
 *                  description: 手机号
 *      responses:
 *        200:
 *          description: Success
 * */
// #endregion

//(手机号注册)router.post("/smsCode", smsCodeinfo);
// #region
/**
 * @swagger
 * /users/plonelogin:
 *    post:
 *      tags:
 *      - 用户
 *      summary: 手机号短信注册
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: plone
 *        in: body
 *        description:  发送短信
 *        schema:
 *          type: object
 *          required:
 *            - plone
 *            - code
 *          properties:
 *                plone:
 *                  type: string
 *                  description: 手机号
 *                code:
 *                  type: string
 *                  description: 短信验证码
 *      responses:
 *        200:
 *          description: Success
 * */
// #endregion

//(微信注册登录)router.post("/wxlogin", smsCodeinfo);
// #region
/**
 * @swagger
 * /users/wxlogin:
 *    post:
 *      tags:
 *      - 用户
 *      summary: 微信注册登录
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: plone
 *        in: body
 *        description:  微信注册登录
 *        schema:
 *          type: object
 *          required:
 *            - cloudID
 *            - code
 *            - encryptedData
 *            - iv
 *            - rawData
 *            - signature
 *          properties:
 *                cloudID:
 *                  type: string
 *                  description: cloudID
 *                code:
 *                  type: string
 *                  description: code
 *                encryptedData:
 *                  type: string
 *                  description: encryptedData
 *                iv:
 *                  type: string
 *                  description: iv
 *                rawData:
 *                  type: string
 *                  description: rawData
 *                signature:
 *                  type: string
 *                  description: signature
 *      responses:
 *        200:
 *          description: Success
 * */
// #endregion

//#region
/**
 * @swagger
 *  securityDefinitions:
 *   authorization:
 *      type: apiKey
 *      name: authorization
 *      in: header
 */
//#endregion
