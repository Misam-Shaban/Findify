import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/* =========================
   JOB CARD SKELETON
========================= */
export function JobCardSkeleton() {
  return (
    <div className="job-card job-card-skeleton">
      <Skeleton height={18} width="75%" style={{ marginBottom: 8 }} />
      <Skeleton height={14} width="50%" style={{ marginBottom: 6 }} />
      <Skeleton height={13} width="40%" style={{ marginBottom: 14 }} />
      <div style={{ display: "flex", gap: 6 }}>
        <Skeleton height={24} width={80} borderRadius={999} />
        <Skeleton height={24} width={90} borderRadius={999} />
      </div>
    </div>
  );
}

/* =========================
   JOBS LIST SKELETON (Left Panel)
========================= */
export function JobsListSkeleton({ count = 5 }) {
  return (
    <div className="jobs-list-panel">
      <div className="jobs-list-header">
        <Skeleton height={24} width={140} />
        <Skeleton height={14} width={100} style={{ marginTop: 8 }} />
      </div>
      <div className="jobs-list">
        {Array.from({ length: count }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

/* =========================
   JOB DETAIL SKELETON (Right Panel)
========================= */
export function JobDetailSkeleton() {
  return (
    <div className="job-detail">
      {/* Header */}
      <div className="job-detail-header">
        <div className="job-company-info">
          <Skeleton width={60} height={60} borderRadius={12} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <Skeleton height={24} width="70%" style={{ marginBottom: 8 }} />
            <Skeleton height={16} width="40%" style={{ marginBottom: 6 }} />
            <Skeleton height={14} width="30%" />
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Skeleton height={42} width={110} borderRadius={999} />
          <Skeleton height={42} width={42} borderRadius={12} />
          <Skeleton height={42} width={42} borderRadius={12} />
        </div>
      </div>

      {/* Sections */}
      <div style={{ marginTop: 24 }}>
        <Skeleton height={20} width="45%" style={{ marginBottom: 14 }} />
        <Skeleton count={3} height={14} style={{ marginBottom: 8 }} />

        <Skeleton
          height={20}
          width="35%"
          style={{ marginTop: 26, marginBottom: 14 }}
        />
        <Skeleton count={4} height={14} style={{ marginBottom: 8 }} />

        <Skeleton
          height={20}
          width="30%"
          style={{ marginTop: 26, marginBottom: 14 }}
        />
        <Skeleton count={2} height={14} style={{ marginBottom: 8 }} />
      </div>
    </div>
  );
}

/* =========================
   MASTER-DETAIL FULL PAGE SKELETON
========================= */
export function JobsPageSkeleton() {
  return (
    <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f1f5f9">
      <div className="jobs-layout">
        <JobsListSkeleton count={5} />
        <section className="jobs-detail-panel">
          <JobDetailSkeleton />
        </section>
      </div>
    </SkeletonTheme>
  );
}
