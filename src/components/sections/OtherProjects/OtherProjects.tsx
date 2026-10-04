"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Landmark, HeartPulse, Wrench, UtensilsCrossed, Fuel, Home, Landmark as GovIcon } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";
import { useTranslation } from "@/providers/IntlProvider";
import { ProjectModal } from "@/components/common/ProjectModal";
import styles from "./OtherProjects.module.css";

const OTHER_ICONS: Record<string, React.ReactNode> = {
  ventra: <Landmark size={20} />,
  helvora: <HeartPulse size={20} />,
  servix: <Wrench size={20} />,
  nexdine: <UtensilsCrossed size={20} />,
  fuelix: <Fuel size={20} />,
  estrava: <Home size={20} />,
  civora: <GovIcon size={20} />
};

export const OtherProjects: React.FC = () => {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const otherProjects = PROJECTS.filter((p) => !p.isFlagship);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section id="other-projects" className={styles.otherProjects} aria-labelledby="other-projects-heading">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} />
              <span className={styles.eyebrow}>{t.projects.otherBadge}</span>
            </div>
            <h2 id="other-projects-heading" className={styles.title}>
              {t.projects.otherTitle}
            </h2>
            <p style={{ marginTop: "0.5rem", color: "var(--text-secondary)", fontSize: "0.975rem" }}>
              {t.projects.otherSubtitle}
            </p>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              onClick={scrollLeft}
              className={styles.navButton}
              aria-label="Scroll projects left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className={styles.navButton}
              aria-label="Scroll projects right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div ref={trackRef} className={styles.scrollTrack}>
          {otherProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={styles.card}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View technical audit for ${project.title}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardIconBox}>
                  {OTHER_ICONS[project.id] || <Landmark size={20} />}
                </div>

                <div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.cardIndustry}>{project.industry}</span>
                </div>

                <p className={styles.cardDescription}>{project.shortDescription}</p>
              </div>

              <div className={styles.cardBottom}>
                <span
                  className={
                    project.maturity === "Working Prototype"
                      ? styles.maturityWorking
                      : styles.maturityEarly
                  }
                >
                  {project.maturity}
                </span>

                <div className={styles.techLine}>
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className={styles.techMiniPill}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
