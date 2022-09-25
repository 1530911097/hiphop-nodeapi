//(轮播图)router.get("/list",auth,queryChart);
// #region
/**
 * @swagger
 * /chart/list:
 *    get:
 *      tags:
 *      - 轮播图管理
 *      summary: 轮播图列表
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

//(新增轮播图)router.post("/add",auth,  createdate);
// #region
/**
 * @swagger
 * /chart/add:
 *    post:
 *      tags:
 *      - 轮播图管理
 *      summary: 新增轮播图
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: add_chart
 *        in: body
 *        description:  新增轮播图
 *        schema:
 *          type: object
 *          required:
 *            - picture
 *            - state
 *            - link
 *            - introduction
 *          properties:
 *                picture:
 *                  type: string
 *                  description: 图片
 *                state:
 *                  type: string
 *                  description: 状态
 *                link:
 *                  type: string
 *                  description: 链接
 *                introduction:
 *                  type: string
 *                  description: 简介
 *      responses:
 *        200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(删除轮播图)router.post("/delete", auth, deleteChart);
// #region
/**
 * @swagger
 * /chart/delete:
 *    post:
 *      tags:
 *        - 轮播图管理
 *      summary: 删除轮播图
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: delete_chart
 *        in: body
 *        description:  删除轮播图
 *        schema:
 *          type: object
 *          required:
 *            - id
 *          properties:
 *                id:
 *                  type: string
 *                  description: id
 *        responses:
 *          200:
 *          description: Success
 *      security:
 *       - authorization: []
 * */
// #endregion

//(修改轮播图)router.post("/add",auth,  createdate);
// #region
/**
 * @swagger
 * /chart/updata:
 *    post:
 *      tags:
 *      - 轮播图管理
 *      summary: 修改轮播图
 *      produces:
 *        - "application/xml"
 *        - "application/json"
 *      parameters:
 *      - name: updata_chart
 *        in: body
 *        description:  修改轮播图
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - picture
 *            - state
 *            - link
 *            - introduction
 *          properties:
*                id:
 *                  type: string
 *                  description: id
 *                picture:
 *                  type: string
 *                  description: 图片
 *                state:
 *                  type: string
 *                  description: 状态
 *                link:
 *                  type: string
 *                  description: 链接
 *                introduction:
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
