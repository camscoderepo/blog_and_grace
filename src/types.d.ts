// src/routes/types.d.ts

import { UUID } from "crypto";

export interface Blog {
  id: UUID;
  slug: string;
  title: string;
  content: string;
  author_id: UUID;
  created_at: Date;
  updated_at: Date;
  excerpt: string;
}


export interface Params {
  slug: string;
}