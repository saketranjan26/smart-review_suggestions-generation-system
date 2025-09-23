"use client"

import type React from "react"

import { useRef } from "react"
import { ChevronLeft, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { FeedbackData } from "@/app/page"
import { ProgressIndicator } from "@/components/progress"

interface PhotoUploadStepProps {
  data: FeedbackData
  onUpdate: (data: Partial<FeedbackData>) => void
  onNext: () => void
  onBack: () => void
}

export function PhotoUploadStep({ data, onUpdate, onNext, onBack }: PhotoUploadStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    onUpdate({ photos: [...data.photos, ...files] })
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-2">
          <button onClick={onBack}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-semibold">ADD FEEDBACK</h1>
        </div>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator currentStep={2} />

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        <h2 className="text-base font-semibold mb-3 text-gray-800">Add Photos and Videos</h2>

        {/* Illustration Card */}
        <div className="bg-blue-50 rounded-xl p-3 mb-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-blue-600 text-xs font-medium text-balance">Show us what your product looks like</p>
            </div>
            <div className="ml-2">
              <div className="w-12 h-9 bg-purple-100 rounded-lg flex items-center justify-center relative">
                <div className="w-9 h-6 bg-white rounded border-2 border-purple-200 flex items-center justify-center">
                  <div className="w-4 h-3 bg-purple-600 rounded"></div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="absolute -top-0.5 -left-0.5 w-2 h-2 bg-orange-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Button */}
        <Button
          onClick={handleUploadClick}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-sm font-medium mb-2"
        >
          <Camera className="w-4 h-4 mr-2" />
          Add Photos & Videos
        </Button>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />

        {/* Show selected files */}
        {data.photos.length > 0 && (
          <div className="mb-3 flex-1">
            <p className="text-xs text-gray-600 mb-2">{data.photos.length} file(s) selected</p>
            <div className="space-y-1">
              {data.photos.map((file, index) => (
                <div key={index} className="text-xs text-gray-700 bg-gray-50 p-2 rounded">
                  {file.name}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto space-y-2">
          <Button
            onClick={onNext}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-sm font-medium"
          >
            Next
          </Button>
          <Button
            variant="outline"
            onClick={onNext}
            className="w-full border-gray-300 text-gray-700 py-3 rounded-xl text-sm font-medium bg-transparent"
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  )
}
