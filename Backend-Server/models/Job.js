const mongoose = require("mongoose");

const jobDescriptionSchema = new mongoose.Schema(
  {
    description: String,
    detailedLocation: String,
    aboutJob: String,
    requirements: [String],
    preferredSkills: [String],
    additionalSkills: [String],
  },
  { _id: false },
);

const jobSchema = new mongoose.Schema({
  id: Number,
  logo: String,
  company: String,
  postedDays: String,
  title: String,
  tags: [String],
  price: String,
  location: String,
  jobDescription: jobDescriptionSchema,
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
