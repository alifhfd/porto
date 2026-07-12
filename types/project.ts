export interface DatasetInfo {
  name: string
  source: string
  rows: number
  columns: number
  fileFormat: string
  license: string
  downloadUrl: string
}

export interface TablePreview {
  headers: string[]
  rows: (string | number)[][]
}

export interface TimelineStep {
  icon: string
  title: string
  description: string
  image?: string
}

export interface Insight {
  icon: string
  title: string
  description: string
}

export interface Recommendation {
  title: string
  description: string
  icon: string
  accentColor: string
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  coverImage: string
  galleryImages: string[]
  githubUrl?: string
  liveDemo?: string
  techStack: string[]
  dataset: DatasetInfo
  businessProblem: string[]
  tablePreview: TablePreview
  timeline: TimelineStep[]
  dashboardImage?: string
  dashboardEmbed?: string   // URL embed Looker Studio iframe
  insights: Insight[]
  recommendations: Recommendation[]
}