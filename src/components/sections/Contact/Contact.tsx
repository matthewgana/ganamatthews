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
    const subjectMap: Record<string, string> = {
      role: "Engineering Opportunity / Hiring Inquiry",
      project: "Software Project Inquiry",
      collaboration: "Technical Collaboration",
      other: "General Engineering Inquiry"
    };

    const mailSubject = encodeURIComponent(
      `[Portfolio Contact] ${subjectMap[subject] || "Inquiry"} from ${name}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${subjectMap[subject]}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:matthewgana.dev@gmail.com?subject=${mailSubject}&body=${mailBody}`;
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
              <a
                href="mailto:matthewgana.dev@gmail.com"
                className={styles.detailRow}
                aria-label="Send direct email"
              >
                <div className={styles.detailIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.detailText}>matthewgana.dev@gmail.com</div>
              </a>

              <div className={styles.detailRow}>
                <div className={styles.detailIcon}>
                  <MapPin size={20} />
                </div>
                <div className={styles.detailText}>Nigeria (Remote / Global)</div>
              </div>

              <a
                href="https://github.com/matthewgana"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailRow}
                aria-label="GitHub profile"
              >
                <div className={styles.detailIcon}>
                  <Github size={20} />
                </div>
                <div className={styles.detailText}>github.com/matthewgana</div>
              </a>

              <a
                href="https://www.linkedin.com/in/matthewsgana"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailRow}
                aria-label="LinkedIn profile"
              >
                <div className={styles.detailIcon}>
                  <Linkedin size={20} />
                </div>
                <div className={styles.detailText}>linkedin.com/in/matthewsgana</div>
              </a>

              <a
                href="https://www.youtube.com/@LearnWithMatthewGana"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailRow}
                aria-label="YouTube channel"
              >
                <div className={styles.detailIcon}>
                  <Youtube size={20} />
                </div>
                <div className={styles.detailText}>youtube.com/@LearnWithMatthewGana</div>
              </a>

              <a
                href="https://www.instagram.com/learnwithmatthewgana?igsh=MTZndGNrYndrM3U0Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailRow}
                aria-label="Instagram profile"
              >
                <div className={styles.detailIcon}>
                  <Instagram size={20} />
                </div>
                <div className={styles.detailText}>instagram.com/learnwithmatthewgana</div>
              </a>

              <a
                href="https://www.facebook.com/share/1BxAFDC66L/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailRow}
                aria-label="Facebook profile"
              >
                <div className={styles.detailIcon}>
                  <Facebook size={20} />
                </div>
                <div className={styles.detailText}>facebook.com/share/1BxAFDC66L</div>
              </a>
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
                  placeholder="Ada Lovelace"
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
                  placeholder="ada@domain.com"
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
                placeholder="Describe your engineering requirements or opportunity..."
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>{t.contact.sendButton}</span>
              <Send size={16} />
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
