'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchWishlist } from '@/services/bookService';
import BookCard from '@/components/BookCard';
import Link from 'next/link';
import type { WishlistItem } from '@/types';
import LottieState from '@/components/LottieState';

export default function WishlistPage() {
  const { data: wishlist, isLoading, isError, error } = useQuery({
    queryKey: ['wishlist'],
    queryFn: fetchWishlist,
  });

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <Link 
            href="/" 
            className="text-blue-600 hover:underline font-medium"
          >
            ← Kembali Cari Buku
          </Link>
        </div>

        {isLoading && (
          <LottieState src="/lottie/Search File.json" description="Memuat wishlist..." />
        )}

        {isError && (
          <p className="text-center text-red-500">
            {(error as any)?.message || 'Terjadi kesalahan saat mengambil data dari database.'}
          </p>
        )}

        {!isLoading && !isError && wishlist?.length === 0 && (
          <LottieState src="/lottie/Empty State.json" description="Wishlist Anda masih kosong.">
            <Link href="/" className="mt-4 inline-block text-blue-500 underline">
              Cari buku sekarang
            </Link>
          </LottieState>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlist?.map((item: WishlistItem) => (
            <BookCard 
              key={item._id} 
              book={{
                id: item.bookId,
                title: item.title,
                authors: item.authors,
                thumbnail: item.thumbnail,
                rating: item.rating
              }} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}