// src/routes/types.d.ts

export interface Blog {
  slug: string;
  title: string;
  content: string;
  date: string;
  excerpt: string;
}


export interface Params {
  slug: string;
}