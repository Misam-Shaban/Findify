require("dotenv").config();

const mongoose = require("mongoose");
const Job = require("./models/Job");
const jobData = require("./Jobdata.json");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected for seeding");

    await Job.deleteMany({});
    console.log("Old data removed");

    await Job.insertMany(jobData);
    console.log("New data inserted");

    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
