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
      ],
    },
    timeline: [
      {
        icon: "Database",
        title: "Data Collection",
        description: "Downloaded the Superstore CSV from Kaggle. Verified row counts, column types, and checked for encoding issues before loading into Python.",
      },
      {
        icon: "Wrench",
        title: "Data Cleaning",
        description: "Handled missing values, standardized date formats, removed duplicate order IDs, and validated numeric columns using Pandas.",
      },
      {
        icon: "BarChart2",
        title: "Exploratory Analysis",
        description: "Profiled distributions, computed category-level profit margins, and visualized regional trends with Seaborn heatmaps and box plots.",
      },
      {
        icon: "Layout",
        title: "Dashboard Build",
        description: "Designed a 3-page Power BI dashboard: Executive Overview, Category Deep-Dive, and Regional Performance.",
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
        description: "The West generates the highest revenue ($725K) and profit ($108K), driven by California's outsized contribution.",
      },
      {
        icon: "Percent",
        title: "Discounts Destroy Profit",
        description: "Orders with discounts above 30% have an average profit margin of -24%. Discount strategy needs a fundamental rethink.",
      },
      {
        icon: "Users",
        title: "Consumer Segment is Core",
        description: "Consumer segment drives 51% of total sales. However, Corporate customers deliver higher average order value and better margins.",
      },
      {
        icon: "Package",
        title: "Top 10 Products = 18% of Profit",
        description: "Ten SKUs generate 18% of all profit. Investment is disproportionately spread across low-performing items.",
      },
    ],
    recommendations: [
      {
        title: "Restructure Discount Policy",
        description: "Cap maximum discount at 20% across all categories. For Furniture, eliminate discounts entirely until margin recovery is achieved.",
        icon: "ShieldCheck",
        accentColor: "#f97316",
      },
      {
        title: "Double Down on Technology",
        description: "Increase marketing spend allocation to Technology by 15–20%. Prioritize phone accessories and copier consumables.",
        icon: "Zap",
        accentColor: "#fb923c",
      },
      {
        title: "Audit Furniture Suppliers",
        description: "Renegotiate supplier contracts for Tables and Bookcases. Consider discontinuing lowest-performing SKUs if margin doesn't recover.",
        icon: "ClipboardList",
        accentColor: "#fdba74",
      },
      {
        title: "Expand West Region Playbook",
        description: "Document the sales and logistics practices driving West's outperformance. Pilot the same approach in the Central region.",
        icon: "Map",
        accentColor: "#f97316",
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
        description: "Audit teams with >30% of staff on consistent overtime. Hire to capacity or redistribute workload.",
        icon: "Clock",
        accentColor: "#f97316",
      },
      {
        title: "Revise Entry-Level Compensation",
        description: "Benchmark roles paying under $3,000/month against market data. A 10–15% salary increase for bottom quartile is likely cheaper than replacing them.",
        icon: "DollarSign",
        accentColor: "#fb923c",
      },
      {
        title: "Build a 90-Day Onboarding Program",
        description: "Create structured mentorship and check-in cycles for all new hires. Track satisfaction scores at 30, 60, and 90 days.",
        icon: "Users",
        accentColor: "#fdba74",
      },
    ],
  },

  {
    slug: "fmcg-sales-analysis",
    title: "FMCG Daily Sales Analysis",
    subtitle: "Mengidentifikasi faktor utama yang mendorong penjualan harian produk FMCG 2022–2024",
    description:
      "Analisis end-to-end data penjualan harian FMCG dari Kaggle dengan 190.757 baris transaksi. Mengidentifikasi faktor-faktor kunci seperti stok, promosi, harga, dan distribusi regional yang memengaruhi revenue — dilengkapi dashboard interaktif dan rekomendasi strategis berbasis data.",
    coverImage: "/images/projects/fmcg/cover.jpg",
    galleryImages: [],
    githubUrl: "https://github.com/aliefhafid/fmcg-sales-analysis",
    techStack: ["Python", "Pandas", "Seaborn", "Matplotlib", "Google Colab"],
    dataset: {
      name: "FMCG Daily Sales Data (2022–2024)",
      source: "Kaggle",
      rows: 190757,
      columns: 15,
      fileFormat: "CSV",
      license: "CC0: Public Domain",
      downloadUrl: "https://www.kaggle.com/datasets/beatafaron/fmcg-daily-sales-data-to-2022-2024/data",
    },
    businessProblem: [
      "Faktor apa yang paling signifikan memengaruhi volume penjualan harian?",
      "Apakah ketersediaan stok berdampak langsung terhadap jumlah unit terjual?",
      "Seberapa besar efektivitas promosi dalam mendorong peningkatan penjualan?",
      "Produk, kategori, dan region mana yang menjadi kontributor terbesar terhadap revenue?",
      "Bagaimana strategi harga memengaruhi pendapatan secara keseluruhan?",
    ],
    tablePreview: {
      headers: ["date", "sku", "brand", "segment", "category", "channel", "region", "pack_type", "price_unit", "promotion_flag", "stock_available", "delivered_qty", "units_sold", "day_of_week", "revenue"],
      rows: [
        ["2022-01-01", "YO-029", "YoBrand4", "Premium", "Yogurt", "Retail", "PL-South", "Single", "2.91", 0, 142, 120, 35, "Saturday", "101.85"],
        ["2022-01-01", "MI-026", "MiBrand3", "Standard", "Milk", "Discount", "PL-North", "Carton", "8.60", 1, 98, 85, 48, "Saturday", "412.80"],
        ["2022-01-02", "RE-004", "ReBrand2", "Economy", "ReadyMeal", "Retail", "PL-Central", "Single", "3.20", 0, 210, 190, 22, "Sunday", "70.40"],
        ["2022-01-02", "YO-005", "YoBrand1", "Premium", "Yogurt", "Discount", "PL-South", "Carton", "5.50", 1, 175, 160, 61, "Sunday", "335.50"],
        ["2022-01-03", "SN-012", "SnBrand2", "Standard", "SnackBar", "Retail", "PL-North", "Single", "1.80", 0, 320, 290, 18, "Monday", "32.40"],
      ],
    },
    timeline: [
      {
        icon: "Database",
        title: "Data Collection",
        description: "Mengunduh dataset FMCG Daily Sales dari Kaggle menggunakan Kaggle API di Google Colab. Dataset mencakup 190.757 entri dengan 15 kolom tanpa missing values.",
      },
      {
        icon: "Wrench",
        title: "Data Cleaning",
        description: "Mengkonversi kolom date ke format datetime, mengidentifikasi dan menghapus 3 baris anomali dengan nilai negatif pada units_sold dan delivered_qty.",
      },
      {
        icon: "BarChart2",
        title: "Exploratory Data Analysis",
        description: "Membangun correlation matrix untuk 190.757 baris data. Ditemukan 5 faktor utama: volume penjualan (0.78), stok (0.67), promosi (0.50), dan harga (0.54) terhadap revenue.",
      },
      {
        icon: "Layout",
        title: "Visualisasi & Dashboard",
        description: "Membuat scatter plot stok vs unit terjual berdasarkan promotion flag, tren penjualan harian 2022–2024, top SKU/brand/kategori/region, dan distribusi unit per hari pengiriman.",
      },
      {
        icon: "Lightbulb",
        title: "Insight & Rekomendasi",
        description: "Merangkum 6 insight utama dan menyusun 4 rekomendasi strategis berbasis data untuk mendukung pertumbuhan bisnis FMCG.",
      },
    ],
    dashboardImage: "/images/projects/fmcg/dashboard.jpg",
    dashboardEmbed: "",
    insights: [
      {
        icon: "TrendingUp",
        title: "Tren Pertumbuhan Konsisten 2022–2024",
        description: "Total unit terjual dan jumlah pengiriman menunjukkan tren pertumbuhan yang konsisten sepanjang 2022–2024, menandakan peningkatan permintaan dan performa bisnis yang stabil.",
      },
      {
        icon: "Zap",
        title: "Promosi Melipatgandakan Penjualan",
        description: "Rata-rata unit terjual meningkat hampir dua kali lipat saat promosi aktif (34.06 vs 17.44 unit), menjadikan promosi salah satu pendorong utama penjualan.",
      },
      {
        icon: "Package",
        title: "Yogurt & Milk Mendominasi Revenue",
        description: "Kategori Yogurt (8.2M revenue) dan Milk (4.1M revenue) menjadi kontributor terbesar. Brand SnBrand2 dan seri YoBrand memimpin di level brand.",
      },
      {
        icon: "AlertTriangle",
        title: "Stok Adalah Fondasi Penjualan",
        description: "Korelasi 0.67 antara stock_available dan delivered_qty menunjukkan bahwa ketersediaan stok adalah prasyarat utama sebelum menjalankan promosi apapun.",
      },
      {
        icon: "MapPin",
        title: "Distribusi Regional yang Merata",
        description: "Revenue tersebar merata di PL-South (6.67M), PL-North (6.66M), dan PL-Central (6.62M), menunjukkan tidak ada region yang secara signifikan tertinggal.",
      },
      {
        icon: "Clock",
        title: "Waktu Pengiriman 1–2 Hari Lebih Efektif",
        description: "Pengiriman 1–2 hari lebih sering dikaitkan dengan transaksi berjumlah besar, meskipun secara keseluruhan waktu pengiriman tidak menunjukkan pengaruh signifikan terhadap penjualan.",
      },
    ],
    recommendations: [
      {
        title: "Prioritaskan Manajemen Stok",
        description: "Terapkan inventory forecasting dan safety stock untuk produk dengan permintaan tinggi seperti Yogurt dan Milk. Pastikan stok selalu tersedia sebelum menjalankan program promosi agar peningkatan penjualan dapat dimaksimalkan.",
        icon: "Package",
        accentColor: "#f97316",
      },
      {
        title: "Optimalkan Program Promosi",
        description: "Jalankan promosi secara terukur pada produk dengan stok memadai. Evaluasi efektivitas promosi per SKU dan region untuk menghindari promosi yang tidak menghasilkan ROI positif.",
        icon: "Zap",
        accentColor: "#fb923c",
      },
      {
        title: "Fokus pada Produk Unggulan",
        description: "Prioritaskan Yogurt, Milk, ReadyMeal, dan SnackBar dalam alokasi stok, distribusi, dan anggaran pemasaran. Brand SnBrand2 dan YoBrand perlu dipertahankan sebagai anchor brand.",
        icon: "TrendingUp",
        accentColor: "#fdba74",
      },
      {
        title: "Strategi Penetapan Harga Kompetitif",
        description: "Manfaatkan korelasi 0.54 antara price_unit dan revenue dengan menerapkan dynamic pricing per kategori dan region. Hindari penurunan harga massal yang dapat menggerus margin.",
        icon: "DollarSign",
        accentColor: "#f97316",
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