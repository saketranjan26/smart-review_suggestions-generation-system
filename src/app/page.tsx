"use client"

import { useState } from "react"
import { RatingStep } from "@/components/rating"
import { PhotoUploadStep } from "@/components/photoUpload"
import { ReviewStep } from "@/components/review"

export interface FeedbackData {
  overallRating: number
  materialRating: number
  sizeRating: number
  durabilityRating: number
  photos: File[]
  comment: string
}

export default function FeedbackApp() {
  const [currentStep, setCurrentStep] = useState(1)
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    overallRating: 0,
    materialRating: 0,
    sizeRating: 0,
    durabilityRating: 0,
    photos: [],
    comment: "",
  })

  const updateFeedbackData = (data: Partial<FeedbackData>) => {
    setFeedbackData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Feedback submitted:", feedbackData)
    // Handle submission logic here
    alert("Feedback submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-[360px] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden h-[740px] border border-gray-200">
        {currentStep === 1 && <RatingStep data={feedbackData} onUpdate={updateFeedbackData} onNext={nextStep} />}
        {currentStep === 2 && (
          <PhotoUploadStep data={feedbackData} onUpdate={updateFeedbackData} onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 3 && (
          <ReviewStep data={feedbackData} onUpdate={updateFeedbackData} onBack={prevStep} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  )
}
