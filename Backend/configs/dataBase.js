const mongoose = require("mongoose");

const dataBaseConnection = mongoose.connect(
  "mongodb+srv://yshahwan56:Shahwanii6605@cluster0.mo0wwgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = {
  dataBaseConnection,
};
