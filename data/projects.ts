import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "superstore-sales-analysis",
    title: "Superstore Sales Analysis",
    subtitle: "Uncovering profit drivers across regions, categories, and customer segments",
    description:
      "A comprehensive end-to-end data analysis of a US retail superstore dataset. From raw CSV to executive-ready Power BI dashboard — identifying what's driving profit, what's dragging it down, and where the business should focus next.",
    coverImage: "/images/projects/superstore/cover.jpg",
    galleryImages: [
      "/images/projects/superstore/gallery-1.jpg",
      "/images/projects/superstore/gallery-2.jpg",
    ],
    githubUrl: "https://github.com/aliefhafid/superstore-analysis",
    liveDemo: "https://app.powerbi.com/view?r=example",
    techStack: ["Python", "Pandas", "Power BI", "Excel", "Seaborn", "Matplotlib"],
    dataset: {
      name: "Sample Superstore",
      source: "Kaggle",
      rows: 9994,
      columns: 21,
      fileFormat: "CSV",
      license: "CC0: Public Domain",
      downloadUrl: "https://www.kaggle.com/datasets/vivek468/superstore-dataset-final",
    },
    businessProblem: [
      "Which product category generates the highest profit margin?",
      "Which US region consistently outperforms others in revenue and profit?",
      "How does applying discounts affect overall profitability?",
      "Which customer segment is the most valuable over time?",
      "Are there any products being sold at a consistent loss?",
    ],
    tablePreview: {
      headers: ["Order ID", "Order Date", "Ship Mode", "Segment", "Region", "Category", "Sub-Category", "Sales", "Quantity", "Discount", "Profit"],
      rows: [
        ["CA-2016-152156", "2016-11-08", "Second Class", "Consumer", "South", "Furniture", "Bookcases", "$261.96", 2, "0.00", "$41.91"],
        ["CA-2016-152156", "2016-11-08", "Second Class", "Consumer", "South", "Furniture", "Chairs", "$731.94", 3, "0.00", "$219.58"],
        ["CA-2016-138688", "2016-06-12", "Second Class", "Corporate", "West", "Office Supplies", "Labels", "$14.62", 2, "0.00", "$6.87"],
        ["US-2015-108966", "2015-10-11", "Standard Class", "Consumer", "South", "Furniture", "Tables", "$957.58", 5, "0.45", "-$383.03"],
        ["US-2015-108966", "2015-10-11", "Standard Class", "Consumer", "South", "Office Supplies", "Storage", "$22.37", 2, "0.20", "$2.52"],
        ["CA-2014-115812", "2014-06-09", "Standard Class", "Consumer", "West", "Furniture", "Furnishings", "$48.86", 7, "0.00", "$14.17"],
        ["CA-2014-115812", "2014-06-09", "Standard Class", "Consumer", "West", "Office Supplies", "Art", "$7.28", 4, "0.00", "$1.97"],
        ["CA-2014-115812", "2014-06-09", "Standard Class", "Consumer", "West", "Technology", "Phones", "$907.15", 6, "0.10", "$90.71"],
        ["CA-2014-115812", "2014-06-09", "Standard Class", "Consumer", "West", "Office Supplies", "Binders", "$18.50", 3, "0.20", "$5.78"],
        ["CA-2014-115812", "2014-06-09", "Standard Class", "Consumer", "West", "Office Supplies", "Appliances", "$114.90", 5, "0.00", "$34.47"],
      ],
    },
    timeline: [
      {
        icon: "Database",
        title: "Data Collection",
        description: "Downloaded the Superstore CSV from Kaggle. Verified row counts, column types, and checked for encoding issues before loading into Python.",
        image: "/images/projects/superstore/timeline-1.jpg",
      },
      {
        icon: "Wrench",
        title: "Data Cleaning",
        description: "Handled missing values, standardized date formats, removed duplicate order IDs, and validated numeric columns using Pandas.",
        image: "/images/projects/superstore/timeline-2.jpg",
      },
      {
        icon: "BarChart2",
        title: "Exploratory Analysis",
        description: "Profiled distributions, computed category-level profit margins, and visualized regional trends with Seaborn heatmaps and box plots.",
        image: "/images/projects/superstore/timeline-3.jpg",
      },
      {
        icon: "Layout",
        title: "Dashboard Build",
        description: "Designed a 3-page Power BI dashboard: Executive Overview, Category Deep-Dive, and Regional Performance. Applied a consistent color system.",
        image: "/images/projects/superstore/timeline-4.jpg",
      },
      {
        icon: "Lightbulb",
        title: "Insight Delivery",
        description: "Translated findings into 5 executive recommendations with supporting visuals, structured as a stakeholder-ready presentation.",
      },
    ],
    dashboardImage: "/images/projects/superstore/dashboard.jpg",
    insights: [
      {
        icon: "TrendingUp",
        title: "Technology Leads Profitability",
        description: "Technology category accounts for 50.8% of total profit despite representing only 36.4% of revenue — the highest margin category by far.",
      },
      {
        icon: "AlertTriangle",
        title: "Furniture Bleeds Margin",
        description: "Furniture averages a -2.5% profit margin. Tables sub-category alone accounts for over $17,000 in cumulative losses.",
      },
      {
        icon: "MapPin",
        title: "West Region Dominates",
        description: "The West generates the highest revenue ($725K) and profit ($108K), driven by California's outsized contribution to both metrics.",
      },
      {
        icon: "Percent",
        title: "Discounts Destroy Profit",
        description: "Orders with discounts above 30% have an average profit margin of -24%. Discount strategy needs a fundamental rethink.",
      },
      {
        icon: "Users",
        title: "Consumer Segment is Core",
        description: "Consumer segment drives 51% of total sales. However, Corporate customers deliver a higher average order value and better margins.",
      },
      {
        icon: "Package",
        title: "Top 10 Products = 18% of Profit",
        description: "Ten SKUs generate 18% of all profit. Inventory and marketing investment is disproportionately spread across low-performing items.",
      },
    ],
    recommendations: [
      {
        title: "Restructure Discount Policy",
        description:
          "Cap maximum discount at 20% across all categories. For Furniture, eliminate discounts entirely until margin recovery is achieved. Implement approval workflows for any order-level exception.",
        icon: "ShieldCheck",
        accentColor: "#3B82F6",
      },
      {
        title: "Double Down on Technology",
        description:
          "Increase marketing spend allocation to Technology by 15–20%. Prioritize phone accessories and copier consumables which show the strongest repeat-purchase patterns.",
        icon: "Zap",
        accentColor: "#8B5CF6",
      },
      {
        title: "Audit Furniture Suppliers",
        description:
          "Renegotiate supplier contracts for Tables and Bookcases. If margin improvement is not achievable within two quarters, consider discontinuing the lowest-performing SKUs.",
        icon: "ClipboardList",
        accentColor: "#F59E0B",
      },
      {
        title: "Expand West Region Playbook",
        description:
          "Document the sales and logistics practices driving West's outperformance. Pilot the same approach in the Central region, which shows similar demographic potential but lags in conversion.",
        icon: "Map",
        accentColor: "#10B981",
      },
    ],
  },

  {
    slug: "hr-attrition-analysis",
    title: "HR Attrition Analysis",
    subtitle: "Predicting and preventing employee turnover with data",
    description:
      "An end-to-end HR analytics project using IBM's HR dataset to identify the key drivers of employee attrition. Built a predictive model and translated findings into actionable retention strategies for People & Culture teams.",
    coverImage: "/images/projects/hr/cover.jpg",
    galleryImages: [],
    githubUrl: "https://github.com/aliefhafid/hr-attrition",
    liveDemo: undefined,
    techStack: ["Python", "Scikit-learn", "Pandas", "Tableau", "Seaborn"],
    dataset: {
      name: "IBM HR Analytics Employee Attrition",
      source: "Kaggle",
      rows: 1470,
      columns: 35,
      fileFormat: "CSV",
      license: "CC0: Public Domain",
      downloadUrl: "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
    },
    businessProblem: [
      "What is the overall attrition rate and how does it vary by department?",
      "Which employee attributes are most predictive of voluntary turnover?",
      "Does compensation level correlate with attrition risk?",
      "Are younger or less-tenured employees more likely to leave?",
      "Can we build a model to flag high-risk employees before they resign?",
    ],
    tablePreview: {
      headers: ["Age", "Department", "Job Role", "Monthly Income", "Years at Company", "Overtime", "Job Satisfaction", "Attrition"],
      rows: [
        [41, "Sales", "Sales Executive", "$5,993", 6, "Yes", 4, "Yes"],
        [49, "R&D", "Research Scientist", "$5,130", 10, "No", 2, "No"],
        [37, "R&D", "Laboratory Technician", "$2,090", 7, "Yes", 3, "Yes"],
        [33, "R&D", "Research Scientist", "$2,909", 8, "Yes", 4, "No"],
        [27, "R&D", "Laboratory Technician", "$3,468", 2, "No", 1, "No"],
        [32, "R&D", "Laboratory Technician", "$3,068", 7, "No", 4, "No"],
        [59, "R&D", "Lab Technician", "$2,670", 1, "Yes", 3, "Yes"],
        [30, "Sales", "Sales Executive", "$2,693", 1, "No", 4, "No"],
        [38, "R&D", "Senior Scientist", "$9,526", 9, "No", 3, "No"],
        [36, "Sales", "Sales Executive", "$8,827", 7, "Yes", 3, "No"],
      ],
    },
    timeline: [
      {
        icon: "Database",
        title: "Data Collection",
        description: "Sourced IBM HR dataset from Kaggle. Reviewed all 35 features and identified target variable (Attrition) and potential predictors.",
      },
      {
        icon: "Wrench",
        title: "Data Cleaning",
        description: "Encoded categorical variables, handled class imbalance with SMOTE, and scaled numeric features for ML readiness.",
      },
      {
        icon: "BarChart2",
        title: "EDA",
        description: "Built correlation heatmaps, analyzed attrition rate by department and job role, and visualized income distribution by attrition status.",
      },
      {
        icon: "Brain",
        title: "Modeling",
        description: "Trained Random Forest and Logistic Regression classifiers. Evaluated with ROC-AUC, precision-recall, and confusion matrix.",
      },
      {
        icon: "Lightbulb",
        title: "Recommendations",
        description: "Translated model feature importance into a prioritized retention action plan for HR leadership.",
      },
    ],
    dashboardImage: "/images/projects/hr/dashboard.jpg",
    insights: [
      {
        icon: "TrendingUp",
        title: "16.1% Attrition Rate",
        description: "Overall attrition stands at 16.1%, well above industry benchmarks of 10–12% for knowledge-work sectors.",
      },
      {
        icon: "AlertTriangle",
        title: "Overtime is the #1 Predictor",
        description: "Employees working overtime are 3.2x more likely to leave. It's the single most predictive feature in the Random Forest model.",
      },
      {
        icon: "DollarSign",
        title: "Income Below $3K is High Risk",
        description: "Employees earning less than $3,000/month show a 31% attrition rate compared to 8% for those earning above $7,000.",
      },
      {
        icon: "Clock",
        title: "First 2 Years are Critical",
        description: "Employees with under 2 years tenure account for 40% of all attrition despite being only 22% of headcount.",
      },
    ],
    recommendations: [
      {
        title: "Address Overtime Immediately",
        description:
          "Audit teams with >30% of staff on consistent overtime. Hire to capacity or redistribute workload. Consider overtime as a leading indicator in monthly HR dashboards.",
        icon: "Clock",
        accentColor: "#EF4444",
      },
      {
        title: "Revise Entry-Level Compensation",
        description:
          "Benchmark roles paying under $3,000/month against market data. A 10–15% salary increase for bottom quartile earners is likely cheaper than replacing them.",
        icon: "DollarSign",
        accentColor: "#10B981",
      },
      {
        title: "Build a 90-Day Onboarding Program",
        description:
          "Create structured mentorship and check-in cycles for all new hires. Track satisfaction scores at 30, 60, and 90 days. The first year is when you lose the most people.",
        icon: "Users",
        accentColor: "#3B82F6",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
