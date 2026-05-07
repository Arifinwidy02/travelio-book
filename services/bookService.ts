export const fetchGoogleBooks = async (query: string) => {
    try {
        if(!query) return [];
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        const data = await res.json()
        return data.items || []
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