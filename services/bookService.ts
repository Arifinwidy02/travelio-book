export const fetchGoogleBooks = async (query: string) => {
    try {
        if(!query) return [];
        // const res = await fetch(`https://www.librarything.com/services/rest/`)
        // const res = await fetch(`https://openlibrary.org/search.json?q=${query}`)
        const res = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&fields=key,title,author_name,cover_i,ratings_average`)
        // const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        const data = await res.json()
        const docs = data.docs || [];
        return docs
    } catch (error) {
        console.log('error', error)
        return []
    }
}

export const addtoWishlist = async (book: any) => {
    try {
        const res = await fetch('/api/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log('error', error)
        return []
    }
}

export const fetchWishlist = async () => {
  const res = await fetch('/api/wishlist');
  if (!res.ok) {
    throw new Error('Gagal mengambil data wishlist');
  }
  return res.json();
};