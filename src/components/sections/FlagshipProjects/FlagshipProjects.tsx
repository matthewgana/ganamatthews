"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sprout, Building2, Hotel, GraduationCap } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";
import { useTranslation } from "@/providers/IntlProvider";
import { ProjectModal } from "@/components/common/ProjectModal";
import styles from "./FlagshipProjects.module.css";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  agritrack: <Sprout size={18} />,
  foundra: <Building2 size={18} />,
  hostelix: <Hotel size={18} />,
  railos: <GraduationCap size={18} />
};

export const FlagshipProjects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flagships = PROJECTS.filter((p) => p.isFlagship);

  return (
    <section id="work" className={styles.flagships} aria-labelledby="flagships-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} />
              <span className={styles.eyebrow}>{t.projects.badge}</span>
            </div>
            <h2 id="flagships-heading" className={styles.title}>
              {t.projects.title}
            </h2>
            <p className={styles.subtitle}>{t.projects.subtitle}</p>
          </div>

          <a href="#other-projects" className={styles.viewAllLink}>
            <span>{t.projects.viewAll}</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 2x2 Flagships Grid */}
        <div className={styles.grid}>
          {flagships.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className={styles.cardImage}
                />
                <div className={styles.floatingCategoryIcon}>
                  {CATEGORY_ICONS[project.id] || <Building2 size={18} />}
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardHeaderInfo}>
                  <div className={styles.cardTitleRow}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                  </div>

                  <span className={styles.cardIndustry}>{project.industry}</span>

                  <div className={styles.maturityBadge}>
                    <span className={styles.maturityDot} />
                    <span>{project.maturity}</span>
                  </div>

                  <p className={styles.cardDescription}>{project.shortDescription}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.techPills}>
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className={styles.detailsButton}
                    aria-label={`View full technical audit details for ${project.title}`}
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </article>
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
