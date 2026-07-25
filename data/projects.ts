import { Project } from "@/types/project";

export const projects: Project[] = [
  
  {
    slug: "fmcg-sales-analysis",
    title: "FMCG Daily Sales Analysis",
    subtitle: "Mengidentifikasi faktor utama yang mendorong penjualan harian produk FMCG 2022–2024",
    description:
      "Analisis end-to-end data penjualan harian FMCG dari Kaggle dengan 190.757 baris transaksi. Mengidentifikasi faktor-faktor kunci seperti stok, promosi, harga, dan distribusi regional yang memengaruhi revenue — dilengkapi dashboard interaktif dan rekomendasi strategis berbasis data.",
    coverImage: "/images/projects/fmcg/cover.png",
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
    dashboardImage: "/images/projects/fmcg/dashboard.png",
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