"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  Youtube,
  Instagram,
  Facebook,
  Loader2,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Contact.module.css";

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("role");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentInfo, setSentInfo] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const subjectTitle =
      t.contact.subjectOptions[subject as keyof typeof t.contact.subjectOptions] ||
      subject;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subjectTitle,
          message: message.trim(),
          _gotcha: honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSentInfo({ name: name.trim(), email: email.trim() });
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "Unable to deliver message right now. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection error. You can also contact me directly via email."
      );
    }
  };

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Direct Info & Availability */}
          <div className={styles.infoSide}>
            <div>
              <div className={styles.eyebrowGroup}>
                <span className={styles.eyebrowDash} />
                <span className={styles.eyebrow}>{t.contact.badge}</span>
              </div>

              <h2 id="contact-heading" className={styles.title}>
                {t.contact.title}
              </h2>

              <p className={styles.subtitle}>
                {t.contact.subtitle}
              </p>
            </div>

            <div className={styles.detailsList}>
              <div className={styles.primaryDetails}>
                <a
                  href="mailto:matthewgana95@gmail.com"
                  className={styles.detailCard}
                  aria-label={t.contact.directEmail}
                >
                  <div className={styles.detailIcon}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.detailInfo}>
                    <span className={styles.detailLabel}>{t.contact.directEmail}</span>
                    <span className={styles.detailValue}>matthewgana95@gmail.com</span>
                  </div>
                </a>

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.detailInfo}>
                    <span className={styles.detailLabel}>{t.contact.location}</span>
                    <span className={styles.detailValue}>{t.contact.locationValue}</span>
                  </div>
                </div>
              </div>

              {/* Professional & Social Channels */}
              <div className={styles.socialGroup}>
                <span className={styles.socialGroupTitle}>Connect & Follow</span>
                <div className={styles.socialPillsGrid}>
                  <a
                    href="https://www.linkedin.com/in/matthewsgana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialPill}
                    aria-label={t.nav.linkedin}
                  >
                    <span className={styles.socialIconWrap}><Linkedin size={17} /></span>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/matthewgana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialPill}
                    aria-label={t.nav.github}
                  >
                    <span className={styles.socialIconWrap}><Github size={17} /></span>
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@LearnWithMatthewGana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialPill}
                    aria-label="YouTube: Learn With Matthew Gana"
                  >
                    <span className={styles.socialIconWrap}><Youtube size={17} /></span>
                    <span>YouTube</span>
                  </a>

                  <a
                    href="https://www.instagram.com/learnwithmatthewgana?igsh=MTZndGNrYndrM3U0Nw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialPill}
                    aria-label="Instagram: @learnwithmatthewgana"
                  >
                    <span className={styles.socialIconWrap}><Instagram size={17} /></span>
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/share/1BxAFDC66L/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialPill}
                    aria-label="Facebook: Matthew Gana"
                  >
                    <span className={styles.socialIconWrap}><Facebook size={17} /></span>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success Confirmation */}
          {status === "success" ? (
            <div className={styles.successCard} role="status" aria-live="polite">
              <div className={styles.successIconWrap}>
                <CheckCircle2 size={36} />
              </div>

              <h3 className={styles.successTitle}>Message Delivered!</h3>

              <p className={styles.successDesc}>
                Thank you, <strong>{sentInfo.name || "there"}</strong>! Your inquiry was sent directly to my inbox at{" "}
                <span style={{ color: "var(--accent-primary)", fontWeight: 700 }}>
                  matthewgana95@gmail.com
                </span>
                . I will review it and reply back to <strong>{sentInfo.email}</strong> shortly.
              </p>

              <button
                type="button"
                className={styles.resetButton}
                onClick={() => setStatus("idle")}
              >
                <RotateCcw size={16} />
                <span>Send another message</span>
              </button>
            </div>
          ) : (
            <form className={styles.formCard} onSubmit={handleSubmit} noValidate={false}>
              {/* Hidden Honeypot Anti-Spam Field */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="contact-gotcha">Do not fill this field</label>
                <input
                  id="contact-gotcha"
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {status === "error" && (
                <div className={styles.errorAlert} role="alert">
                  <AlertCircle size={18} className={styles.errorIcon} />
                  <div>
                    <span>{errorMessage}</span>
                    <a
                      href="mailto:matthewgana95@gmail.com"
                      className={styles.fallbackMailLink}
                    >
                      Email directly instead
                    </a>
                  </div>
                </div>
              )}

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="contact-name" className={styles.label}>
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    disabled={status === "submitting"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="contact-email" className={styles.label}>
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    disabled={status === "submitting"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="contact-subject" className={styles.label}>
                  {t.contact.subjectLabel}
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  disabled={status === "submitting"}
                  onChange={(e) => setSubject(e.target.value)}
                  className={styles.select}
                >
                  <option value="role">{t.contact.subjectOptions.role}</option>
                  <option value="project">{t.contact.subjectOptions.project}</option>
                  <option value="collaboration">{t.contact.subjectOptions.collaboration}</option>
                  <option value="other">{t.contact.subjectOptions.other}</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  disabled={status === "submitting"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={17} className={styles.spinner} />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.sendButton}</span>
                    <Send size={16} data-rtl-mirror="true" />
                  </>
                )}
              </button>

              <p className={styles.formNotice}>
                Messages are delivered directly to matthewgana95@gmail.com with instant in-page confirmation.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
