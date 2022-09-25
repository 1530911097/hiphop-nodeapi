const Chart = require("../model/chart.model.js");

class ChartinfoServe {
  // 创建数据
  async createChart(data) {
    const res = await Chart.create(data);
    return res;
  }

  // 删除数据
  async deleteChart(id) {
    const res = await Chart.destroy({
      where: {
        id: id,
      },
    });
    return res;
  }

  //查询所有
  async FinduserChart(params) {
    const res = await Chart.findAll({
      where: params,
    });
    return res;
  }
  // 查询数据
  async queryChart(pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize;
    const { rows, count } = await Chart.findAndCountAll({
      offset: offset,
      limit: pageSize * 1,

    });
    return {
      pageNum,
      pageSize,
      data: rows,
      total: count,
    };
  }

  //修改数据
  async updatauserChart({
    id,
    picture,
    state,
    link,
    introduction,
  }) {
    const whereOpt = { id };
    const newdata = {};
    picture && Object.assign(newdata, { picture });
    state && Object.assign(newdata, { state });
    link && Object.assign(newdata, { link });
    introduction && Object.assign(newdata, { introduction });
    const res =  await Chart.update(newdata,{ where: whereOpt });
    return res[0] > 0 ? true : false;
  }
}
module.exports = new ChartinfoServe();
