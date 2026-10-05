import { AIProject } from "@/types";

export const AI_PROJECTS: AIProject[] = [
  {
    id: "flood-risk",
    title: "AI-Powered Flood Risk Prediction & Geospatial Intelligence System",
    shortTitle: "Flood Risk Intelligence",
    domain: "Climate Resilience + GIS + AI/ML",
    domainTags: ["Climate Resilience", "GIS", "AI/ML"],
    capabilities: ["Geospatial ML", "Classification", "Risk Prediction"],
    status: "AI/ML Prototype",
    description:
      "Geospatial machine learning system designed to classify and predict flood risk zones using environmental and geographical feature sets, supporting climate resilience planning and early-warning infrastructure.",
    evidence: [
      "Geospatial feature extraction and preprocessing pipeline",
      "Classification model for risk zone identification",
      "Risk scoring and prediction output layer"
    ]
  },
  {
    id: "academic-performance",
    title: "Student Academic Performance Prediction & Early-Warning System",
    shortTitle: "Academic Early Warning",
    domain: "Education + AI/ML",
    domainTags: ["Education", "AI/ML"],
    capabilities: ["Predictive Modelling", "Classification", "Early Warning"],
    status: "AI/ML Prototype",
    description:
      "Predictive modelling system that analyses student performance indicators to surface early warning signals, enabling timely educator intervention before academic outcomes deteriorate.",
    evidence: [
      "Feature engineering from academic indicator datasets",
      "Classification and regression models for performance prediction",
      "Early-warning threshold logic and output interpretation"
    ]
  },
  {
    id: "fish-farm",
    title: "AI-Powered Fish Farm Monitoring & Anomaly Detection System",
    shortTitle: "Aquaculture Monitoring",
    domain: "Aquaculture + Computer Vision + AI",
    domainTags: ["Aquaculture", "Computer Vision", "AI"],
    capabilities: [
      "Computer Vision",
      "Object Tracking",
      "Anomaly Detection",
      "Sensor Intelligence"
    ],
    status: "Research Prototype",
    description:
      "Computer vision and sensor-driven monitoring system for aquaculture environments. Designed to track fish populations, detect behavioural anomalies, and surface environmental deviations that may indicate health or operational risk.",
    evidence: [
      "Computer vision pipeline for fish detection and tracking",
      "Anomaly detection logic over environmental sensor readings",
      "Alerting and event detection layer"
    ]
  },
  {
    id: "crop-yield",
    title: "Enterprise Crop Yield Intelligence & Prediction System",
    shortTitle: "Crop Yield Intelligence",
    domain: "Agriculture + AI/ML",
    domainTags: ["Agriculture", "AI/ML"],
    capabilities: ["Regression", "Agricultural Intelligence", "Predictive Modelling"],
    status: "Applied ML Project",
    description:
      "Regression-based crop yield prediction system for agricultural intelligence. Analyses environmental, agronomic, and historical production data to generate yield estimates supporting supply chain and risk planning decisions.",
    evidence: [
      "Agricultural dataset preprocessing and feature engineering",
      "Regression modelling for yield estimation",
      "Prediction output and interpretation layer"
    ]
  },
  {
    id: "career-skills",
    title: "AI-Powered Career & Skills Gap Intelligence System",
    shortTitle: "Career & Skills Intelligence",
    domain: "Education + Employment + NLP + AI",
    domainTags: ["Education", "Employment", "NLP", "AI"],
    capabilities: [
      "NLP",
      "Embeddings",
      "Semantic Similarity",
      "Information Extraction",
      "Recommendation"
    ],
    status: "Research Prototype",
    description:
      "NLP and embedding-based system for career intelligence and skills gap analysis. Uses semantic similarity and information extraction to map candidate profiles against role requirements, surfacing targeted upskilling recommendations.",
    evidence: [
      "Text preprocessing and NLP pipeline",
      "Embedding generation and semantic similarity scoring",
      "Skills gap extraction and recommendation logic"
    ]
  },
  {
    id: "home-presence",
    title: "AI-Powered Home Presence, Occupancy & Intrusion Intelligence System",
    shortTitle: "Home Presence Intelligence",
    domain: "Computer Vision + AI + Smart Homes / Security",
    domainTags: ["Computer Vision", "AI", "Security"],
    capabilities: [
      "Person Detection",
      "Object Tracking",
      "Zone Detection",
      "Temporal Event Detection",
      "Security Intelligence"
    ],
    status: "Research Prototype",
    description:
      "Computer vision system for smart home presence detection, occupancy inference, and intrusion monitoring. Applies person detection, object tracking, and zone-based event logic to build a temporal intelligence layer for residential security.",
    evidence: [
      "Person detection and tracking pipeline",
      "Zone definition and occupancy logic",
      "Temporal event detection and alert generation"
    ]
  }
];

export const AI_CAPSTONE_ID = "academic-performance";

export const AI_CAPABILITIES_TAXONOMY = [
  "Predictive Modelling",
  "Classification",
  "Regression",
  "Computer Vision",
  "Object Detection",
  "Object Tracking",
  "Anomaly Detection",
  "NLP",
  "Embeddings",
  "Semantic Similarity",
  "Information Extraction",
  "Recommendation",
  "Geospatial ML",
  "Risk Prediction",
  "Early Warning",
  "Decision Support"
] as const;

export const AI_WORKFLOW_STAGES = [
  { id: "data", label: "Real Data", phase: "input" },
  { id: "validation", label: "Data Validation", phase: "preparation" },
  { id: "eda", label: "EDA", phase: "preparation" },
  { id: "feature-eng", label: "Feature Engineering", phase: "preparation" },
  { id: "baseline", label: "Baseline Model", phase: "modelling" },
  { id: "model", label: "AI / ML Model", phase: "modelling" },
  { id: "evaluation", label: "Evaluation", phase: "modelling" },
  { id: "error-analysis", label: "Error Analysis", phase: "modelling" },
  { id: "inference", label: "Real Inference", phase: "deployment" },
  { id: "pipeline", label: "Production Pipeline", phase: "deployment" },
  { id: "integration", label: "Integration", phase: "deployment" },
  { id: "monitoring", label: "Monitoring", phase: "deployment" },
  { id: "retraining", label: "Retraining", phase: "iteration" },
  { id: "documentation", label: "Documentation", phase: "iteration" }
] as const;
