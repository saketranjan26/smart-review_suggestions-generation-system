"use client"

import { useState } from "react"
import { ChevronLeft, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import type { FeedbackData } from "@/app/page"
import { ProgressIndicator } from "@/components/progress"

interface ReviewStepProps {
  data: FeedbackData
  onUpdate: (data: Partial<FeedbackData>) => void
  onBack: () => void
  onSubmit: () => void
}

const reviewSuggestions = [
  "I love Meesho ❤️ thanks",
  "Fabric is good",
  "awesome product value for money",
  "product look same as in the photo",
  "Best 😍😍",
  "feels comfy"
]

export function ReviewStep({ data, onUpdate, onBack, onSubmit }: ReviewStepProps) {
  const [comment, setComment] = useState(data.comment)

  const handleCommentChange = (value: string) => {
    setComment(value)
    onUpdate({ comment: value })
  }

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        {/* ... existing header content ... */}
        <div className="flex items-center gap-2">
            <button onClick={onBack}>
                <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-base font-semibold">ADD FEEDBACK</h1>
        </div>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator currentStep={3} />

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        <h2 className="text-base font-semibold mb-3 text-gray-800">Type Comment</h2>

        {/* Illustration Card (No changes here) */}
        <div className="bg-blue-50 rounded-xl p-3 mb-4 relative overflow-hidden">
          {/* ... existing card content ... */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-blue-600 text-xs font-medium text-balance">Type your feedback to help customers</p>
            </div>
            <div className="ml-2">
              <div className="flex items-center space-x-1.5">
                <div className="w-6 h-9 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="w-12 h-8 bg-purple-600 rounded-lg flex items-center justify-center relative">
                  <div className="w-9 h-5 bg-white rounded border"></div>
                  <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-auto">
          <div className="flex flex-wrap gap-2">
            {reviewSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleCommentChange(suggestion)}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Comment Input */}
        <div className="relative mb-3">
          <Textarea
            value={comment}
            onChange={(e) => handleCommentChange(e.target.value)}
            placeholder="Type Comment"
            className="w-full h-[120px] min-h-[100px] p-3 border border-gray-200 rounded-xl resize-none text-sm placeholder:text-gray-400"
          />
          <button className="absolute bottom-2 right-2 p-1.5 text-purple-600 hover:bg-purple-50 rounded-full">
            <Mic className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-4">
          <Button
            onClick={onSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-sm font-medium"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}