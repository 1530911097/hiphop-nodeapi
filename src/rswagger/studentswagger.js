//(学员)router.get("/list",auth, queryteacher);
// #region
/**
 * @swagger
 * /student/list:
 *    get:
 *      tags:
 *      - 学员管理（后台）
 *      summary: 学员列表
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
 * /student/newlist:
 *    get:
 *      tags:
 *      - 学员管理（后台）
 *      summary: 查询学员
 *      consumes:
 *        - application/json
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *        - name: student_name
 *          in: query
 *          description:  学员姓名
 *        - name: student_species
 *          in: query
 *          description:  舞种类型
 *        - name: student_sex
 *          in: query
 *          description:  学员性别
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
 * /student/add:
 *    post:
 *      tags:
 *      - 学员管理（后台）
 *      summary: 新增学员
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: student
 *        in: body
 *        description:  新增老师
 *        schema:
 *          type: object
 *          required:
 *            - student_number
 *            - student_name
 *            - student_sex
 *            - student_date
 *            - student_species
 *            - student_introduction
 *          properties:
 *                student_number:
 *                  type: string
 *                  description: 学员学号
 *                student_name:
 *                  type: string
 *                  description: 学员名称
 *                student_sex:
 *                  type: string
 *                  description: 性别
 *                student_date:
 *                  type: string
 *                  description: 出生年月
 *                student_species:
 *                  type: string
 *                  description: 舞种分类
 *                student_introduction:
 *                  type: string
 *                  description: 学生简介
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
 * /student/remove:
 *    post:
 *      tags:
 *      - 学员管理（后台）
 *      summary: 删除学员
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
 * /student/updata:
 *    post:
 *      tags:
 *      - 学员管理（后台）
 *      summary: 修改学员
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: teacher
 *        in: body
 *        description:  修改学员
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - student_number
 *            - student_name
 *            - student_sex
 *            - student_date
 *            - student_species
 *            - student_introduction
 *          properties:
 *                student_number:
 *                  type: string
 *                  description: 学员学号
 *                student_name:
 *                  type: string
 *                  description: 学员名称
 *                student_sex:
 *                  type: string
 *                  description: 性别
 *                student_date:
 *                  type: string
 *                  description: 出生年月
 *                student_species:
 *                  type: string
 *                  description: 舞种分类
 *                student_introduction:
 *                  type: string
 *                  description: 学生简介
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
