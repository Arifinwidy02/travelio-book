'use client';

import { addtoWishlist } from "@/services/bookService";
import StarRating from './StarRating';
import type { Book } from '@/types';

export default function BookCard({ book }: { book: Book }) {
  const handleWishlist = async () => {
    try {
      await addtoWishlist({
        bookId: book.id,
        title: book.title,
        authors: book.authors,
        thumbnail: book.thumbnail,
        rating: book.rating
      });
      alert('Berhasil ditambah ke wishlist!');
    } catch (error) {
      alert('Gagal menambah ke wishlist (mungkin sudah ada)');
    }
  };

  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="w-32 h-48 flex-shrink-0 bg-gray-200">
        {book.thumbnail ? (
          <img 
            src={book.thumbnail} 
            alt={book.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-xs text-gray-400">No Image</div>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2 leading-tight mb-1">
            {book.title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-2">
            {book.authors?.join(', ') || 'Unknown Author'}
          </p>

          <div className="flex items-center gap-1">
            <StarRating rating={book.rating} />
          </div>
        </div>

        <button 
          onClick={handleWishlist}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
        >
          + Wishlist
        </button>
      </div>
    </div>
  );
}