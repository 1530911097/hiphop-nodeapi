const path = require("path");

class addContraoller {
   addImage(ctx, next) {
    const { file } = ctx.request.files;
    console.log(file)
    const fileType = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "video/mp4",
      "video/ogg",
      "video/flv",
      "video/avi",
      "video/wmv",
      "video/rmvb",
      "video/mov",
    ];
    if (file) {
         console.log('2')
          console.log(file)
      if (!fileType.includes(file.mimetype)) {
         console.log('3')
        return ctx.app.emit("error", unSupportedFileType, ctx);
      }
      ctx.body = {
        code: 0,
        message: "上传图片成功",
        data: {
          image: "http://124.223.81.104:3000/" + path.basename(file.filepath),
        },
      };
    } else {
      return ctx.app.emit("error", fileUploadError, ctx);
    }
  }
}
module.exports = new addContraoller();
