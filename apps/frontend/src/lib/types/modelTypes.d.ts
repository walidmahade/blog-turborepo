export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Like {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tag {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
