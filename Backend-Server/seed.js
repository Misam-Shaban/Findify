const mongoose = require("mongoose");
const Job = require("./models/Job");
const jobData = require("./Jobdata.json");

mongoose
  .connect("mongodb://127.0.0.1:27017/jobsDB")
  .then(async () => {
    console.log("MongoDB connected for seeding");

    await Job.deleteMany({});
    console.log("Old data removed");

    await Job.insertMany(jobData);
    console.log("New data inserted");

    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
