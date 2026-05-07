'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchWishlist } from '@/services/bookService';
import BookCard from '@/components/BookCard';
import Link from 'next/link';
import type { WishlistItem } from '@/types';

export default function WishlistPage() {
  const { data: wishlist, isLoading, isError } = useQuery({
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

        {isLoading && <p className="text-center">Memuat wishlist...</p>}

        {isError && (
          <p className="text-center text-red-500">
            Terjadi kesalahan saat mengambil data dari database.
          </p>
        )}

        {!isLoading && wishlist?.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500">Wishlist Anda masih kosong.</p>
            <Link href="/" className="mt-4 inline-block text-blue-500 underline">
              Cari buku sekarang
            </Link>
          </div>
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