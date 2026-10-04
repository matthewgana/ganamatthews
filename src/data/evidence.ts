import { MetricItem } from "@/types";

export const EVIDENCE_METRICS: MetricItem[] = [
  {
    id: "products",
    value: "11",
    numericTarget: 11,
    label: "Products",
    detail: "Distinct software systems designed, modelled, and implemented across diverse domains.",
    category: "architecture"
  },
  {
    id: "industries",
    value: "8+",
    numericTarget: 8,
    label: "Industries",
    detail: "Spanning AgriTech, FinTech, HealthTech, Hospitality, EdTech, GovTech, RestaurantTech, and PropTech.",
    category: "industry"
  },
  {
    id: "nestjs",
    value: "10/11",
    label: "NestJS",
    detail: "Enterprise-grade TypeScript backend framework with IoC and domain modules.",
    category: "technology"
  },
  {
    id: "postgresql",
    value: "10/11",
    label: "PostgreSQL",
    detail: "Relational persistence, ACID compliance, and schema-level domain separation.",
    category: "technology"
  },
  {
    id: "nextjs",
    value: "10/11",
    label: "Next.js/React",
    detail: "Modern server and client-side web rendering pipelines for responsive dashboards.",
    category: "technology"
  },
  {
    id: "reactnative",
    value: "7/11",
    label: "React Native",
    detail: "Cross-platform mobile applications with offline queueing and synchronization.",
    category: "technology"
  },
  {
    id: "redis",
    value: "5/11",
    label: "Redis",
    detail: "High-performance distributed caching, rate-limiting, and task queues (BullMQ).",
    category: "technology"
  },
  {
    id: "fastapi",
    value: "3/11",
    label: "FastAPI (AI)",
    detail: "Dedicated Python microservices for prediction models, BKT, and LLM integrations.",
    category: "technology"
  }
];
