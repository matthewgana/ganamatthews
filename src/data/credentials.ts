import { Credential } from "@/types";

// Target date: 20 days from current date (2026-10-04) -> 2026-10-24T23:59:59Z
export const AI_ML_TARGET_DATE = "2026-10-24T23:59:59Z";

export const CREDENTIALS: Credential[] = [
  {
    id: "cybersecurity",
    category: "Cybersecurity",
    title: "Cybersecurity Certification",
    issuer: "Information Security & Defense Specialization",
    year: "2025",
    status: "verified",
    statusBadge: "Verified · 2025",
    credentialCode: "REG-SEC-2025-089",
    skills: ["Threat Modeling", "Zero Trust Architecture", "SIEM & Network Defense", "Vulnerability Auditing"],
    imageFile: "/certificates/cybersecurity.png",
    description: "Rigorous certification in defensive cybersecurity operations, system hardening, protocol forensics, cryptosystems, and regulatory compliance standards."
  },
  {
    id: "data-analytics",
    category: "Data Analytics",
    title: "Data Analytics Certification",
    issuer: "Data Science & Advanced Analytics Specialization",
    year: "2025",
    status: "verified",
    statusBadge: "Verified · 2025",
    credentialCode: "REG-DA-2025-142",
    skills: ["Statistical Modeling", "Predictive Analytics", "SQL Data Pipelines", "Executive Dashboards"],
    imageFile: "/certificates/data-analytics.jpg",
    description: "Advanced accreditation in statistical data analysis, hypothesis testing, predictive analytics modeling, and relational data pipeline engineering."
  },
  {
    id: "backend-dev",
    category: "Backend Development",
    title: "Backend Development Certification",
    issuer: "Cloud Architecture & Distributed Systems",
    year: "2026",
    status: "accredited",
    statusBadge: "Accredited · 2026",
    credentialCode: "REG-BED-2026-031",
    skills: ["Distributed Systems", "Microservices & gRPC", "PostgreSQL & Redis", "High-Concurrency Scalability"],
    imageFile: "/certificates/backenddev.jpg",
    description: "Enterprise curriculum centered on distributed systems architecture, resilient microservices, high-throughput asynchronous concurrency, and database clustering."
  },
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    title: "AI & Machine Learning Certification",
    issuer: "Deep Neural Systems & Applied Machine Learning",
    year: "2026 (Ongoing)",
    status: "ongoing",
    statusBadge: "Ongoing · 20-Day Sprint",
    credentialCode: "REG-AIML-SPEC-2026",
    targetDate: AI_ML_TARGET_DATE,
    progressPercent: 88,
    skills: ["PyTorch & Transformers", "LLM Fine-Tuning & RAG", "Deep Neural Networks", "Model Quantization & MLOps"],
    description: "Active high-intensity specialization track covering neural network architectures, transformer models, retrieval-augmented generation (RAG), and production MLOps."
  }
];
