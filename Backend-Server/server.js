require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Job = require("./models/Job");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findOne({ id: req.params.id });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST CRUD

app.post("/api/jobs", async (req, res) => {
  try {
    const lastJob = await Job.findOne().sort({ id: -1 });
    const nextId = lastJob && lastJob.id ? lastJob.id + 1 : 1;

    const newJob = new Job({ ...req.body, id: nextId });
    await newJob.save();

    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete CRUD
app.delete("/api/jobs/:mongoId", async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.mongoId);
    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT CRUD

app.put("/api/jobs/:mongoId", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.mongoId,
      req.body,
      { new: true },
    );
    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port http://localhost:5000");
});
