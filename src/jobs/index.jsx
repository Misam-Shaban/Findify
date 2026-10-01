import { useState, useEffect } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import Jobcard from "./Jobcard";
import JobDescription from "./JobDescription";
import EditJob from "./EditJob";
import { JobsPageSkeleton } from "../components/Skeletons";

const API = "https://job-cards-with-react-production.up.railway.app/api/jobs";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const navigate = useNavigate();

  const keyword = searchParams.get("keyword") || "";
  const location = searchParams.get("location") || "";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setJobs)
      .catch(console.log);
  }, []);

  // Auto-select first FILTERED job
  useEffect(() => {
    if (!jobs || jobs.length === 0) return;

    const filtered = jobs.filter((job) => {
      const matchesKeyword =
        !keyword ||
        job.title?.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company?.toLowerCase().includes(keyword.toLowerCase());
      const matchesLocation =
        !location ||
        job.location?.toLowerCase().includes(location.toLowerCase());
      return matchesKeyword && matchesLocation;
    });

    if (filtered.length === 0) return;

    const currentInFiltered =
      id && filtered.some((j) => String(j.id) === String(id));

    if (!currentInFiltered) {
      const first = filtered[0];
      const firstId = first.id ?? first._id;

      const params = new URLSearchParams();
      if (keyword) params.set("keyword", keyword);
      if (location) params.set("location", location);
      const qs = params.toString();

      navigate(`/jobs/${firstId}${qs ? `?${qs}` : ""}`, { replace: true });
    }
  }, [jobs, id, keyword, location, navigate]);

  useEffect(() => {
    setIsEditing(false);
  }, [id]);

  const handleDelete = async (mongoId, jobId) => {
    if (!window.confirm("Delete this job?")) return;
    try {
      const res = await fetch(`${API}/${mongoId}`, { method: "DELETE" });
      if (res.ok) {
        setJobs((prev) => prev.filter((j) => j._id !== mongoId));
        if (String(jobId) === String(id)) navigate("/jobs");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (updatedJob) => {
    setJobs((prev) =>
      prev.map((j) => (j._id === updatedJob._id ? { ...j, ...updatedJob } : j)),
    );
    setIsEditing(false);
  };

  if (!jobs) {
    return <JobsPageSkeleton />;
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesKeyword =
      !keyword ||
      job.title?.toLowerCase().includes(keyword.toLowerCase()) ||
      job.company?.toLowerCase().includes(keyword.toLowerCase());
    const matchesLocation =
      !location || job.location?.toLowerCase().includes(location.toLowerCase());
    return matchesKeyword && matchesLocation;
  });

  const selectedJob = jobs.find((j) => String(j.id) === String(id)) || null;

  return (
    <div className={`jobs-layout${selectedJob ? " has-selection" : ""}`}>
      <aside className="jobs-list-panel">
        <div className="jobs-list-header">
          <h2>Jobs for you</h2>
          <p className="jobs-search-info">
            {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"}
            {keyword && ` for "${keyword}"`}
          </p>
        </div>

        <div className="jobs-list">
          {filteredJobs.length === 0 ? (
            <p className="empty-text">No jobs match your search.</p>
          ) : (
            filteredJobs.map((job) => (
              <Jobcard
                key={job._id}
                {...job}
                isActive={String(job.id) === String(id)}
                onDelete={() => handleDelete(job._id, job.id)}
              />
            ))
          )}
        </div>
      </aside>

      <section className="jobs-detail-panel">
        {!selectedJob ? (
          <div className="empty-state">
            <div className="empty-icon">👈</div>
            <h3>Select a job to view details</h3>
            <p>Click any job card on the left to see the full description.</p>
          </div>
        ) : isEditing ? (
          <EditJob
            job={selectedJob}
            onCancel={() => setIsEditing(false)}
            onUpdate={handleUpdate}
          />
        ) : (
          <JobDescription
            job={selectedJob}
            onEdit={() => setIsEditing(true)}
            onDelete={() => handleDelete(selectedJob._id, selectedJob.id)}
          />
        )}
      </section>
    </div>
  );
};

export default Jobs;
