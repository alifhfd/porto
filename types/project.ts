export interface TimelinePhase {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export interface DatasetInfo {
  name: string;
  source: string;
  rows: number;
  columns: number;
  fileFormat: string;
  license?: string;
  downloadUrl?: string;
}

export interface TablePreview {
  headers: string[];
  rows: (string | number)[][];
}

export interface Insight {
  icon: string;
  title: string;
  description: string;
}

export interface Recommendation {
  title: string;
  description: string;
  icon: string;
  accentColor: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  galleryImages?: string[];
  githubUrl?: string;
  liveDemo?: string;
  techStack: string[];
  dataset: DatasetInfo;
  businessProblem: string[];
  tablePreview: TablePreview;
  timeline: TimelinePhase[];
  dashboardImage: string;
  insights: Insight[];
  recommendations: Recommendation[];
}
