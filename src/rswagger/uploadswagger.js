//(上传图片)router.post('/img',addImage)
// #region
/**
 * @swagger
 * /down/img:
 *    post:
 *      tags:
 *      - 上传
 *      summary: 上传图片
 *      consumes:
 *        - application/x-www-form-urlencoded
 *      produces:
 *        - application/xml
 *        - application/json
 *      required: false
 *      type: file
 *      parameters:
 *      - name: file
 *        in: formData
 *        description:  上传图片
 *      responses:
 *        200:
 *          description: Success
 *        security:
 *         - petstore_auth:
 *         - write:pets
 *         - read:pets
 * */
// #endregion
