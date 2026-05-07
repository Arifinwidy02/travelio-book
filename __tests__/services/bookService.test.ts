import { fetchGoogleBooks } from '@/services/bookService';

describe('fetchGoogleBooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns empty array for empty query', async () => {
    const result = await fetchGoogleBooks('');
    expect(result).toEqual([]);
  });

});
