import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const fraction = rating - fullStars;

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= fullStars) {
          return <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />;
        }
        if (star === fullStars + 1 && fraction > 0) {
          return (
            <div key={star} className="relative" style={{ width: 14, height: 14 }}>
              <Star size={14} className="absolute text-gray-300" />
              <div className="absolute overflow-hidden" style={{ width: `${fraction * 100}%` }}>
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          );
        }
        return <Star key={star} size={14} className="text-gray-300" />;
      })}
      <span className="text-xs text-gray-500 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}
