"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { FeedbackData } from "@/app/page"
import { ProgressIndicator } from "@/components/progress"
import { StarRating } from "@/components/starRating"

interface RatingStepProps {
  data: FeedbackData
  onUpdate: (data: Partial<FeedbackData>) => void
  onNext: () => void
}

export function RatingStep({ data, onUpdate, onNext }: RatingStepProps) {
  const handleRatingChange = (category: keyof FeedbackData, rating: number) => {
    onUpdate({ [category]: rating })
  }

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-5 h-5" />
          <h1 className="text-base font-semibold">ADD FEEDBACK</h1>
        </div>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator currentStep={1} />

      {/* Content */}
      <div className="flex-1 p-4 space-y-6 overflow-y-auto">
        {/* Overall Rating */}
        <div>
          <p className="text-gray-600 mb-4 text-sm text-balance">Please let us know what we can improve!</p>
          <StarRating
            rating={data.overallRating}
            onChange={(rating) => handleRatingChange("overallRating", rating)}
            showLabels
          />
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-base font-medium mb-4 text-gray-700">Tell us more about the Product</h2>

          <div className="space-y-5">
            {/* Material */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-gray-800">material</h3>
              <StarRating
                rating={data.materialRating}
                onChange={(rating) => handleRatingChange("materialRating", rating)}
                showLabels
              />
            </div>

            {/* Size */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-gray-800">size</h3>
              <StarRating
                rating={data.sizeRating}
                onChange={(rating) => handleRatingChange("sizeRating", rating)}
                showLabels
              />
            </div>

            {/* Durability */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-gray-800">Durability</h3>
              <StarRating
                rating={data.durabilityRating}
                onChange={(rating) => handleRatingChange("durabilityRating", rating)}
                showLabels
              />
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="p-3 bg-white border-t">
        <Button
          onClick={onNext}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-base font-medium"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
