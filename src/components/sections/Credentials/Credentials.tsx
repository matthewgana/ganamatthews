"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  Maximize2, 
  ArrowRight, 
  X, 
  Calendar, 
  Check, 
  Layers, 
  ExternalLink,
  Shield,
  Activity
} from "lucide-react";
import { CREDENTIALS, AI_ML_TARGET_DATE } from "@/data/credentials";
import { Credential } from "@/types";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Credentials.module.css";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeRemaining = (targetDateStr: string): CountdownTime => {
  const target = new Date(targetDateStr).getTime();
  const now = Date.now();
  let diff = target - now;

  // Ensure countdown stays positive and active as specified (20 days window)
  if (diff <= 0 || isNaN(diff)) {
    diff = 20 * 24 * 60 * 60 * 1000;
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const Credentials: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() => calculateTimeRemaining(AI_ML_TARGET_DATE));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(AI_ML_TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Modal keyboard dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCredential(null);
      }
    };
    if (selectedCredential) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCredential]);

  const handleCardClick = useCallback((credential: Credential) => {
    setSelectedCredential(credential);
  }, []);

  return (
    <section id="credentials" className={styles.credentials} aria-labelledby="credentials-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDash} />
            <span className={styles.eyebrow}>{t.credentials.badge}</span>
            <span className={styles.eyebrowDash} />
          </div>

          <h2 id="credentials-heading" className={styles.title}>
            {t.credentials.title}
          </h2>

          <p className={styles.subtitle}>{t.credentials.subtitle}</p>
        </div>

        {/* Credentials Grid */}
        <div className={styles.grid}>
          {CREDENTIALS.map((credential) => {
            const isOngoing = credential.status === "ongoing";
            const isVerified = credential.status === "verified";
            const isAccredited = credential.status === "accredited";

            return (
              <article 
                key={credential.id} 
                className={`${styles.card} ${isOngoing ? styles.ongoingCard : ""}`}
                onClick={() => handleCardClick(credential)}
                tabIndex={0}
                role="button"
                aria-label={`Inspect credential: ${credential.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(credential);
                  }
                }}
              >
                {/* Top Status Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.registryCode}>
                    <span className={styles.hashSign}>#</span>
                    <span>{credential.credentialCode || "REG-VERIFIED"}</span>
                  </div>

                  <div className={`${styles.statusBadge} ${styles[`status_${credential.status || "verified"}`]}`}>
                    {isOngoing ? (
                      <>
                        <span className={styles.pulseDot} />
                        <Sparkles size={11} className={styles.statusIcon} />
                        <span>Ongoing · 20d Sprint</span>
                      </>
                    ) : isAccredited ? (
                      <>
                        <Cpu size={11} className={styles.statusIcon} />
                        <span>{credential.year} · Accredited</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={12} className={styles.statusIcon} />
                        <span>{credential.year} · Verified</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Certificate Visual Showcase / Countdown HUD */}
                <div className={styles.visualShowcase}>
                  {credential.imageFile ? (
                    <div className={styles.imageContainer}>
                      <Image
                        src={credential.imageFile}
                        alt={`${credential.title} certificate`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={styles.certImage}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.inspectPrompt}>
                          <Maximize2 size={16} />
                          <span>Inspect Full Certificate</span>
                        </div>
                      </div>
                      <div className={styles.watermarkBadge}>
                        <Shield size={10} />
                        <span>VERIFIED RECORD</span>
                      </div>
                    </div>
                  ) : (
                    /* Futuristic Ongoing AI & ML Specialization Countdown HUD */
                    <div className={styles.countdownShowcase}>
                      <div className={styles.hudHeader}>
                        <div className={styles.liveIndicator}>
                          <span className={styles.pulseRadar} />
                          <Activity size={12} className={styles.radarIcon} />
                          <span className={styles.liveText}>CAPSTONE IN PROGRESS</span>
                        </div>
                        <span className={styles.hudBadge}>COHORT 2026</span>
                      </div>

                      <div className={styles.timerMatrix}>
                        <div className={styles.timeBox}>
                          <span className={styles.timeVal}>
                            {mounted ? String(timeLeft.days).padStart(2, "0") : "20"}
                          </span>
                          <span className={styles.timeUnit}>DAYS</span>
                        </div>
                        <span className={styles.timeColon}>:</span>
                        <div className={styles.timeBox}>
                          <span className={styles.timeVal}>
                            {mounted ? String(timeLeft.hours).padStart(2, "0") : "00"}
                          </span>
                          <span className={styles.timeUnit}>HRS</span>
                        </div>
                        <span className={styles.timeColon}>:</span>
                        <div className={styles.timeBox}>
                          <span className={styles.timeVal}>
                            {mounted ? String(timeLeft.minutes).padStart(2, "0") : "00"}
                          </span>
                          <span className={styles.timeUnit}>MIN</span>
                        </div>
                        <span className={styles.timeColon}>:</span>
                        <div className={styles.timeBox}>
                          <span className={styles.timeVal}>
                            {mounted ? String(timeLeft.seconds).padStart(2, "0") : "00"}
                          </span>
                          <span className={styles.timeUnit}>SEC</span>
                        </div>
                      </div>

                      {/* Progress Track */}
                      <div className={styles.progressSection}>
                        <div className={styles.progressLabels}>
                          <span className={styles.progressStatus}>Curriculum Defense</span>
                          <span className={styles.progressScore}>88% Complete</span>
                        </div>
                        <div className={styles.progressBarWrapper}>
                          <div className={styles.progressBarActive} style={{ width: "88%" }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <div>
                    {/* Category & Year Ribbon */}
                    <div className={styles.categoryRow}>
                      <span className={styles.categoryBadge}>
                        {credential.category === "Cybersecurity"
                          ? t.credentials.categories.cybersecurity
                          : credential.category === "Backend Development"
                          ? t.credentials.categories.backend
                          : credential.category === "Data Analytics"
                          ? t.credentials.categories.data
                          : t.credentials.categories.aiml}
                      </span>
                      <span className={styles.yearTag}>
                        <Calendar size={11} />
                        <span>{credential.year}</span>
                      </span>
                    </div>

                    <h3 className={styles.certTitle}>{credential.title}</h3>

                    {credential.issuer && (
                      <p className={styles.issuerText}>{credential.issuer}</p>
                    )}

                    {credential.description && (
                      <p className={styles.descriptionText}>{credential.description}</p>
                    )}
                  </div>

                  {/* Competency Pills */}
                  {credential.skills && credential.skills.length > 0 && (
                    <div className={styles.skillsList}>
                      {credential.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className={styles.skillPill}>
                          {skill}
                        </span>
                      ))}
                      {credential.skills.length > 3 && (
                        <span className={styles.skillMorePill}>
                          +{credential.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Action Link */}
                  <div className={styles.cardActionRow}>
                    <span className={styles.actionText}>
                      {isOngoing ? "View Capstone Roadmap" : t.credentials.viewCertificate}
                    </span>
                    <ArrowRight size={14} className={styles.actionArrow} data-rtl-mirror="true" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Full Credential Inspection Modal */}
      {selectedCredential && (
        <div 
          className={styles.modalBackdrop} 
          onClick={() => setSelectedCredential(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cred-title"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedCredential(null)}
              className={styles.closeButton}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className={styles.modalGrid}>
              {/* Left: Certificate Preview or High-Tech HUD */}
              <div className={styles.modalVisual}>
                {selectedCredential.imageFile ? (
                  <div className={styles.modalImageContainer}>
                    <Image
                      src={selectedCredential.imageFile}
                      alt={`${selectedCredential.title} certificate`}
                      width={800}
                      height={600}
                      className={styles.modalCertImage}
                    />
                  </div>
                ) : (
                  <div className={styles.modalHudContainer}>
                    <div className={styles.modalHudCard}>
                      <Sparkles size={36} className={styles.modalHudIcon} />
                      <h4 className={styles.modalHudTitle}>AI & Machine Learning Specialization</h4>
                      <p className={styles.modalHudSubtitle}>
                        Advanced curriculum covering Deep Learning, Transformer Architectures, and Retrieval-Augmented Generation.
                      </p>
                      <div className={styles.modalTimerBox}>
                        <div className={styles.modalTimerRow}>
                          <span className={styles.modalTimerNum}>{String(timeLeft.days).padStart(2, "0")}</span>
                          <span className={styles.modalTimerUnit}>DAYS</span>
                          <span className={styles.modalTimerDivider}>:</span>
                          <span className={styles.modalTimerNum}>{String(timeLeft.hours).padStart(2, "0")}</span>
                          <span className={styles.modalTimerUnit}>HRS</span>
                          <span className={styles.modalTimerDivider}>:</span>
                          <span className={styles.modalTimerNum}>{String(timeLeft.minutes).padStart(2, "0")}</span>
                          <span className={styles.modalTimerUnit}>MIN</span>
                          <span className={styles.modalTimerDivider}>:</span>
                          <span className={styles.modalTimerNum}>{String(timeLeft.seconds).padStart(2, "0")}</span>
                          <span className={styles.modalTimerUnit}>SEC</span>
                        </div>
                        <div className={styles.modalTimerNote}>Live Countdown to Capstone Defense</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Detailed Metadata & Verification Specs */}
              <div className={styles.modalDetails}>
                <div className={styles.modalHeaderGroup}>
                  <div className={styles.modalMetaPills}>
                    <span className={styles.modalCategoryBadge}>
                      {selectedCredential.category}
                    </span>
                    <span className={styles.modalYearBadge}>
                      {selectedCredential.year}
                    </span>
                    <span className={`${styles.modalStatusPill} ${styles[`modalStatus_${selectedCredential.status || "verified"}`]}`}>
                      {selectedCredential.status === "ongoing"
                        ? "In Progress · 20-Day Target"
                        : selectedCredential.status === "accredited"
                        ? "Accredited Program"
                        : "Verified & Issued"}
                    </span>
                  </div>

                  <h3 id="modal-cred-title" className={styles.modalTitle}>
                    {selectedCredential.title}
                  </h3>
                  
                  {selectedCredential.issuer && (
                    <p className={styles.modalIssuer}>{selectedCredential.issuer}</p>
                  )}
                </div>

                {selectedCredential.description && (
                  <p className={styles.modalDescription}>
                    {selectedCredential.description}
                  </p>
                )}

                {/* Verified Skills Breakdown */}
                {selectedCredential.skills && selectedCredential.skills.length > 0 && (
                  <div className={styles.modalSkillsSection}>
                    <h5 className={styles.skillsSectionHeading}>
                      <Layers size={14} />
                      <span>Assessed Competencies & Verification Scope</span>
                    </h5>
                    <div className={styles.modalSkillsGrid}>
                      {selectedCredential.skills.map((skill, i) => (
                        <div key={i} className={styles.modalSkillItem}>
                          <Check size={14} className={styles.skillCheckIcon} />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verification Registry Box */}
                <div className={styles.registryBox}>
                  <div className={styles.registryRow}>
                    <span className={styles.regLabel}>Official Registry Hash:</span>
                    <code className={styles.regVal}>{selectedCredential.credentialCode}</code>
                  </div>
                  <div className={styles.registryRow}>
                    <span className={styles.regLabel}>Issuance / Completion Year:</span>
                    <span className={styles.regVal}>{selectedCredential.year}</span>
                  </div>
                  <div className={styles.registryRow}>
                    <span className={styles.regLabel}>Verification Authority:</span>
                    <span className={styles.regVal}>Institutional Accreditation Record</span>
                  </div>
                </div>

                <div className={styles.modalFooterActions}>
                  {selectedCredential.imageFile && (
                    <a
                      href={selectedCredential.imageFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalPrimaryAction}
                    >
                      <span>Open Full-Resolution Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCredential(null)}
                    className={styles.modalCloseAction}
                  >
                    Close Audit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
