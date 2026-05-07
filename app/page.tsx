'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGoogleBooks } from '@/services/bookService';
import BookCard from '@/components/BookCard';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import { X, Heart } from 'lucide-react';
import type { BookData } from '@/types';
import LottieState from '@/components/LottieState';

export default function Home() {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search || 'harry potter', 500);

  const { data: books, isLoading, isError, error } = useQuery({
    queryKey: ['books', debouncedSearch],
    queryFn: () => fetchGoogleBooks(debouncedSearch),
    enabled: debouncedSearch.length > 2,
    retry: false
  });


  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-center">Travelio Book Search</h1>
          <Link
            href="/wishlist"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
          >
            <Heart size={16} />
            Wishlist
          </Link>
        </div>
        
        <div className="mb-8 relative">
          <input
            type="text"
            value={search}
            placeholder="Cari judul buku atau penulis..."
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {isLoading && (
          <LottieState src="/lottie/Search File.json" description="Sedang mencari buku..." />
        )}
        
        {isError && <p className="text-center text-red-500">{(error as any)?.message || 'Terjadi kesalahan saat mengambil data.'}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books?.map((book: BookData) => (
            <BookCard 
              key={book.key} 
              book={{
                id: book.key,
                title: book.title,
                authors: book.author_name,
                thumbnail: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : undefined,
                rating: book.ratings_average || 0 
              }} 
            />
          ))}
        </div>

        {!isLoading && !isError && books?.length === 0 && debouncedSearch.length > 2 && (
          <LottieState src="/lottie/Empty State.json" description="Tidak ada buku yang ditemukan." />
        )}
      </div>
    </main>
  );
}