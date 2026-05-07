export interface BookData {
  key: string;
  author_name: string[];
  cover_i: number;
  ratings_average: number;
  title: string;
}

export interface Book {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string | undefined;
  rating: number;
}

export interface WishlistItem {
  _id: string;
  bookId: string;
  title: string;
  authors: string[];
  thumbnail?: string;
  rating: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface LottieStateProps {
  src: string;
  description: string;
  children?: React.ReactNode;
}