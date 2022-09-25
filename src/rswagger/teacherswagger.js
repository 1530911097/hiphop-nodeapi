//(老师)router.get("/list",auth, queryteacher);
// #region
/**
 * @swagger
 * /teacher/list:
 *    get:
 *      tags:
 *      - 老师管理（后台）
 *      summary: 老师列表
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

//(查询老师)router.get("/searse", auth, findData)
// #region
/**
 * @swagger
 * /teacher/searse:
 *    get:
 *      tags:
 *      - 老师管理（后台）
 *      summary: 查询老师
 *      consumes:
 *        - application/json
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *        - name: teache_name
 *          in: query
 *          description:  老师姓名
 *        - name: teache_sex
 *          in: query
 *          description:  老师性别
 *        - name: teache_status
 *          in: query
 *          description:  老师状态
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(新增老师)router.post("/add",auth,  createdate);
// #region
/**
 * @swagger
 * /teacher/add:
 *    post:
 *      tags:
 *      - 老师管理（后台）
 *      summary: 新增老师
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: teacher
 *        in: body
 *        description:  新增老师
 *        schema:
 *          type: object
 *          required:
 *            - teache_name
 *            - teache_Introduction
 *            - teache_status
 *            - teache_dance_species
 *            - teache_sex
 *            - teache_date
 *          properties:
 *                teache_name:
 *                  type: string
 *                  description: 老师名称
 *                teache_Introduction:
 *                  type: string
 *                  description: 教师简介
 *                teache_status:
 *                  type: string
 *                  description: 状态
 *                teache_dance_species:
 *                  type: string
 *                  description: 舞种分类
 *                teache_sex:
 *                  type: string
 *                  description: 性别
 *                teache_date:
 *                  type: string
 *                  description: 出生日期
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(删除老师)router.post("/remove", auth, delebeteacher);
// #region
/**
 * @swagger
 * /teacher/remove:
 *    post:
 *      tags:
 *      - 老师管理（后台）
 *      summary: 删除老师
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: teacher
 *        in: body
 *        description:  删除老师
 *        schema:
 *          type: object
 *          required:
 *            - teache_id
 *          properties:
 *                teache_id:
 *                  type: string
 *                  description: id
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(修改老师)router.post("/updata",auth,  updatedate);
// #region
/**
 * @swagger
 * /teacher/updata:
 *    post:
 *      tags:
 *      - 老师管理（后台）
 *      summary: 修改老师
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: teacher
 *        in: body
 *        description:  修改老师
 *        schema:
 *          type: object
 *          required:
 *            - teache_id
 *            - teache_name
 *            - teache_Introduction
 *            - teache_status
 *            - teache_dance_species
 *            - teache_sex
 *            - teache_date
 *          properties:
 *                teache_name:
 *                  type: string
 *                  description: 老师名称
 *                teache_Introduction:
 *                  type: string
 *                  description: 教师简介
 *                teache_status:
 *                  type: string
 *                  description: 状态
 *                teache_dance_species:
 *                  type: string
 *                  description: 舞种分类
 *                teache_sex:
 *                  type: string
 *                  description: 性别
 *                teache_date:
 *                  type: string
 *                  description: 出生日期
 *                teache_id:
 *                  type: string
 *                  description: 老师
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
