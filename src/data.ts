/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, Certificate } from './types';

export const PERSONAL_DETAILS = {
  name: "Mayank Kumar",
  title: "AI/ML Engineer & Data Analyst",
  location: "Hisar, Haryana, India",
  email: "mayankjaint48@gmail.com",
  phone: "+91 9466909442",
  github: "https://github.com/MayankJaint",
  linkedin: "https://www.linkedin.com/in/mayankkumariitg/",
  resume: "https://drive.google.com/file/d/1NGlXkYUuWk8O3buYMVEHB8YtHJ9-6JOX/view?usp=sharing",
  bio: "AI/ML Engineer and Data Analyst with a rigorous foundation in machine learning models, predictive analytics, NLP applications, interactive dashboards, and statistical analysis using Python, SQL, Pandas, Scikit-learn, TensorFlow, and Streamlit. Skilled in feature engineering, data cleaning, EDA, and visualization. Passionate about solving real-world business problems through data-driven insight, rapid prototyping, and collaborative hackathons.",
  shortBio: "I'm Mayank — an aspiring AI/ML engineer and analyst designing intelligent models, structured data pipelines, and highly visual analytic surfaces with precision, clarity, and mathematical rigor."
};

export const PROJECTS: Project[] = [
  {
    id: "amazon-dashboard",
    num: "01",
    title: "Amazon E-Commerce Analytics",
    subtitle: "Interactive Plotly Dashboard & NLP Analysis",
    category: "Data Visualization & NLP",
    year: "2025",
    technologies: ["Python", "Streamlit", "Plotly", "NLP Tokenizers", "Pandas"],
    description: "An advanced interactive analytics platform that goes far beyond standard static data visualization. Coupling multi-dimensional 4D scatter plots and hierarchical treemaps with natural language sentiment classifiers, this solution processes a massive Amazon India dataset to expose exact customer sentiment drivers, pricing elasticities, and category monopolies.",
    githubUrl: "https://github.com/MayankJaint/Amazon-Sales-",
    liveUrl: "https://mayank-kumar-amazon.streamlit.app/",
    imageSeed: "dashboard",
    metrics: [
      { label: "Interactive Visuals", value: "4D Curves" },
      { label: "NLP Precision", value: "92%" },
      { label: "Live Dashboard", value: "Active" }
    ],
    extendedDetails: [
      "Built and deployed a fully reactive Streamlit application housing real-time multi-dimensional Plotly diagrams and category violin-box hybrids.",
      "Implemented an NLP-based review analyzer to map customer feedback sentiment and extract key phrases driving sales performance.",
      "Derived mathematical models for optimal pricing tiers, isolating high-volume discount thresholds, revenue traps, and premium zones.",
      "Constructed interactive hierarchical treemaps revealing sector dominance and brand monopolies across major product categories."
    ]
  },
  {
    id: "netflix-eda",
    num: "02",
    title: "Netflix Content Strategy EDA",
    subtitle: "Global Catalog Analysis & Feature Engineering",
    category: "Exploratory Data Analysis",
    year: "2025",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    description: "A complete high-fidelity Exploratory Data Analysis (EDA) of Netflix's comprehensive global catalog (up to Year 2020) containing over 8,800 titles. This project focuses on analyzing content strategy, the executive paradigm shift from feature films to episodic TV shows, global production distributions, target audiences, and deep statistical features to reveal the mechanics of viewer habits and platform catalog trends.",
    githubUrl: "https://github.com/MayankJaint/Netflix-Exploratory-Data-Analysis",
    imageSeed: "netflix",
    metrics: [
      { label: "Cleaned Titles", value: "8,800+" },
      { label: "Null Reduction", value: "40%+" },
      { label: "TV Show Surge", value: "3x Ratio" }
    ],
    extendedDetails: [
      "Engineered text-based features using list explosion on nested production categories to uncover granular content themes and bypass skewed data issues.",
      "Constructed highly specific correlation heatmaps and bivariate pairplots to isolate content distribution patterns across global producer hubs.",
      "Investigated the TV show cancellation rate, mapping season-over-season dropoffs to expose the 'Cancellation Curse' and project strategic production lifespans.",
      "Discovered that TV show additions surged nearly 3x in relation to historical feature film additions during the executive pivot."
    ]
  },
  {
    id: "olist-eda",
    num: "03",
    title: "Olist E-Commerce Order EDA",
    subtitle: "Time-Series Data Engineering & Sales Patterns",
    category: "Business Intelligence & SQL",
    year: "2025",
    technologies: ["Python", "SQL", "Pandas", "Matplotlib", "ETL Pipelines"],
    description: "Analytical data-engineering and exploratory processing of Olist's massive Brazilian e-commerce dataset. By joining 9 relational database layers and designing a robust ETL pipeline, this project uncovers hidden consumer purchasing behaviors, seasonal order surges, localized delivery delays, and critical feature engineering ready for machine learning optimization.",
    githubUrl: "https://github.com/MayankJaint/Olist_Ecommerce_Order_data_EDA",
    imageSeed: "ecommerce",
    metrics: [
      { label: "Relational Tables", value: "9 Joined" },
      { label: "Cleaned Database", value: "100k+" },
      { label: "Holiday Order Spike", value: "28%" }
    ],
    extendedDetails: [
      "Designed and optimized a multi-stage ETL pipeline merging nine distinct relational database layers covering customers, sellers, products, geolocation, and reviews.",
      "Resolved 15%+ missing data via advanced statistical imputation and outlier removal methods to stabilize features and prevent target leaks.",
      "Geographically mapped customer distribution and localized delivery delays to streamline shipping workflows and boost buyer satisfaction.",
      "Isolated macro-level time-series trends, calculating a 28% purchase surge around key holidays to optimize inventory forecasting."
    ]
  }
];

export const ALL_INDEX_PROJECTS = [
  {
    year: "2026",
    title: "HACKDATA Sneaker Recommendation Engine",
    client: "Shiv Nadar University",
    discipline: "Machine Learning"
  },
  {
    year: "2025",
    title: "Amazon E-Commerce Analytics Dashboard",
    client: "Personal Project",
    discipline: "Visualization & NLP"
  },
  {
    year: "2025",
    title: "Olist E-Commerce Sales Pattern Analysis",
    client: "Brazilian Retail Case",
    discipline: "SQL & Data Pipeling"
  },
  {
    year: "2025",
    title: "Netflix Global Catalog Trends Study",
    client: "Streaming Content Research",
    discipline: "Exploratory Data Analysis"
  },
  {
    year: "2024",
    title: "Demand Forecasting & Supply Optimization",
    client: "Academic Case Study",
    discipline: "Time-Series Forecasting"
  },
  {
    year: "2024",
    title: "Convolutional Neural Net Image Tagger",
    client: "Computer Vision Deep Dive",
    discipline: "Deep Learning"
  },
  {
    year: "2023",
    title: "Customer Retention & Churn Classification",
    client: "SaaS Modeling Client",
    discipline: "Predictive Modeling"
  },
  {
    year: "2021",
    title: "Automated Data Scraper and Reporter",
    client: "Web Automation Suite",
    discipline: "ETL & Scripting"
  }
];

export const SERVICES: Service[] = [
  {
    id: "ml-predictive",
    num: "01",
    title: "Machine Learning & Predictive Modeling",
    duration: "4–6 weeks",
    description: "Architecting statistical and predictive engines from historical datasets. From clustering customer groups to forecasting future demand curves with high statistical accuracy.",
    deliverables: [
      "Feature engineering & selection report",
      "Model optimization & cross-validation metrics",
      "Scikit-Learn/TensorFlow ready pipeline code",
      "Model export files & integration instructions"
    ]
  },
  {
    id: "data-vis",
    num: "02",
    title: "Interactive Visualization & Dashboards",
    duration: "2–4 weeks",
    description: "Turning raw, multi-layered data arrays into interactive dashboards that decision-makers can actually use. Built with reactive Streamlit web app interfaces and fluid 3D/4D Plotly charts.",
    deliverables: [
      "Custom multi-page reactive Streamlit dashboard",
      "Dynamic interactive Plotly charts with custom themes",
      "Embedded sentiment analysis / processing cards",
      "Cloud deployment (Streamlit Community Cloud/AWS)"
    ]
  },
  {
    id: "data-engineering",
    num: "03",
    title: "Data Pipelines & Cleaning Systems",
    duration: "3–5 weeks",
    description: "Designing end-to-end pipelines that extract, transform, and load data from disjointed silos (SQL, APIs, nested JSON, CSVs) into robust, clean formats ready for analytics models.",
    deliverables: [
      "Multi-source pipeline merging databases",
      "Outlier detection, null reduction, & text explosion scripts",
      "Automated database connectors (SQL & NoSQL)",
      "Cron-ready script execution pipelines"
    ]
  },
  {
    id: "nlp-sentiment",
    num: "04",
    title: "Natural Language Processing Solutions",
    duration: "4–8 weeks",
    description: "Deriving mathematical semantic meanings from text-heavy sources. Excellent for reviewing consumer feedback, analyzing pricing trends, identifying discount zones, and classifying customer intent.",
    deliverables: [
      "Sentiment scoring models (Transformers, RNNs, or NLTK)",
      "Topic modeling and category distribution charts",
      "Entity extraction and tagging pipelines",
      "Live API endpoints for real-time text analysis"
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "iit-guwahati",
    title: "Certification in AI and Machine Learning",
    issuer: "IIT Guwahati x NSDC x Masai School",
    year: "Ongoing",
    category: "certification",
    credentialUrl: "https://drive.google.com/file/d/1CPZTPb9AuGv1QW-uQLcamFQ7JTpRjdJb/view",
    skillsVerified: ["Python", "Supervised Learning", "Deep Learning (CNN, RNN, LSTM)", "Feature Engineering", "Data Modeling"]
  },
  {
    id: "devcation-2026",
    title: "Devcation Delhi 2026 Certificate",
    issuer: "GDG on Campus, IGDTUW x IIT Delhi",
    year: "2026",
    category: "achievement",
    credentialUrl: "https://drive.google.com/file/d/1Hl4Z5eNZQi8HDRDxXF3IMasLEQ96dDXK/view",
    skillsVerified: ["Rapid Prototyping", "Google Cloud Technologies", "Collaborative Engineering"]
  },
  {
    id: "hackdata-2026",
    title: "Hackadata 2026 Certificate",
    issuer: "Shiv Nadar University",
    year: "2026",
    category: "hackathon",
    credentialUrl: "https://drive.google.com/file/d/1FbuOM4-kJIqxaN7FUkM9W1_8RJModU-4/view",
    skillsVerified: ["Data Analytics", "Recommendation Engine", "Streamlit Dashboard", "Time-critical engineering"]
  },
  {
    id: "google-ambassador",
    title: "Google Student Ambassador Program Certificate",
    issuer: "Google (Pitch Night Edition)",
    year: "2026",
    category: "achievement",
    credentialUrl: "https://drive.google.com/file/d/1GezRhDtOER4O57PBC3SdUKbZ0E7VXtGI/view",
    skillsVerified: ["Visual Storytelling", "Strategic Presentation", "Creative Technology Solutions", "Problem Solving"]
  }
];

export const EDUCATION = [
  {
    title: "Certification in AI and Machine Learning",
    institution: "Daksh Gurukul, IIT Guwahati x Masai School",
    status: "Ongoing",
    description: "Rigorous specialization in machine learning models, statistical distributions, deep learning, NLP, and advanced computer vision."
  },
  {
    title: "Bachelor of Science (Physics, Chemistry, Mathematics)",
    institution: "FGM Government College",
    status: "Ongoing",
    description: "Solid foundational background in vector calculus, statistical thermodynamics, probability, mathematical physics, and analytical geometry."
  },
  {
    title: "Stenographer and Secretarial Assistant",
    institution: "ITI Haryana",
    status: "85% | 2020–2021",
    description: "ITI Trade Certification specializing in high-speed dictation transcription, structural business communication, and organizational systems."
  }
];

export const TECHNICAL_SKILLS = [
  { category: "Programming", items: ["Python", "SQL", "Bash", "Git"] },
  { category: "Machine Learning", items: ["Regression", "Classification", "Clustering", "Time-Series Forecasting", "Recommendation Systems", "Model Evaluation", "Cross-Validation", "Hyperparameter Tuning"] },
  { category: "Deep Learning", items: ["CNN", "RNN", "LSTM", "Transfer Learning"] },
  { category: "Data Engineering", items: ["ETL Pipelines", "Data Cleaning", "Data Wrangling", "Data Imputation", "List Explosion"] },
  { category: "Tools", items: ["Power BI", "Git/GitHub", "Jupyter Notebook", "AWS (Basics)", "Pandas", "NumPy", "Seaborn", "Plotly", "Streamlit"] }
];
