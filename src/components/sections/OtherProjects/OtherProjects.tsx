"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Landmark, 
  HeartPulse, 
  Wrench, 
  UtensilsCrossed, 
  Fuel, 
  Home, 
  Landmark as GovIcon 
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";
import { useTranslation } from "@/providers/IntlProvider";
import { ProjectModal } from "@/components/common/ProjectModal";
import styles from "./OtherProjects.module.css";

const OTHER_ICONS: Record<string, React.ReactNode> = {
  ventra: <Landmark size={18} />,
  helvora: <HeartPulse size={18} />,
  servix: <Wrench size={18} />,
  nexdine: <UtensilsCrossed size={18} />,
  fuelix: <Fuel size={18} />,
  estrava: <Home size={18} />,
  civora: <GovIcon size={18} />
};

export const OtherProjects: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const isPausedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const interactionTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const otherProjects = PROJECTS.filter((p) => !p.isFlagship);

  const markInteraction = useCallback(() => {
    isInteractingRef.current = true;
    if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current);
    }
    interactionTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 3500);
  }, []);

  const handleScrollStep = useCallback(
    (direction: "left" | "right") => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      markInteraction();

      const setWidth = track.scrollWidth / 2;
      if (setWidth <= 0) return;

      const cardElement = container.querySelector(`.${styles.card}`);
      const cardWidth = cardElement ? cardElement.getBoundingClientRect().width : 340;
      const gap = 24; // 1.5rem
      const step = cardWidth + gap;

      const moveDirection = direction === "left" ? (isRTL ? 1 : -1) : (isRTL ? -1 : 1);

      // Boundary safety check before smooth scroll
      if (moveDirection > 0 && container.scrollLeft >= setWidth - step) {
        container.scrollLeft -= setWidth;
      } else if (moveDirection < 0 && container.scrollLeft <= step) {
        container.scrollLeft += setWidth;
      }

      container.scrollBy({ left: moveDirection * step, behavior: "smooth" });
    },
    [isRTL, markInteraction]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX;
    startScrollLeftRef.current = container.scrollLeft;
    markInteraction();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.pageX - startXRef.current;

      if (Math.abs(deltaX) > 6) {
        if (!hasDraggedRef.current) {
          hasDraggedRef.current = true;
          setIsDragging(true);
        }
      }

      container.scrollLeft = startScrollLeftRef.current - deltaX;
      markInteraction();
    };

    const onMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
        setTimeout(() => {
          hasDraggedRef.current = false;
        }, 50);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [markInteraction]);

  // Handle auto-scrolling & initialization
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const initScroll = () => {
      const setWidth = track.scrollWidth / 2;
      if (setWidth > 0 && container.scrollLeft === 0) {
        container.scrollLeft = 0;
      }
    };
    const initTimer = setTimeout(initScroll, 100);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return () => clearTimeout(initTimer);
    }

    let animId: number;
    let lastTime = performance.now();
    const speed = 0.045; // ~45px per second

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (
        !isPausedRef.current &&
        !isInteractingRef.current &&
        !isDraggingRef.current &&
        delta < 100
      ) {
        container.scrollLeft += speed * delta;

        const setWidth = track.scrollWidth / 2;
        if (setWidth > 0) {
          if (container.scrollLeft >= setWidth) {
            container.scrollLeft -= setWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += setWidth;
          }
        }
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => {
      clearTimeout(initTimer);
      cancelAnimationFrame(animId);
      if (interactionTimerRef.current) {
        clearTimeout(interactionTimerRef.current);
      }
    };
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const setWidth = track.scrollWidth / 2;
    if (setWidth <= 0) return;

    if (container.scrollLeft >= setWidth) {
      container.scrollLeft -= setWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += setWidth;
    }
  }, []);

  const handleCardClick = useCallback((project: Project) => {
    if (hasDraggedRef.current) return;
    setSelectedProject(project);
  }, []);

  const renderCard = (project: Project, suffix: string, isClone: boolean = false) => (
    <article
      key={`${project.id}-${suffix}`}
      className={styles.card}
      aria-hidden={isClone ? true : undefined}
      onClick={() => handleCardClick(project)}
      tabIndex={isClone ? -1 : 0}
      role="button"
      aria-label={`${t.projects.viewAuditFor} ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick(project);
        }
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 310px, 340px"
          className={styles.cardImage}
          draggable={false}
        />
        <div className={styles.floatingCategoryIcon}>
          {OTHER_ICONS[project.id] || <Landmark size={18} />}
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
            <span>
              {t.projects.maturities[
                project.maturity === "Functional MVP"
                  ? "mvp"
                  : project.maturity === "Working Prototype"
                  ? "working"
                  : "early"
              ] || project.maturity}
            </span>
          </div>

          <p className={styles.cardDescription}>{project.shortDescription}</p>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.techPills}>
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className={styles.techPill}>
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            tabIndex={isClone ? -1 : 0}
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(project);
            }}
            className={styles.detailsButton}
            aria-label={isClone ? undefined : `${t.projects.viewAuditFor} ${project.title}`}
          >
            <span>{t.projects.viewDetails}</span>
            <ArrowRight size={14} data-rtl-mirror="true" />
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section id="other-projects" className={styles.otherProjects} aria-labelledby="other-projects-heading">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} />
              <span className={styles.eyebrow}>{t.projects.otherBadge}</span>
              <span className={styles.eyebrowDash} />
            </div>
            <h2 id="other-projects-heading" className={styles.title}>
              {t.projects.otherTitle}
            </h2>
            <p style={{ marginTop: "0.5rem", color: "var(--text-secondary)", fontSize: "0.975rem" }}>
              {t.projects.otherSubtitle}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className={styles.controls} aria-label="Projects carousel controls">
            <button
              type="button"
              className={styles.navButton}
              onClick={() => handleScrollStep("left")}
              aria-label={t.projects.scrollLeft}
              title={t.projects.scrollLeft}
            >
              <ChevronLeft size={20} data-rtl-mirror="true" />
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => handleScrollStep("right")}
              aria-label={t.projects.scrollRight}
              title={t.projects.scrollRight}
            >
              <ChevronRight size={20} data-rtl-mirror="true" />
            </button>
          </div>
        </div>

        {/* Carousel Wrapper with Floating Edge Buttons */}
        <div className={styles.carouselWrapper}>
          <button
            type="button"
            className={`${styles.floatingNavButton} ${styles.floatingNavLeft}`}
            onClick={() => handleScrollStep("left")}
            aria-label={t.projects.scrollLeft}
            title={t.projects.scrollLeft}
          >
            <ChevronLeft size={22} data-rtl-mirror="true" />
          </button>

          <div
            ref={containerRef}
            className={`${styles.marqueeOuter} ${isDragging ? styles.isGrabbing : ""}`}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onWheel={markInteraction}
            onTouchStart={() => {
              isPausedRef.current = true;
              markInteraction();
            }}
            onTouchEnd={() => {
              isPausedRef.current = false;
              markInteraction();
            }}
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
            onFocusCapture={() => {
              isPausedRef.current = true;
            }}
            onBlurCapture={() => {
              isPausedRef.current = false;
            }}
            tabIndex={0}
            role="region"
            aria-label={t.projects.otherTitle}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                handleScrollStep("left");
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                handleScrollStep("right");
              }
            }}
          >
            <div ref={trackRef} className={styles.marqueeTrack}>
              {otherProjects.map((project) => renderCard(project, "primary", false))}
              {otherProjects.map((project) => renderCard(project, "clone", true))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.floatingNavButton} ${styles.floatingNavRight}`}
            onClick={() => handleScrollStep("right")}
            aria-label={t.projects.scrollRight}
            title={t.projects.scrollRight}
          >
            <ChevronRight size={22} data-rtl-mirror="true" />
          </button>
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
