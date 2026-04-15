export type HeritageType = "audio" | "script" | "festival" | "custom";

export interface TimelineStep {
  title: string;
  description: string;
  image?: string;
}

export interface CuisineItem {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  ingredients?: string[];
}

export interface HeritageItem {
  id: string;
  name: string;
  type: HeritageType;
  isNationalHeritage: boolean;
  description: string;
  imageUrl?: string;
  contentUrl?: string; 
  timeline?: TimelineStep[];
}

export interface Ethnicity {
  id: string;
  slug: string;
  name: string;
  location: string[];
  population?: {
    total: number;
    year: number;
    provinceStats: string;
    details?: string; 
  };
  geographicStats?: {
    terrain: string;
    climate: string;
    landUsage?: {
      agriculture: string;
      nonAgriculture: string;
      unused: string;
    };
  };
  costumeInfo: {
    description: string;
    colors: string[];
    image?: string;
    jewelryNote?: string; 
    funeralNote?: string; 
    comparisonNote?: string; 
  };
  history: string;
  longDescription: string;
  ecologicalLogic?: string; // Tr tu sinh thAi (Kh MA, MA'ng)
  mythology?: {
    title: string;
    content: string;
  }; // Truyn thuyt vA huyn thoi
  ritualPhilosophy?: string; 
  culturalNarrative?: string; 
  heritage: HeritageItem[];
  cuisines: CuisineItem[];
  imageUrl: string;
}

export interface GeneralHeritage {
  name: string;
  location: string;
  time: string;
  description: string;
}
