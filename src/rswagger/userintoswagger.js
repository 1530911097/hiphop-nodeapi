//(学员)router.get("/list",auth, queryteacher);
// #region
/**
 * @swagger
 * /Userinfo/list:
 *    get:
 *      tags:
 *      - 用户管理（后台）
 *      summary: 用户列表
 *      consumes:
 *        - application/json
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *        - name: pageNum
 *          in: query
 *          description:  页
 *        - name: pageSize
 *          in: query
 *          description:  页数
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(查询学员)router.get("/newlist", auth, findData)
// #region
/**
 * @swagger
 * /Userinfo/searse:
 *    get:
 *      tags:
 *      - 用户管理（后台）
 *      summary: 查询用户
 *      consumes:
 *        - application/json
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *        - name: users_name
 *          in: query
 *          description:  姓名
 *        - name: users_species
 *          in: query
 *          description:  舞种类型
 *        - name: users_sex
 *          in: query
 *          description:  性别
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(新增学员)router.post("/add",auth,  createdate);
// #region
/**
 * @swagger
 * /Userinfo/add:
 *    post:
 *      tags:
 *      - 用户管理（后台）
 *      summary: 新增用户
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: student
 *        in: body
 *        description:  新增用户
 *        schema:
 *          type: object
 *          required:
 *            - users_name
 *            - users_sex
 *            - users_date
 *            - users_species
 *            - users_introduction
 *          properties:
 *                users_name:
 *                  type: string
 *                  description: 名称
 *                users_sex:
 *                  type: string
 *                  description: 性别
 *                users_date:
 *                  type: string
 *                  description: 出生年月
 *                users_species:
 *                  type: string
 *                  description: 舞种分类
 *                users_introduction:
 *                  type: string
 *                  description: 简介
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(删除)router.post("/remove", auth, delebeteacher);
// #region
/**
 * @swagger
 * /Userinfo/remove:
 *    post:
 *      tags:
 *      - 用户管理（后台）
 *      summary: 删除用户
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: teacher
 *        in: body
 *        description:  删除学员
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *                id:
 *                  type: string
 *                  description: id
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(修改学员)router.post("/updata",auth,  updatedate);
// #region
/**
 * @swagger
 * /Userinfo/updata:
 *    post:
 *      tags:
 *      - 用户管理（后台）
 *      summary: 修改用户
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: teacher
 *        in: body
 *        description:  修改用户
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - users_name
 *            - users_sex
 *            - users_date
 *            - users_species
 *            - users_introduction
 *          properties:
 *                id:
 *                  type: string
 *                  description: id
 *                users_name:
 *                  type: string
 *                  description: 名称
 *                users_sex:
 *                  type: string
 *                  description: 性别
 *                users_date:
 *                  type: string
 *                  description: 出生年月
 *                users_species:
 *                  type: string
 *                  description: 舞种分类
 *                users_introduction:
 *                  type: string
 *                  description: 简介
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
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
