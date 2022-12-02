const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`database is connect `));
  // .catch((err) => console.log(err));
};

module.exports = connectDatabase;
