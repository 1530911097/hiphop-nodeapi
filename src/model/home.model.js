const { DataTypes } = require("sequelize");
const seq = require("../db/seq");
const Home = seq.define("Home", {
  home_id: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "home_id",
  },
})

 //Home.sync({ force: true });
module.exports = Home;
