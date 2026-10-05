"use client";

import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send, Youtube, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Contact.module.css";

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("role");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectTitle = t.contact.subjectOptions[subject as keyof typeof t.contact.subjectOptions] || subject;

    const mailSubject = encodeURIComponent(
      `[Portfolio Contact] ${subjectTitle} from ${name}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${subjectTitle}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:matthewgana95@gmail.com?subject=${mailSubject}&body=${mailBody}`;
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

          {/* Right Column: Interactive Form */}
          <form className={styles.formCard} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  {t.contact.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>{t.contact.sendButton}</span>
              <Send size={16} data-rtl-mirror="true" />
            </button>

            <p className={styles.formNotice}>
              {t.contact.mailtoNotice}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
