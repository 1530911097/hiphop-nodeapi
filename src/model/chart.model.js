const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
const Chart = seq.define(
  "Chart",
  {
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "轮播图",
    },
    state: {
      type: DataTypes.STRING(1234),
      allowNull: false,
      comment: "状态",
    },
    link: {
      type: DataTypes.STRING,
      allowNull: null,
      content: "跳转链接",
    },

    introduction: {
      type: DataTypes.STRING,
      allowNull: null,
      content: "说明简介",
    },
  }
);
//Chart.sync({ force: true });
module.exports = Chart;
