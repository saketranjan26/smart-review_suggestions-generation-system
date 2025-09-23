"use client"

import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  onChange: (rating: number) => void
  showLabels?: boolean
}

export function StarRating({ rating, onChange, showLabels }: StarRatingProps) {
  const labels = ["Very Bad", "Bad", "Ok-Ok", "Good", "Very Good"]

  return (
    <div className="flex items-center justify-between">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="flex flex-col items-center">
          <button onClick={() => onChange(star)} className="p-1 hover:scale-110 transition-transform">
            <Star
              className={`w-8 h-8 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-none text-gray-300"}`}
            />
          </button>
          {showLabels && <span className="text-xs text-gray-500 mt-1 text-center">{labels[star - 1]}</span>}
        </div>
      ))}
    </div>
  )
}
