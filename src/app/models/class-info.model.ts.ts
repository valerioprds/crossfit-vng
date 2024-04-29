// src/app/shared/models/class-info.model.ts
export interface ClassSection {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ClassInfo {
  sections: ClassSection[];
}
